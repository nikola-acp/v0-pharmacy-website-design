"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle2, Minus, Plus, Trash2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const products = [
  {
    id: "plain-labels",
    name: "Plain Thermal Labels",
    category: "Plain Labels",
    basePrice: 233.58,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KmX2MXr7wFQcIezqCssZdx1vWvcvDv.png",
  },
  {
    id: "plain-receipts",
    name: "Plain Thermal Receipts",
    category: "Plain Receipts",
    basePrice: 202.78,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KmX2MXr7wFQcIezqCssZdx1vWvcvDv.png",
  },
  {
    id: "custom-labels",
    name: "Custom Thermal Labels",
    category: "Customized Labels",
    basePrice: null,
    image: null,
  },
  {
    id: "custom-receipts",
    name: "Custom Thermal Receipts",
    category: "Customized Receipts",
    basePrice: null,
    image: null,
  },
  {
    id: "thermal-printer",
    name: "Thermal Printer",
    category: "Thermal Printers",
    basePrice: 1.00,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KmX2MXr7wFQcIezqCssZdx1vWvcvDv.png",
  },
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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", pharmacy: "", notes: "" })
  const [submitted, setSubmitted] = useState(false)
  const [orderId, setOrderId] = useState("")

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

          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Place an Order
            </h1>
            <p className="mt-3 text-lg text-slate-500 font-medium">
              Select your products and quantities below. We&apos;ll confirm pricing and delivery details.
            </p>
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
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Product selection */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">Select Products</h2>
                  
                  <div className="space-y-4">
                    {products.map((product) => {
                      const cartItem = cart.find((item) => item.productId === product.id)
                      const inCart = !!cartItem
                      
                      return (
                        <div
                          key={product.id}
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                            inCart ? "border-blue-200 bg-blue-50/50" : "border-slate-100 bg-white hover:border-slate-200"
                          }`}
                        >
                          {/* Product image placeholder */}
                          <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                            {product.image ? (
                              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            ) : (
                              <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{product.category}</p>
                            <h3 className="text-sm font-bold text-slate-900 mt-0.5">{product.name}</h3>
                            {product.basePrice ? (
                              <p className="text-sm text-slate-500 font-medium mt-0.5">${product.basePrice.toFixed(2)}</p>
                            ) : (
                              <p className="text-xs text-slate-400 font-medium mt-0.5">Contact for pricing</p>
                            )}
                          </div>

                          {inCart ? (
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                                className="h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                              >
                                <Minus className="h-4 w-4 text-slate-600" />
                              </button>
                              <Select
                                value={String(cartItem.quantity)}
                                onValueChange={(val) => updateQuantity(product.id, parseInt(val))}
                              >
                                <SelectTrigger className="w-20 h-8 text-sm font-semibold border-slate-200">
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
                                className="h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                              >
                                <Plus className="h-4 w-4 text-slate-600" />
                              </button>
                              <button
                                type="button"
                                onClick={() => removeFromCart(product.id)}
                                className="h-8 w-8 rounded-lg border border-red-200 flex items-center justify-center hover:bg-red-50 transition-colors ml-2"
                              >
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </button>
                            </div>
                          ) : (
                            <Button
                              type="button"
                              size="sm"
                              onClick={() => addToCart(product.id)}
                              className="rounded-full px-4 text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-indigo-700"
                            >
                              Add
                            </Button>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Order summary & form */}
              <div className="space-y-6">
                {/* Cart summary */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Order Summary</h2>
                  
                  {cart.length === 0 ? (
                    <p className="text-sm text-slate-400 font-medium py-4 text-center">No products selected</p>
                  ) : (
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
                  )}

                  {cart.length > 0 && (
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
                  )}
                </div>

                {/* Contact form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Your Details</h2>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="order-name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                      <Input id="order-name" type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="order-email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                      <Input id="order-email" type="email" placeholder="you@pharmacy.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                    </div>
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
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="order-notes" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Notes <span className="text-slate-400 normal-case tracking-normal font-medium">(optional)</span>
                      </label>
                      <Textarea id="order-notes" placeholder="Special requirements, custom branding details, etc." rows={3} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="resize-none rounded-xl border-slate-200 text-sm font-medium" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={cart.length === 0}
                    className="w-full rounded-full h-12 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-200 border-0 transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Order Request
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
