import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cell Doctor. Visit us at Shop 10, Gem City, 54 Parthenon Street, Phoenix, 4068. Call 061 735 3919 or WhatsApp us for instant support.",
  openGraph: {
    title: "Contact Cell Doctor | Phone Repairs Phoenix, Durban",
    description: "Visit us at Gem City, Phoenix or WhatsApp us for instant support.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
