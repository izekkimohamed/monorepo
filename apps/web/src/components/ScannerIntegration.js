// components/ScannerIntegration.js
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { scannerConnection } from "../utils/scannerConnection";

const ScannerIntegration = ({ onScan, onWeight }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set up scanner callbacks
    scannerConnection.onScan((barcode) => {
      if (onScan) {
        onScan(barcode);
      }
    });

    scannerConnection.onWeight((weight) => {
      if (onWeight) {
        onWeight(weight);
      }
    });

    // Cleanup on unmount
    return () => {
      if (isConnected) {
        scannerConnection.disconnect();
      }
    };
  }, [onScan, onWeight]);

  const handleConnect = async () => {
    try {
      const connected = await scannerConnection.connect();
      setIsConnected(connected);
      setError(null);
    } catch (err) {
      setError(
        "Failed to connect to scanner. Please check the connection and try again.",
      );
      console.error(err);
    }
  };

  const handleDisconnect = async () => {
    try {
      await scannerConnection.disconnect();
      setIsConnected(false);
      setError(null);
    } catch (err) {
      setError("Error disconnecting scanner");
      console.error(err);
    }
  };

  const handleZeroScale = async () => {
    try {
      await scannerConnection.zeroScale();
    } catch (err) {
      setError("Error zeroing scale");
      console.error(err);
    }
  };

  const handleTare = async () => {
    try {
      await scannerConnection.tare();
    } catch (err) {
      setError("Error taring scale");
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-x-4">
        {!isConnected ? (
          <button
            onClick={handleConnect}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Connect Scanner
          </button>
        ) : (
          <>
            <button
              onClick={handleDisconnect}
              className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            >
              Disconnect
            </button>
            <button
              onClick={handleZeroScale}
              className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
            >
              Zero Scale
            </button>
            <button
              onClick={handleTare}
              className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
            >
              Tare
            </button>
          </>
        )}
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Status: {isConnected ? "Connected" : "Disconnected"}
        </p>
      </div>
    </div>
  );
};

export default ScannerIntegration;
