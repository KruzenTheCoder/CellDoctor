"use client";

import { Clock, CheckCircle2, Zap } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";

export function WhileYouWait() {
  return (
    <section className="py-20 sm:py-28 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl glass-card p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Clock className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <div className="text-6xl font-bold gradient-text">30-60</div>
                    <div className="text-lg text-muted-foreground mt-1">Minutes Average</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Most repairs completed while you wait
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                While You Wait Service
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Walk In. Sit Down.{" "}
                <span className="gradient-text">Walk Out Repaired.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand you need your phone. That&apos;s why we complete many repairs
                while you wait, so you can get back to what matters most.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "No overnight waits for most repairs",
                  "Real-time updates on repair progress",
                  "Quality-tested before handover",
                  "Same-day service for walk-ins",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
