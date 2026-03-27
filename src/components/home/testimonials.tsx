"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Google Review",
    text: "Professional and quick service. Had my screen fixed while I waited. Very happy with the result.",
    rating: 5,
    device: "Screen Repair",
  },
  {
    name: "Google Review",
    text: "Good prices and honest service. They diagnosed the issue fast and fixed it on the spot.",
    rating: 5,
    device: "Diagnostics & Repair",
  },
  {
    name: "Google Review",
    text: "Battery replacement was done quickly. Phone works perfectly now. Will definitely come back.",
    rating: 5,
    device: "Battery Replacement",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 sm:py-28 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our Customers Say
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="relative glass-card rounded-3xl p-8 sm:p-12">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl leading-relaxed mb-6">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold">{testimonials[current].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[current].device}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center
                    hover:scale-110 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center
                    hover:scale-110 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
