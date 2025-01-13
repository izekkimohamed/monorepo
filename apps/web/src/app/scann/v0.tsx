"use client";

import { Button } from "@ui/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/ui/card";
import { Input } from "@ui/components/ui/input";
import { Barcode, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Product {
  name: string;
  price: number;
  description: string;
}

const PhysicalBarcodeScanner = () => {
  const [barcode, setBarcode] = useState("");
  const [scanning, setScanning] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleScan = async () => {
    if (barcode) {
      setScanning(true);
      setError(null);
      setProduct(null);

      try {
        await fetchProduct(barcode);
      } catch (err) {
        setError("Failed to fetch product information.");
      } finally {
        setScanning(false);
        setBarcode("");
      }
    }
  };

  const fetchProduct = async (barcode: string) => {
    // This is a placeholder function. In a real app, you would fetch the product data from an API.
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setProduct({
          name: `Product ${barcode}`,
          price: Math.floor(Math.random() * 100) + 1,
          description: `This is a placeholder description for product ${barcode}.`,
        });
        resolve();
      }, 1000); // Simulating API delay
    });
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="grid h-screen text-white bg-gradient-to-bl from-blue-500 to-purple-500 place-items-center">
      <Card className="w-full max-w-md mx-auto border-2 rounded-lg border-gray-50">
        <CardHeader>
          <CardTitle>Physical Barcode Scanner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Scan barcode..."
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleScan();
                  }
                }}
                className="flex-grow"
              />
              <Button onClick={handleScan} disabled={scanning || !barcode}>
                {scanning ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Barcode className="w-4 h-4" />
                )}
              </Button>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {product && (
              <div className="p-4 space-y-2 bg-gray-100 rounded-lg">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            )}
            <p className="text-sm text-gray-500">
              Use your physical barcode scanner to scan a product. The input field above
              will automatically receive the scanned barcode.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhysicalBarcodeScanner;
