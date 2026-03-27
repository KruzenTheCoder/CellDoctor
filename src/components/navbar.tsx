"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/repairs", label: "Repairs" },
  { href: "/book", label: "Book a Repair" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="group-hover:scale-110 transition-transform duration-300">
              <Logo />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">Cell Doctor</span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Phone Repairs</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground
                  rounded-lg hover:bg-secondary/50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl
                border border-green-500/30 text-green-600 dark:text-green-400
                hover:bg-green-500/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              href="/book"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl
                bg-primary text-primary-foreground hover:opacity-90
                shadow-lg shadow-primary/25 hover:shadow-primary/40
                transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base font-medium rounded-xl
                    hover:bg-secondary/50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium
                    rounded-xl border border-green-500/30 text-green-600 dark:text-green-400
                    hover:bg-green-500/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/book"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold
                    rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                >
                  Book a Repair
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
