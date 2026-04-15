import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pharmabest Supplies — Premium Pharmacy Thermal Labels, Receipts & Printers",
  description:
    "Pharmabest Supplies provides high-quality thermal labels, receipt rolls, thermal printers, and accessories to pharmacies across Ontario. Best price guaranteed, fast shipping, free tech support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#202324]">
        {children}
      </body>
    </html>
  );
}
