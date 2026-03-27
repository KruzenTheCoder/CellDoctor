"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { WHATSAPP_URL } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-card/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-20 text-center
            bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Ready to Fix Your Phone?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-10 leading-relaxed">
                Cell Doctor repairs all major phone brands with fast turnaround, expert care,
                and a smooth customer experience from booking to pickup.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2
                    px-8 py-4 text-base font-semibold rounded-2xl
                    bg-primary text-primary-foreground
                    shadow-xl shadow-primary/25 hover:shadow-primary/40
                    hover:scale-105 transition-all duration-300"
                >
                  Book a Repair Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                    px-8 py-4 text-base font-semibold rounded-2xl
                    border border-green-500/30 text-green-600 dark:text-green-400
                    hover:bg-green-500/10 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
