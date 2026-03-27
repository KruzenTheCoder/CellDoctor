import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { WHATSAPP_URL, PHONE_NUMBER, SHOP_ADDRESS, GOOGLE_MAPS_URL } from "@/lib/utils";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo />
              <div>
                <div className="text-lg font-bold tracking-tight">Cell Doctor</div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  Phone Repairs
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional phone repair company focused on speed, quality, and customer convenience.
              All major brands repaired while you wait.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/repairs", label: "Repairs" },
                { href: "/book", label: "Book a Repair" },
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-3">
              {[
                "Screen Repair",
                "Battery Replacement",
                "Charging Port Repair",
                "Water Damage",
                "Camera Repair",
                "Software Issues",
              ].map((s) => (
                <div key={s} className="text-sm text-muted-foreground">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {PHONE_NUMBER}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-green-600 dark:text-green-400
                  hover:text-green-500 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                WhatsApp Us
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {SHOP_ADDRESS}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Cell Doctor. All rights reserved.
              Reg: CC-2007/101571/23
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
