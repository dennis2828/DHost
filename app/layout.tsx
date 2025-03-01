import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import { metadataInfo } from "@/metadata";

const poppins = Poppins({subsets:['latin'],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
});

export const metadata: Metadata = metadataInfo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-darkGray text-white overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
