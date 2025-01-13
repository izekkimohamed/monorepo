//@ts-nocheck
import ScannerIntegration from "@/components/ScannerIntegration";

export default function POSPage() {
  const handleScan = (barcode) => {
    // Handle scanned barcode
    console.log("Scanned:", barcode);
  };

  const handleWeight = (weight) => {
    // Handle weight reading
    console.log("Weight:", weight);
  };

  return (
    <div>
      <h1>POS System</h1>
      <ScannerIntegration onScan={handleScan} onWeight={handleWeight} />
      {/* Rest of your POS UI */}
    </div>
  );
}
