"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle2, Minus, Plus, Trash2, ChevronRight, ShoppingCart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const products = [
  {
    id: "plain-labels",
    name: "Plain Thermal Labels",
    category: "Plain Labels",
    basePrice: 233.58,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CyXKAprfGp7MKoJXZKXeDw1M7qRrB4.png",
  },
  {
    id: "plain-receipts",
    name: "Plain Thermal Receipts",
    category: "Plain Receipts",
    basePrice: 202.78,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YZOxQdTt8EFDgAF1ce6vdsxIH0ZuhQ.png",
  },
  {
    id: "custom-labels",
    name: "Custom Thermal Labels",
    category: "Custom Labels",
    basePrice: 233.58,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HsFNwQitEq1sKAWPAMG2V7WtrkGX7Z.png",
  },
  {
    id: "custom-receipts",
    name: "Custom Thermal Receipts",
    category: "Custom Receipts",
    basePrice: 202.78,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dLfXYCgucqqwxxUCriQqiUl1QNv8IL.png",
  },
  {
    id: "thermal-printer",
    name: "Thermal Printer",
    category: "Thermal Printers",
    basePrice: 470.00,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6qTMTr3SaenmF1yFhAf43rJWRY9v0n.png",
  },
]

const sortOptions = [
  { value: "default", label: "Default sorting" },
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
]

const quantityOptions = [1, 2, 3, 4, 5, 10, 20, 50, 100]

type CartItem = {
  productId: string
  quantity: number
}

function generateOrderId() {
  return "ORD-" + Math.random().toString(36).slice(2, 7).toUpperCase()
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [sortBy, setSortBy] = useState("default")
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", pharmacy: "", notes: "" })
  const [submitted, setSubmitted] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [showCheckout, setShowCheckout] = useState(false)
  const [customOrder, setCustomOrder] = useState({ description: "", size: "", quantity: "", format: "", email: "", phone: "" })

  const sortedProducts = useMemo(() => {
    const sorted = [...products]
    switch (sortBy) {
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case "name-desc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      case "price-low":
        return sorted.sort((a, b) => (a.basePrice ?? Infinity) - (b.basePrice ?? Infinity))
      case "price-high":
        return sorted.sort((a, b) => (b.basePrice ?? -Infinity) - (a.basePrice ?? -Infinity))
      default:
        return sorted
    }
  }, [sortBy])

  const addToCart = (productId: string) => {
    const existing = cart.find((item) => item.productId === productId)
    if (existing) {
      setCart(cart.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item))
    } else {
      setCart([...cart, { productId, quantity: 1 }])
    }
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.productId !== productId))
    } else {
      setCart(cart.map((item) => item.productId === productId ? { ...item, quantity } : item))
    }
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.productId !== productId))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId)
      if (product?.basePrice) {
        return total + product.basePrice * item.quantity
      }
      return total
    }, 0)
  }

  const hasCustomProducts = cart.some((item) => {
    const product = products.find((p) => p.id === item.productId)
    return product?.basePrice === null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderId(generateOrderId())
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="pt-[140px] pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-slate-900">Products</span>
          </nav>

          {/* Header with sorting */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Products
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 h-10 rounded-lg border-slate-200 bg-white text-sm font-medium">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {submitted ? (
            <div className="max-w-xl mx-auto text-center py-16">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-200 mx-auto mb-6">
                <CheckCircle2 className="h-9 w-9 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Order Request Submitted!</h2>
              <p className="text-slate-500 font-medium mb-6">
                We&apos;ve received your order request and will contact you within one business day to confirm pricing and delivery details.
              </p>
              <div className="inline-flex flex-col items-center gap-1 bg-blue-50 border border-blue-100 rounded-2xl px-10 py-5 mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Your Order ID</p>
                <p className="text-3xl font-extrabold tracking-widest text-blue-700">{orderId}</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Keep this for your records</p>
              </div>
              <Button asChild className="rounded-full px-8 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          ) : showCheckout ? (
            /* Checkout Form */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Products
                </button>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Complete Your Order</h2>
                  
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="order-name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                        <Input id="order-name" type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="order-email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                        <Input id="order-email" type="email" placeholder="you@pharmacy.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="order-pharmacy" className="text-xs font-bold uppercase tracking-widest text-slate-500">Pharmacy Name</label>
                        <Input id="order-pharmacy" type="text" placeholder="e.g. Queen St. Pharmacy" value={formData.pharmacy} onChange={(e) => setFormData({ ...formData, pharmacy: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="order-phone" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                          Phone <span className="text-slate-400 normal-case tracking-normal font-medium">(optional)</span>
                        </label>
                        <Input id="order-phone" type="tel" placeholder="(647) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="order-notes" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Notes <span className="text-slate-400 normal-case tracking-normal font-medium">(optional)</span>
                      </label>
                      <Textarea id="order-notes" placeholder="Special requirements, custom branding details, etc." rows={3} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="resize-none rounded-xl border-slate-200 text-sm font-medium" />
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-xs text-slate-400 font-medium mb-4">
                      By submitting, you agree to be contacted regarding your order. For online payment, we use secure Shopify checkout.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full h-12 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-200 border-0 transition-all"
                    >
                      Submit Order Request
                    </Button>
                  </div>
                </form>
              </div>

              {/* Order summary sidebar */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 p-6 h-fit sticky top-[160px]">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  {cart.map((item) => {
                    const product = products.find((p) => p.id === item.productId)!
                    return (
                      <div key={item.productId} className="flex justify-between items-start text-sm">
                        <div>
                          <p className="font-semibold text-slate-800">{product.name}</p>
                          <p className="text-slate-400 text-xs">Qty: {item.quantity}</p>
                        </div>
                        {product.basePrice ? (
                          <p className="font-bold text-slate-900">${(product.basePrice * item.quantity).toFixed(2)}</p>
                        ) : (
                          <p className="text-xs text-slate-400 italic">Quote required</p>
                        )}
                      </div>
                    )
                  })}
                </div>
                <div className="border-t border-slate-100 pt-4">
                  {hasCustomProducts && (
                    <p className="text-xs text-amber-600 font-medium mb-3">
                      * Custom products require a quote. We&apos;ll confirm final pricing.
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-600">Estimated Total</span>
                    <span className="text-xl font-extrabold text-slate-900">
                      {hasCustomProducts && getCartTotal() === 0 ? "Quote" : `$${getCartTotal().toFixed(2)}${hasCustomProducts ? "+" : ""}`}
                    </span>
                  </div>
                </div>

                {/* Payment methods */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Payment Options</p>
                  <div className="flex items-center gap-2">
                    <div className="h-7 px-2 bg-slate-100 rounded flex items-center justify-center">
                      <span className="text-[10px] font-bold text-slate-600">VISA</span>
                    </div>
                    <div className="h-7 px-2 bg-slate-100 rounded flex items-center justify-center">
                      <span className="text-[10px] font-bold text-slate-600">MC</span>
                    </div>
                    <div className="h-7 px-2 bg-slate-100 rounded flex items-center justify-center">
                      <span className="text-[10px] font-bold text-slate-600">AMEX</span>
                    </div>
                    <div className="h-7 px-2 bg-slate-100 rounded flex items-center justify-center">
                      <span className="text-[10px] font-bold text-slate-600">Interac</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">Secure checkout powered by Shopify</p>
                </div>
              </div>
            </div>
          ) : (
            /* Product grid */
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {sortedProducts.map((product) => {
                  const cartItem = cart.find((item) => item.productId === product.id)
                  const inCart = !!cartItem

                  const descriptions: Record<string, string> = {
                    "plain-labels": "High-adhesion durable label rolls for prescription bottles and general pharmacy use.",
                    "plain-receipts": "Crystal-clear thermal receipt rolls for long-lasting transaction records.",
                    "custom-labels": "Branded labels with your pharmacy's logo, name, and contact information.",
                    "custom-receipts": "Branded receipt rolls featuring your pharmacy logo on every transaction.",
                    "thermal-printer": "Fast, reliable thermal printers built for high-volume pharmacy environments.",
                  }

                  const tags: Record<string, string | null> = {
                    "plain-labels": null,
                    "plain-receipts": null,
                    "custom-labels": "Most Popular",
                    "custom-receipts": "Most Popular",
                    "thermal-printer": "Free setup",
                  }

                  return (
                    <div
                      key={product.id}
                      className={`group relative flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 border-2 ${
                        inCart
                          ? "border-blue-300 shadow-xl shadow-blue-100/50"
                          : "border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                      }`}
                    >
                      {tags[product.id] && (
                        <span className="absolute top-4 right-4 z-10 bg-blue-50 text-blue-700 border border-blue-100 text-[11px] font-bold tracking-wide px-2.5 py-0.5 rounded-full">
                          {tags[product.id]}
                        </span>
                      )}

                      {/* Product image */}
                      <div className="relative aspect-square bg-slate-100 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product info */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-[15px] font-extrabold text-slate-900 mb-2 tracking-tight">{product.name}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium flex-1">{descriptions[product.id]}</p>
                        <p className="text-lg font-extrabold text-slate-900 mt-2">${product.basePrice.toFixed(2)}</p>

                        {/* Install Drivers — only for Thermal Printer */}
                        {product.id === "thermal-printer" && (
                          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Install Drivers</p>
                              <div className="flex items-center gap-3">
                                <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                                  </svg>
                                  Windows
                                </a>
                                <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                                  </svg>
                                  macOS
                                </a>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => addToCart(product.id)}
                              className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold px-5 py-2 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 h-10"
                            >
                              Add to Cart
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        )}

                        {/* Regular products product button */}
                        {product.id !== "thermal-printer" && (
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            {inCart ? (
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                                  className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                                >
                                  <Minus className="h-4 w-4 text-slate-600" />
                                </button>
                                <Select
                                  value={String(cartItem.quantity)}
                                  onValueChange={(val) => updateQuantity(product.id, parseInt(val))}
                                >
                                  <SelectTrigger className="flex-1 h-9 text-sm font-semibold border-slate-200">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {quantityOptions.map((qty) => (
                                      <SelectItem key={qty} value={String(qty)}>{qty}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                                  className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                                >
                                  <Plus className="h-4 w-4 text-slate-600" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(product.id)}
                                  className="h-9 w-9 rounded-lg border border-red-200 flex items-center justify-center hover:bg-red-50 transition-colors"
                                >
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => addToCart(product.id)}
                                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold px-5 py-2 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200"
                              >
                                Add to Cart
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                  <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Custom Order card */}
                <div className="flex flex-col rounded-2xl border-2 border-blue-700/50 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 overflow-hidden">
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">Custom</p>
                      <h3 className="text-base font-extrabold text-white leading-snug">Request Custom Order</h3>
                      <p className="text-xs text-white/50 mt-1">Fill in the details below and we will get back to you with a quote.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Product Type</label>
                        <select
                          value={customOrder.format}
                          onChange={(e) => setCustomOrder({ ...customOrder, format: e.target.value })}
                          className="w-full rounded-lg bg-white/10 border border-white/15 text-white text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                        >
                          <option value="" className="text-slate-900">Select a product...</option>
                          <option value="plain-labels" className="text-slate-900">Plain Thermal Labels</option>
                          <option value="plain-receipts" className="text-slate-900">Plain Thermal Receipts</option>
                          <option value="custom-labels" className="text-slate-900">Custom Thermal Labels</option>
                          <option value="custom-receipts" className="text-slate-900">Custom Thermal Receipts</option>
                          <option value="thermal-printer" className="text-slate-900">Thermal Printer</option>
                          <option value="other" className="text-slate-900">Other (Please specify)</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Quantity (rolls)</label>
                        <input
                          type="number"
                          placeholder="e.g. 10"
                          min="1"
                          value={customOrder.quantity}
                          onChange={(e) => setCustomOrder({ ...customOrder, quantity: e.target.value })}
                          className="w-full rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Details</label>
                        <textarea
                          placeholder="Branding, size, logo, special requirements..."
                          rows={2}
                          value={customOrder.description}
                          onChange={(e) => setCustomOrder({ ...customOrder, description: e.target.value })}
                          className="w-full resize-none rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                        />
                      </div>

                      {/* Email — full width */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Email</label>
                        <input
                          type="email"
                          placeholder="you@pharmacy.com"
                          value={customOrder.email ?? ""}
                          onChange={(e) => setCustomOrder({ ...customOrder, email: e.target.value })}
                          className="w-full rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                        />
                      </div>

                      {/* Phone — full width */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Phone</label>
                        <input
                          type="tel"
                          placeholder="(647) 000-0000"
                          value={customOrder.phone ?? ""}
                          onChange={(e) => setCustomOrder({ ...customOrder, phone: e.target.value })}
                          className="w-full rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm font-medium px-3 py-2 focus:outline-none focus:border-sky-400"
                        />
                      </div>

                      {/* Submit button — aligned with product card buttons */}
                      <button
                        type="button"
                        onClick={() => setShowCheckout(true)}
                        className="rounded-full h-10 text-sm font-bold bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-900/40 inline-flex items-center justify-center px-5"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cart bar */}
              {cart.length > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
                  <div className="flex items-center gap-4 bg-slate-900 text-white rounded-full px-6 py-3 shadow-2xl shadow-slate-900/40">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="font-bold">{cart.reduce((sum, item) => sum + item.quantity, 0)} items</span>
                    </div>
                    <div className="h-5 w-px bg-white/20" />
                    <span className="font-bold">
                      {hasCustomProducts && getCartTotal() === 0 ? "Quote required" : `$${getCartTotal().toFixed(2)}${hasCustomProducts ? "+" : ""}`}
                    </span>
                    <Button
                      onClick={() => setShowCheckout(true)}
                      size="sm"
                      className="rounded-full px-5 h-9 text-sm font-bold bg-white text-slate-900 hover:bg-blue-50 border-0 ml-2"
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
