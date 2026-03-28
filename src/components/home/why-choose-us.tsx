"use client";

import {
  Shield,
  Clock,
  Award,
  CalendarCheck,
  Smartphone,
  MessageCircle,
} from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion-wrapper";

const reasons = [
  {
    icon: Smartphone,
    title: "All Major Brands",
    desc: "Apple, Samsung, Huawei, Xiaomi, and more. We repair them all.",
  },
  {
    icon: Clock,
    title: "While You Wait",
    desc: "Most repairs completed in 30-60 minutes. Get your phone back fast.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Every repair is quality-tested before we hand your device back.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Online Booking",
    desc: "Book your repair in under 2 minutes with our simple online system.",
  },
  {
    icon: Award,
    title: "Expert Technicians",
    desc: "Skilled professionals with years of experience in phone repair.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    desc: "Chat with us instantly on WhatsApp for quick support and updates.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Why Cell Doctor
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Why Customers Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cell Doctor delivers premium service, transparent communication,
            and a smooth repair experience from start to finish.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="flex gap-4 p-6 rounded-2xl glass-card hover:scale-[1.02]
                transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
