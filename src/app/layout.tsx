import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cell Doctor | Professional Cell Phone Repairs in Phoenix, Durban",
    template: "%s | Cell Doctor",
  },
  description:
    "Fast, reliable cell phone repairs for all major brands at Gem City, Phoenix, Durban. Screen repairs, battery replacements & more — done while you wait. Book online or WhatsApp us.",
  keywords: [
    "cell phone repair",
    "phone repair Phoenix Durban",
    "screen repair",
    "battery replacement",
    "Cell Doctor",
    "Gem City Phoenix",
    "phone repair near me",
    "Samsung repair",
    "iPhone repair",
    "Huawei repair",
    "cell phone screen fix",
    "mobile repair Durban",
  ],
  authors: [{ name: "Cell Doctor" }],
  creator: "Cell Doctor",
  metadataBase: new URL("https://celldoctor.co.za"),
  openGraph: {
    title: "Cell Doctor | Professional Cell Phone Repairs in Phoenix, Durban",
    description:
      "Fast, reliable repairs for all major phone brands. Book online, pay securely. Shop 10, Gem City, 54 Parthenon Street, Phoenix, 4068.",
    url: "https://celldoctor.co.za",
    siteName: "Cell Doctor",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cell Doctor | Professional Cell Phone Repairs",
    description:
      "Fast, reliable cell phone repairs at Gem City, Phoenix, Durban. Book online or WhatsApp us.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cell Doctor",
              description:
                "Professional cell phone repair company in Phoenix, Durban. Screen repairs, battery replacements, charging port fixes and more.",
              url: "https://celldoctor.co.za",
              telephone: "+27617353919",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop 10, Gem City, 54 Parthenon Street",
                addressLocality: "Phoenix",
                addressRegion: "KwaZulu-Natal",
                postalCode: "4068",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-29.7069",
                longitude: "31.0048",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              priceRange: "R150 - R400",
              image: "https://celldoctor.co.za/icon.svg",
              sameAs: ["https://wa.me/27617353919"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Phone Repair Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Screen Repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Replacement" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charging Port Repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Damage Repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Camera Repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Issues" } },
                ],
              },
            }),
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
          <MobileCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
