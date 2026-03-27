import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Repair Services",
  description:
    "Screen repairs, battery replacements, charging port fixes, water damage recovery & more. All major phone brands repaired while you wait at Gem City, Phoenix, Durban.",
  openGraph: {
    title: "Phone Repair Services | Cell Doctor",
    description: "Screen repairs, battery replacements & more at Gem City, Phoenix, Durban.",
  },
};

export default function RepairsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
