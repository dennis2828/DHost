import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const poppins = Poppins({subsets:['latin'],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
});

export const metadata: Metadata = {
  title: "DHost",
  description: "Free & Fast image hosting",
  icons:"./globe.svg"
};

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
