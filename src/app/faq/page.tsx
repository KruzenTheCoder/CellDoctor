"use client";

import { useState } from "react";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/utils";
import Link from "next/link";

const faqs = [
  {
    category: "Repairs",
    items: [
      { q: "How long does a typical repair take?", a: "Most repairs are completed in 30-60 minutes while you wait. More complex repairs like water damage may take longer, and we'll let you know upfront." },
      { q: "Do you repair all phone brands?", a: "Yes! Cell Doctor repairs all major phone brands including Apple, Samsung, Huawei, Xiaomi, OPPO, Vivo, Nokia, Google, OnePlus, Motorola, Sony, LG, Realme, Tecno, Infinix, and many more." },
      { q: "Do you use original parts?", a: "We use high-quality replacement parts that meet or exceed original specifications. We'll always discuss parts options with you before starting a repair." },
      { q: "What if my phone can't be repaired?", a: "If we determine that a repair isn't possible or cost-effective, we'll let you know upfront and you won't be charged for the diagnostic." },
      { q: "Do you offer a warranty on repairs?", a: "Yes, all our repairs come with a warranty. The warranty period depends on the type of repair. Ask us for details when you book." },
    ],
  },
  {
    category: "Booking",
    items: [
      { q: "How do I book a repair?", a: "Simply click 'Book a Repair', choose your phone brand and model, select the repair type, pick a date and time, and confirm. It takes less than 2 minutes." },
      { q: "Can I walk in without a booking?", a: "Yes, walk-ins are welcome! However, booking online guarantees your time slot and helps us prepare for your specific repair." },
      { q: "Can I cancel or reschedule my booking?", a: "Yes, you can contact us via WhatsApp to cancel or reschedule. We appreciate advance notice so we can offer the slot to another customer." },
    ],
  },
  {
    category: "Payment",
    items: [
      { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, Instant EFT, QR-code payments, and other secure online payment options. Cash is also accepted in-store." },
      { q: "Do I need to pay upfront?", a: "You can pay online when booking to secure your slot, or pay in-store after the repair is completed. Both options are available." },
      { q: "Are there any hidden fees?", a: "Absolutely not. The price quoted during booking is the price you pay. If additional work is needed, we'll discuss it with you first." },
    ],
  },
  {
    category: "Support",
    items: [
      { q: "How can I contact Cell Doctor?", a: "The fastest way is via WhatsApp. You can also call us or use the contact form on our website." },
      { q: "What are your operating hours?", a: "Monday to Friday: 8am - 6pm, Saturday: 9am - 3pm, Sunday: Closed." },
      { q: "Where are you located?", a: "We are based in South Africa. Contact us for our exact address and directions." },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "Repairs-0": true });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">FAQ</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our repair services, booking process, and payment options.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqs.map((section) => (
            <FadeIn key={section.category}>
              <div>
                <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                <div className="space-y-3">
                  {section.items.map((faq, i) => {
                    const key = `${section.category}-${i}`;
                    return (
                      <div key={key} className="glass-card rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                        >
                          <span className="font-semibold pr-4">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                              openItems[key] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openItems[key] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8">
              Chat with us on WhatsApp for instant answers, or book a free diagnostic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-8 py-4 text-base font-semibold rounded-2xl
                  bg-green-500 text-white hover:bg-green-600
                  shadow-xl shadow-green-500/25 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-8 py-4 text-base font-semibold rounded-2xl bg-primary text-primary-foreground
                  shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-300"
              >
                Book a Repair <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
