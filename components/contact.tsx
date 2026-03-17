"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "supplies@pharmabest.ca",
    href: "mailto:supplies@pharmabest.ca",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "1173 Queen Street West, Toronto, ON M6J 1J4",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday, 9:00 AM – 6:00 PM",
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
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Let's find the right solution for your pharmacy
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Reach out for custom orders, pricing, or any questions. We typically respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact info panel */}
          <div className="lg:col-span-2 rounded-2xl bg-primary p-8 flex flex-col gap-6 text-primary-foreground">
            <div>
              <h3 className="text-lg font-semibold mb-1">Pharmabest Supplies</h3>
              <p className="text-sm text-primary-foreground/75">Toronto, Ontario</p>
            </div>

            <div className="flex flex-col gap-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/60 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/60">
                Serving independent pharmacies and pharmacy chains across Ontario.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl bg-white border border-border p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Message received!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 rounded-full"
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", pharmacy: "", message: "" }) }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@pharmacy.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pharmacy" className="text-sm font-medium text-foreground">
                    Pharmacy Name <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <Input
                    id="pharmacy"
                    type="text"
                    placeholder="e.g. Queen St. Pharmacy"
                    value={formData.pharmacy}
                    onChange={(e) => setFormData({ ...formData, pharmacy: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you need — products, quantities, custom requirements…"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
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
