import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@repo/ui/dist/index.css";
import { Providers } from "@repo/ui/src/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}): JSX.Element {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
