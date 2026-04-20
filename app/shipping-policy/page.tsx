import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PolicyBlock, ContactCTA } from "@/components/PolicyBlock";
import { Truck, Package, Timer, MapPin, PackageSearch, AlertTriangle, RefreshCw, DollarSign } from "lucide-react";

export const metadata = {
  title: "Shipping Policy | Pharmabest Supplies",
  description:
    "Pharmabest Supplies shipping policy — processing times, carriers, rates, and order tracking for Ontario pharmacies.",
};

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Shipping Policy"
        intro="At Pharmabest Supplies, we are committed to delivering your orders promptly and reliably. Below are the full details of our shipping policy."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[920px] space-y-6">
          <PolicyBlock icon={<Timer className="w-5 h-5" />} title="Processing Time">
            <ul>
              <li>
                All orders are processed within <strong>1–2 business days</strong> of
                payment confirmation.
              </li>
              <li>
                Custom orders or items requiring additional preparation may take
                longer. You will be notified of the estimated processing time when
                placing such orders.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock icon={<Truck className="w-5 h-5" />} title="Shipping Methods">
            <p>We partner with trusted carriers including:</p>
            <ul>
              <li>Canada Post</li>
              <li>Purolator</li>
              <li>UPS</li>
            </ul>
            <p>
              You can select your preferred shipping option at checkout based on
              availability and delivery timelines.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<DollarSign className="w-5 h-5" />} title="Shipping Rates">
            <p>
              Shipping costs are calculated at checkout based on weight, dimensions,
              and destination. We strive to offer affordable shipping on every order.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<Package className="w-5 h-5" />} title="Delivery Times">
            <ul>
              <li>
                <strong>Standard Shipping:</strong> 3–7 business days
              </li>
              <li>
                <strong>Express Shipping:</strong> 1–3 business days
              </li>
              <li>Custom order delivery times are provided separately</li>
            </ul>
            <p>
              Delivery times may vary due to carrier delays, holidays, or other
              unforeseen circumstances.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<MapPin className="w-5 h-5" />} title="Shipping Locations">
            <p>
              We currently ship throughout Ontario, Canada, and are working on
              expanding our delivery zones. For locations outside our standard
              service area, please{" "}
              <Link href="/#contact" className="text-blue-600 font-semibold hover:underline">
                contact us
              </Link>
              .
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<PackageSearch className="w-5 h-5" />} title="Order Tracking">
            <p>
              Once your order ships, you will receive a confirmation email with a
              tracking number to monitor your shipment.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<AlertTriangle className="w-5 h-5" />}
            title="Lost or Damaged Packages"
          >
            <p>In the rare event that a package is lost or damaged in transit:</p>
            <ul>
              <li>
                Contact us immediately at{" "}
                <a
                  href="mailto:supplies@pharmabest.ca"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  supplies@pharmabest.ca
                </a>{" "}
                or{" "}
                <a
                  href="tel:+16474292677"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  +1 (647) 429-2677
                </a>
              </li>
              <li>
                We will work with the carrier to resolve the issue and arrange a
                replacement or refund as applicable
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock
            icon={<RefreshCw className="w-5 h-5" />}
            title="Returns and Refunds"
          >
            <p>
              For full details on returns and refunds, see our{" "}
              <Link
                href="/refunds-and-returns"
                className="text-blue-600 font-semibold hover:underline"
              >
                Refunds and Returns Policy page
              </Link>
              .
            </p>
          </PolicyBlock>

          <ContactCTA />
          </div>
        </div>
      </section>
    </>
  );
}

