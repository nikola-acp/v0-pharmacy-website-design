import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustedBrands } from "@/components/trusted-brands"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBrands />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
