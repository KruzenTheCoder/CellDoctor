"use client";

import Link from "next/link";
import {
  Smartphone,
  Battery,
  Plug,
  Droplets,
  Volume2,
  Camera,
  Code,
  Search,
  ArrowRight,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { FadeIn } from "@/components/motion-wrapper";

const services = [
  { icon: Smartphone, name: "Screen Repair", desc: "Cracked or broken screen replacement for all brands", color: "text-blue-500" },
  { icon: Battery, name: "Battery Replacement", desc: "Restore your phone's battery life to like-new condition", color: "text-green-500" },
  { icon: Plug, name: "Charging Port Repair", desc: "Fix loose or damaged charging ports quickly", color: "text-yellow-500" },
  { icon: Droplets, name: "Water Damage", desc: "Expert water damage assessment and repair services", color: "text-cyan-500" },
  { icon: Volume2, name: "Speaker Issues", desc: "Restore clear audio with speaker and mic repairs", color: "text-purple-500" },
  { icon: Camera, name: "Camera Repair", desc: "Fix blurry, cracked, or non-functioning cameras", color: "text-pink-500" },
  { icon: Code, name: "Software Issues", desc: "Resolve crashes, bugs, and software-related problems", color: "text-orange-500" },
  { icon: Search, name: "Diagnostics", desc: "Comprehensive phone health check and diagnostics", color: "text-teal-500" },
];

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Expert Repairs for Every Issue
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From cracked screens to battery, charging, camera, and software issues,
            Cell Doctor keeps your device moving.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <StaggerItem key={service.name}>
              <div className="group relative p-6 rounded-2xl glass-card hover:scale-[1.02]
                transition-all duration-300 cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-10">
          <Link
            href="/repairs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary
              hover:gap-3 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
