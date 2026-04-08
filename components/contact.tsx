"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Phone, CheckCircle2, Headphones, FileQuestion, ArrowRight } from "lucide-react"

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+1 (647) 429-2677", href: "tel:+16474292677" },
  { icon: Mail, label: "Email", value: "supplies@pharmabest.ca", href: "mailto:supplies@pharmabest.ca" },
  { icon: MapPin, label: "Location", value: "Toronto, Ontario, Canada", href: null },
  { icon: Clock, label: "Hours", value: "Monday – Friday, 9 AM – 6 PM", href: null },
]

const requestTypes = [
  { id: "general", label: "General Inquiry", icon: FileQuestion, description: "Questions, pricing, custom requirements, or anything else." },
  { id: "support", label: "Tech Support", icon: Headphones, description: "Printer setup, troubleshooting, or ongoing technical help." },
]

function generateTicketId() {
  return "PBS-" + Math.random().toString(36).slice(2, 7).toUpperCase()
}

export function Contact() {
  const [selectedType, setSelectedType] = useState("general")
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", pharmacy: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [ticketId, setTicketId] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTicketId(generateTicketId())
    setSubmitted(true)
  }

  const selectedTypeData = requestTypes.find((t) => t.id === selectedType)!

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Contact Us</p>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance leading-[1.06]">
            Let&apos;s find the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              right solution
            </span>{" "}
            for you
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Whether you need products, pricing, or technical support — we respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Contact info panel */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 flex flex-col gap-7 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-indigo-400/15 blur-2xl pointer-events-none" />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">Get in touch</p>
              <h3 className="text-xl font-extrabold text-white tracking-tight">Pharmabest Supplies</h3>
              <p className="text-sm text-white/60 font-medium mt-0.5">Toronto, Ontario</p>
            </div>

            <div className="relative flex flex-col gap-4">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15">
                    <item.icon className="h-4 w-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/45 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-white hover:text-sky-300 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white/85">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Now CTA */}
            <div className="relative mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
              <p className="text-xs text-white/50 font-medium">Ready to place an order?</p>
              <Button
                asChild
                size="lg"
                className="w-full rounded-full h-11 text-sm font-bold bg-white text-blue-900 hover:bg-blue-50 shadow-lg shadow-blue-900/30 border-0 transition-all"
              >
                <a href="https://pharmabest-supplies.myshopify.com" target="_blank" rel="noopener noreferrer">
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100/50 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-5 py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-200">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {selectedType === "support" ? "Support ticket created!" : "Message received!"}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium mt-2 max-w-xs mx-auto">
                    {selectedType === "support"
                      ? "Our tech team will reach out within one business day to assist you."
                      : "We'll get back to you within one business day."}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 bg-blue-50 border border-blue-100 rounded-2xl px-8 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Your Ticket ID</p>
                  <p className="text-2xl font-extrabold tracking-widest text-blue-700">{ticketId}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Keep this for your records</p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full border-slate-200 font-semibold hover:bg-slate-50"
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", pharmacy: "", message: "" }) }}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Request type selector — 2 options only */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Request Type</p>
                  <div className="grid grid-cols-2 gap-3">
                    {requestTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-all duration-200 ${
                          selectedType === type.id
                            ? "border-blue-500 bg-blue-50 shadow-md shadow-blue-100"
                            : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50/40"
                        }`}
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                          selectedType === type.id
                            ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-200"
                            : "bg-slate-100"
                        }`}>
                          <type.icon className={`h-5 w-5 ${selectedType === type.id ? "text-white" : "text-slate-500"}`} />
                        </div>
                        <span className={`text-xs font-bold leading-tight ${selectedType === type.id ? "text-blue-700" : "text-slate-600"}`}>
                          {type.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-2 pl-1">{selectedTypeData.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                    <Input id="name" type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <Input id="email" type="email" placeholder="you@pharmacy.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="pharmacy" className="text-xs font-bold uppercase tracking-widest text-slate-500">Pharmacy Name</label>
                    <Input id="pharmacy" type="text" placeholder="e.g. Queen St. Pharmacy" value={formData.pharmacy} onChange={(e) => setFormData({ ...formData, pharmacy: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Phone <span className="text-slate-400 normal-case tracking-normal font-medium">(optional)</span>
                    </label>
                    <Input id="phone" type="tel" placeholder="(647) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl border-slate-200 h-11 text-sm font-medium" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {selectedType === "support" ? "Describe the Issue" : "Message"}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={
                      selectedType === "support"
                        ? "Describe your issue — printer model, error message, what you've tried…"
                        : "How can we help you today?"
                    }
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none rounded-xl border-slate-200 text-sm font-medium"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full h-12 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-200 border-0 transition-all"
                >
                  {selectedType === "support" ? "Submit Support Ticket" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
