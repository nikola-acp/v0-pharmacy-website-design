import { Tag, Receipt, Printer, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    title: "Plain Labels",
    description: "Durable and versatile labels perfect for labeling prescription bottles, packages, and various pharmacy-related items. Adheres securely to surfaces.",
    icon: Tag,
  },
  {
    title: "Plain Receipts",
    description: "Clean, simple receipt rolls providing easy-to-read transaction records. Sturdy material ensures receipts hold up over time.",
    icon: Receipt,
  },
  {
    title: "Customized Labels",
    description: "Elevate your pharmacy's brand with custom-designed labels featuring your logo, name, and contact details for professional impressions.",
    icon: Tag,
    featured: true,
  },
  {
    title: "Customized Receipts",
    description: "Branded receipts with your pharmacy's logo and contact information. A marketing tool that reinforces your brand with every transaction.",
    icon: Receipt,
    featured: true,
  },
  {
    title: "Thermal Printers",
    description: "Fast, efficient, and reliable thermal printers designed for high-volume printing. Delivers crisp printouts every time.",
    icon: Printer,
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Explore Our Premium Selection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated pharmacy products designed to streamline operations and improve customer experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                product.featured 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card border border-border hover:border-foreground/20"
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                product.featured 
                  ? "bg-primary-foreground/10" 
                  : "bg-secondary"
              }`}>
                <product.icon className={`w-6 h-6 ${
                  product.featured ? "text-primary-foreground" : "text-foreground"
                }`} />
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${
                product.featured ? "text-primary-foreground" : "text-foreground"
              }`}>
                {product.title}
              </h3>
              
              <p className={`leading-relaxed ${
                product.featured ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {product.description}
              </p>
              
              <div className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                product.featured 
                  ? "bg-primary-foreground/10" 
                  : "bg-secondary"
              }`}>
                <Plus className={`w-4 h-4 ${
                  product.featured ? "text-primary-foreground" : "text-foreground"
                }`} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="#contact">
              Request Custom Order
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
