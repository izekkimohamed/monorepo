// utils/scannerConnection.js
const SCALE_COMMANDS = {
  ZERO_SCALE: "Z",
  READ_WEIGHT: "W",
  TARE: "T",
};

class ScannerConnection {
  constructor() {
    this.port = null;
    this.reader = null;
    this.writer = null;
    this.isConnected = false;
    this.onScanCallback = null;
    this.onWeightCallback = null;
  }

  async connect() {
    try {
      // Request port access using Web Serial API
      this.port = await navigator.serial.requestPort({
        filters: [
          // Datalogic Magellan 9300i USB VID/PID
          { usbVendorId: 0x05f9, usbProductId: 0x2218 },
        ],
      });

      await this.port.open({
        baudRate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: "none",
        flowControl: "none",
      });

      this.reader = this.port.readable.getReader();
      this.writer = this.port.writable.getWriter();

      this.isConnected = true;
      this.startReading();

      return true;
    } catch (error) {
      console.error("Failed to connect:", error);
      return false;
    }
  }

  async disconnect() {
    if (this.reader) {
      await this.reader.releaseLock();
    }
    if (this.writer) {
      await this.writer.releaseLock();
    }
    if (this.port) {
      await this.port.close();
    }
    this.isConnected = false;
  }

  async startReading() {
    while (this.isConnected) {
      try {
        const { value, done } = await this.reader.read();
        if (done) {
          break;
        }

        // Process the received data
        const data = new TextDecoder().decode(value);
        this.processData(data);
      } catch (error) {
        console.error("Error reading data:", error);
        break;
      }
    }
  }

  processData(data) {
    // Check if it's a barcode scan or weight reading
    if (data.startsWith("S")) {
      // Scan data prefix
      const barcode = data.substring(1).trim();
      if (this.onScanCallback) {
        this.onScanCallback(barcode);
      }
    } else if (data.startsWith("W")) {
      // Weight data prefix
      const weight = parseFloat(data.substring(1));
      if (this.onWeightCallback) {
        this.onWeightCallback(weight);
      }
    }
  }

  async sendCommand(command) {
    if (!this.isConnected) {
      throw new Error("Scanner not connected");
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(command + "\r\n");
    await this.writer.write(data);
  }

  // Scale specific commands
  async zeroScale() {
    await this.sendCommand(SCALE_COMMANDS.ZERO_SCALE);
  }

  async readWeight() {
    await this.sendCommand(SCALE_COMMANDS.READ_WEIGHT);
  }

  async tare() {
    await this.sendCommand(SCALE_COMMANDS.TARE);
  }

  onScan(callback) {
    this.onScanCallback = callback;
  }

  onWeight(callback) {
    this.onWeightCallback = callback;
  }
}

export const scannerConnection = new ScannerConnection();
