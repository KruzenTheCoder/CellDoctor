import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Cell Doctor's phone repair services, pricing, turnaround times, warranty, and booking process in Phoenix, Durban.",
  openGraph: {
    title: "FAQ | Cell Doctor Phone Repairs",
    description: "Common questions about our phone repair services at Gem City, Phoenix.",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
