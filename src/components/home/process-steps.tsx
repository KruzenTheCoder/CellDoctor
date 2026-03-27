"use client";

import { Calendar, MapPin, Wrench, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion-wrapper";
import Link from "next/link";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book Online",
    desc: "Choose your device, select a repair, and pick a convenient time slot.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Bring It In",
    desc: "Visit Cell Doctor at your booked time. No waiting in long queues.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Get It Repaired",
    desc: "We repair your phone while you wait. Quality-tested and ready to go.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Three Simple Steps
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From booking to pickup, we make the repair process effortless.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative p-8 rounded-2xl glass-card text-center h-full
                hover:scale-[1.02] transition-all duration-300">
                <div className="text-xs font-bold text-muted-foreground/50 mb-4">
                  STEP {step.step}
                </div>
                <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center
                  mx-auto mb-6 ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-10">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl
              bg-primary text-primary-foreground shadow-xl shadow-primary/25
              hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            Book Your Repair Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
