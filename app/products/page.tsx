import { Header } from "@/components/header"
import { Products } from "@/components/products"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Pharmabest Supplies — Thermal Labels, Receipts & Printers",
  description: "Browse our complete lineup of pharmacy supplies: plain and custom thermal labels, thermal receipt rolls, thermal printers, and accessories. IDA, Guardian, and Pharmasave compatible.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Spacer for fixed header */}
      <div className="pt-[100px]" />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}
