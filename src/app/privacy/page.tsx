import { FadeIn } from "@/components/motion-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cell Doctor's privacy policy. Learn how we collect, use, and protect your personal information when you use our phone repair services.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative hero-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    When you book a repair or contact us, we collect personal information including your name,
                    email address, phone number, device details, and repair preferences. We may also collect
                    payment information through our secure payment processor.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use your information to process repair bookings, communicate about your repair status,
                    process payments, send booking confirmations and reminders, and improve our services.
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">3. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information.
                    Payment processing is handled by trusted third-party providers (PayFast/Yoco)
                    who comply with PCI DSS standards. We do not store your full payment card details.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">4. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses essential cookies to ensure proper functionality, including
                    theme preferences and session management. We do not use tracking cookies for
                    advertising purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">5. Third-Party Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use third-party services for payment processing and communication (WhatsApp).
                    These services have their own privacy policies. We encourage you to review them.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In accordance with the Protection of Personal Information Act (POPIA), you have
                    the right to access, correct, or delete your personal information. Contact us via
                    WhatsApp or email to make a request.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">7. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For privacy-related inquiries, contact Cell Doctor via WhatsApp at 061 735 3919
                    or visit our Contact page.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
