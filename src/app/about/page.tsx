"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Shield,
  Award,
  Users,
  Zap,
  Heart,
  Target,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { WHATSAPP_URL, SHOP_ADDRESS_SHORT } from "@/lib/utils";

const values = [
  { icon: Zap, title: "Speed", desc: "Fast turnaround on all repairs. Most done while you wait." },
  { icon: Shield, title: "Quality", desc: "Premium parts and expert technicians for lasting repairs." },
  { icon: Heart, title: "Care", desc: "We treat every device like it's our own." },
  { icon: Target, title: "Transparency", desc: "Clear pricing, honest timelines, no hidden fees." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About <span className="gradient-text">Cell Doctor</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A professional phone repair company focused on speed, quality,
              and customer convenience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Premium Service, <span className="gradient-text">Smooth Experience</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cell Doctor is a professional phone repair company focused on speed,
                    quality, and customer convenience.
                  </p>
                  <p>
                    We repair a wide range of mobile phone brands and complete many repairs
                    while you wait.
                  </p>
                  <p>
                    Our goal is simple: premium service, transparent communication, and a
                    smooth repair experience from start to finish.
                  </p>
                </div>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>CEO:</strong> Qaiser Ali</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Registration:</strong> CC-2007/101571/23</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Location:</strong> {SHOP_ADDRESS_SHORT}, Durban</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="glass-card rounded-3xl p-8 sm:p-12 text-center">
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years of Experience</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground mt-1">Phone Brands Repaired</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold gradient-text">30-60</div>
                    <div className="text-sm text-muted-foreground mt-1">Minute Average Repair</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our Core Values
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-6 rounded-2xl glass-card text-center h-full
                  hover:scale-[1.02] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to Get Your Phone Fixed?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8">
              Book your repair online or chat with us on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-8 py-4 text-base font-semibold rounded-2xl bg-primary text-primary-foreground
                  shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-300"
              >
                Book a Repair <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-8 py-4 text-base font-semibold rounded-2xl border border-green-500/30
                  text-green-600 dark:text-green-400 hover:bg-green-500/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
