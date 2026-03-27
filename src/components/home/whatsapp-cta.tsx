"use client";

import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { WHATSAPP_URL, PHONE_NUMBER } from "@/lib/utils";

export function WhatsAppCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl glass-card p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 to-emerald-500/5 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Need Help? <span className="text-green-500">Chat With Us</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8 leading-relaxed">
                Book your repair online, pay securely, and chat with us instantly on WhatsApp.
                No waiting on hold, no complicated forms.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2
                    px-8 py-4 text-base font-semibold rounded-2xl
                    bg-green-500 text-white hover:bg-green-600
                    shadow-xl shadow-green-500/25 hover:shadow-green-500/40
                    hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                    px-8 py-4 text-base font-medium rounded-2xl
                    border border-border text-foreground hover:bg-secondary/50
                    transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
