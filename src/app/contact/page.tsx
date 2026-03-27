"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { WHATSAPP_URL, PHONE_NUMBER, SHOP_ADDRESS, GOOGLE_MAPS_URL } from "@/lib/utils";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Contact <span className="gradient-text">Cell Doctor</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a question or need help? Reach out to us through any of the channels below.
              We&apos;re here to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl glass-card hover:scale-[1.02] transition-all duration-300 h-full text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Chat with us instantly. No waiting on hold.
                </p>
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="block p-6 rounded-2xl glass-card hover:scale-[1.02] transition-all duration-300 h-full text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">{PHONE_NUMBER}</p>
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl glass-card hover:scale-[1.02] transition-all duration-300 h-full text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">{SHOP_ADDRESS}</p>
              </a>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-2xl glass-card h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri: 8am - 6pm<br />
                  Sat: 9am - 3pm<br />
                  Sun: Closed
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Contact Form */}
          <FadeIn delay={0.3} className="mt-16">
            <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const message = formData.get("message");
                window.open(
                  `https://wa.me/27617353919?text=${encodeURIComponent(`Hi Cell Doctor, my name is ${name}. ${message}`)}`,
                  "_blank"
                );
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                        focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                        focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                      focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border
                      focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                    placeholder="Tell us about your issue..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold
                    shadow-lg shadow-primary/25 hover:opacity-90 transition-all text-sm"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
