"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    q: "How long does a typical repair take?",
    a: "Most repairs are completed in 30-60 minutes while you wait. More complex repairs like water damage may take longer, and we'll let you know upfront.",
  },
  {
    q: "Do you repair all phone brands?",
    a: "Yes! Cell Doctor repairs all major phone brands including Apple, Samsung, Huawei, Xiaomi, OPPO, Google, OnePlus, and many more.",
  },
  {
    q: "How do I book a repair?",
    a: "Simply click 'Book a Repair', choose your phone brand and model, select the repair type, pick a date and time, and confirm. It takes less than 2 minutes.",
  },
  {
    q: "Do you offer a warranty on repairs?",
    a: "Yes, all our repairs come with a warranty. The warranty period depends on the type of repair. Ask us for details when you book.",
  },
];

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Common Questions
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <StaggerContainer className="space-y-3">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                  >
                    <span className="font-semibold pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary
                hover:gap-3 transition-all duration-300"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
