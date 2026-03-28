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
  Phone,
  CheckCircle2,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { WHATSAPP_URL } from "@/lib/utils";

const services = [
  {
    icon: Smartphone,
    name: "Screen Repair",
    desc: "Cracked, shattered, or unresponsive screens replaced with high-quality parts. We handle LCD and OLED displays for all major brands.",
    time: "30-60 min",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Battery,
    name: "Battery Replacement",
    desc: "Restore your phone's battery life to like-new condition. We use premium replacement batteries with optimal capacity.",
    time: "20-40 min",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Plug,
    name: "Charging Port Repair",
    desc: "Fix loose, corroded, or damaged charging ports. Get your phone charging reliably again.",
    time: "30-45 min",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Droplets,
    name: "Water Damage Repair",
    desc: "Expert water damage assessment, cleaning, and component-level repair. The sooner you bring it in, the better the outcome.",
    time: "1-3 hours",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Volume2,
    name: "Speaker & Mic Repair",
    desc: "Restore clear audio with earpiece, loudspeaker, and microphone repairs. Hear and be heard again.",
    time: "30-45 min",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Camera,
    name: "Camera Repair",
    desc: "Fix blurry, cracked, or non-functioning front and rear cameras. Get back to taking sharp photos.",
    time: "30-60 min",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Code,
    name: "Software Issues",
    desc: "Resolve crashes, boot loops, software bugs, OS updates, and data recovery. We handle the tricky stuff.",
    time: "30-60 min",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Search,
    name: "Diagnostics",
    desc: "Not sure what's wrong? Our comprehensive diagnostic check will identify the issue and give you a clear repair quote.",
    time: "15-20 min",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
];

export default function RepairsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Expert Repairs for{" "}
              <span className="gradient-text">Every Device</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From cracked screens to battery, charging, camera, and software issues,
              Cell Doctor keeps your device moving. All major brands supported.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.name}>
                <div className="group relative p-6 sm:p-8 rounded-2xl glass-card hover:scale-[1.01]
                  transition-all duration-300 h-full">
                  <div className="flex gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center
                      shrink-0 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-xl">{service.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                          {service.time}
                        </span>
                        <Link
                          href="/book"
                          className="text-xs font-semibold text-primary hover:underline
                            inline-flex items-center gap-1"
                        >
                          Book Now <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8">
              Bring your device in for a free diagnostic check, or chat with us on WhatsApp
              and we&apos;ll help you figure it out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-8 py-4 text-base font-semibold rounded-2xl
                  bg-primary text-primary-foreground shadow-xl shadow-primary/25
                  hover:scale-105 transition-all duration-300"
              >
                Book a Repair
                <ArrowRight className="w-4 h-4" />
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
          </FadeIn>
        </div>
      </section>
    </>
  );
}
