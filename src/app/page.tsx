import { HeroSection } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhileYouWait } from "@/components/home/while-you-wait";
import { ProcessSteps } from "@/components/home/process-steps";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { WhatsAppCTA } from "@/components/home/whatsapp-cta";
import { Testimonials } from "@/components/home/testimonials";
import { FAQPreview } from "@/components/home/faq-preview";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhileYouWait />
      <ProcessSteps />
      <WhyChooseUs />
      <WhatsAppCTA />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
