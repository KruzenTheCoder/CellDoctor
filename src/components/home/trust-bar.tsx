"use client";

import { FadeIn } from "@/components/motion-wrapper";
import { Smartphone } from "lucide-react";
import { PHONE_BRANDS } from "@/lib/utils";

export function TrustBar() {
  const majorBrands = PHONE_BRANDS.filter((b) => b !== "Other");

  return (
    <section className="py-12 border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
            We Repair All Major Phone Brands
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {majorBrands.map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card
                  hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
