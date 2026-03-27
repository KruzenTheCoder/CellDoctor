import { FadeIn } from "@/components/motion-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Cell Doctor's terms and conditions covering services, bookings, pricing, payment, warranty, liability, and device collection policies.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative hero-gradient py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">1. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cell Doctor provides cell phone repair services for various brands and models.
                  Repair times are estimates and may vary based on the complexity of the issue
                  and parts availability. We reserve the right to decline a repair if we determine
                  it is not feasible.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">2. Bookings</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Online bookings reserve a time slot for your repair. Please arrive on time.
                  If you cannot make your appointment, please notify us via WhatsApp at least
                  2 hours in advance. Repeated no-shows may result in booking restrictions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">3. Pricing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Prices displayed on our website are starting prices and may vary based on the
                  specific device model and extent of damage. A final quote will be provided before
                  any repair work begins. You are free to decline the repair at this stage.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">4. Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment can be made online during booking or in-store after repair completion.
                  Online payments are processed securely through our payment partner. Refunds for
                  online payments will be processed within 7-10 business days.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">5. Warranty</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All repairs carry a limited warranty covering defects in workmanship and parts.
                  The warranty does not cover physical damage, water damage, or issues unrelated
                  to the original repair. Warranty claims must be made in person.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">6. Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cell Doctor takes reasonable care with all devices. However, we are not liable
                  for data loss during repairs. We strongly recommend backing up your device
                  before bringing it in. Our liability is limited to the value of the repair service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">7. Device Collection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Devices must be collected within 30 days of repair completion. Cell Doctor is not
                  responsible for devices left uncollected beyond this period. We will attempt to
                  contact you before disposing of uncollected devices.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">8. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cell Doctor reserves the right to update these terms at any time. Continued use
                  of our services constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">9. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cell Doctor (Pty) Ltd &bull; Registration: CC-2007/101571/23 &bull;
                  CEO: Qaiser Ali &bull; Phone: 061 735 3919
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
