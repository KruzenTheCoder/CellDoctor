import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Repair",
  description:
    "Book your phone repair online in minutes. Select your device, choose a service, pick a time slot, and we'll have it fixed while you wait. Gem City, Phoenix, Durban.",
  openGraph: {
    title: "Book a Repair | Cell Doctor",
    description: "Book your phone repair online in minutes at Cell Doctor, Phoenix, Durban.",
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
