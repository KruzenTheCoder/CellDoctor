"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
import { useEffect, useState } from "react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="glass rounded-2xl p-2 flex gap-2 shadow-2xl shadow-black/20">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
            border border-green-500/30 text-green-600 dark:text-green-400
            font-semibold text-sm hover:bg-green-500/10 transition-all"
        >
          <Phone className="w-4 h-4" />
          WhatsApp
        </a>
        <Link
          href="/book"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
            bg-primary text-primary-foreground font-semibold text-sm
            shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </Link>
      </div>
    </div>
  );
}
