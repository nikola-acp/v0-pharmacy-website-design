"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Phone, CheckCircle2 } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (647) 429-2677",
    href: "tel:+16474292677",
  },
  {
    icon: Mail,
    label: "Email",
    value: "supplies@pharmabest.ca",
    href: "mailto:supplies@pharmabest.ca",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Toronto, Ontario, Canada",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday, 9 AM – 6 PM",
    href: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pharmacy: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Let's find the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              right solution
            </span>{" "}
            for you
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium leading-relaxed">
            Reach out for custom orders, pricing, or any questions. We respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Contact info panel — rich gradient */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 flex flex-col gap-7 relative overflow-hidden">
            {/* Decorative orb */}
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

            <div className="relative mt-auto pt-6 border-t border-white/10">
              <p className="text-xs text-white/45 font-medium leading-relaxed">
                Serving independent pharmacies and chains across Ontario. IDA, Guardian, and Pharmasave supplies available.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100/50 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-5 py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-200">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Message received!</h3>
                  <p className="text-sm text-slate-500 font-medium mt-2 max-w-xs mx-auto">
                    Thanks for reaching out. We'll get back to you within one business day.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full border-slate-200 font-semibold hover:bg-slate-50"
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", pharmacy: "", message: "" }) }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border-slate-200 h-11 text-sm font-medium"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@pharmacy.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border-slate-200 h-11 text-sm font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pharmacy" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Pharmacy Name <span className="text-slate-400 normal-case tracking-normal font-medium">(optional)</span>
                  </label>
                  <Input
                    id="pharmacy"
                    type="text"
                    placeholder="e.g. Queen St. Pharmacy"
                    value={formData.pharmacy}
                    onChange={(e) => setFormData({ ...formData, pharmacy: e.target.value })}
                    className="rounded-xl border-slate-200 h-11 text-sm font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you need — products, quantities, custom requirements…"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none rounded-xl border-slate-200 text-sm font-medium"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full h-12 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-200 hover:shadow-blue-300 border-0 transition-all"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
