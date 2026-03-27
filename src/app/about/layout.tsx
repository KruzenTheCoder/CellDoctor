import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cell Doctor is a professional phone repair company in Phoenix, Durban. Led by CEO Qaiser Ali, we deliver fast, quality repairs with transparent pricing. Reg: CC-2007/101571/23.",
  openGraph: {
    title: "About Cell Doctor | Professional Phone Repairs",
    description: "Professional phone repair company in Phoenix, Durban. 15+ years experience.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
