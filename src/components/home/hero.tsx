"use client";

import Link from "next/link";
import { ArrowRight, Phone, Shield, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              Trusted Repair Specialists &bull; All Major Brands
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Professional Cell Phone Repairs,{" "}
            <span className="gradient-text">Done While You Wait</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Fast, reliable repairs for all major phone brands with easy online booking,
            secure payment, and instant WhatsApp support.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/book"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2
                px-8 py-4 text-base font-semibold rounded-2xl
                bg-primary text-primary-foreground
                shadow-xl shadow-primary/25 hover:shadow-primary/40
                hover:scale-105 transition-all duration-300"
            >
              Book a Repair
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
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {[
              { icon: Clock, label: "While You Wait" },
              { icon: Shield, label: "Secure Payment" },
              { icon: Zap, label: "Fast Turnaround" },
              { icon: Phone, label: "WhatsApp Support" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
