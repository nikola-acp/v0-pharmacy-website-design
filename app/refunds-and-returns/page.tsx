import PageHero from "@/components/PageHero";
import { PolicyBlock, ContactCTA } from "@/components/PolicyBlock";
import {
  RotateCcw,
  Ban,
  ListChecks,
  Truck,
  CheckCheck,
  DollarSign,
  Timer,
  Repeat,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Refunds and Returns Policy | Pharmabest Supplies",
  description:
    "Our refunds and returns policy for Pharmabest Supplies — eligibility, process, refund timelines, and exchanges.",
};

export default function RefundsReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Refunds and Returns Policy"
        intro="Customer satisfaction is our top priority. If you are not entirely satisfied with your purchase, we're here to help. Below are the details of our refunds and returns policy."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[920px] space-y-6">
          <PolicyBlock icon={<RotateCcw className="w-5 h-5" />} title="Returns — Eligibility">
            <ul>
              <li>
                Items must be returned within <strong>14 days of delivery</strong> to
                qualify.
              </li>
              <li>
                Products must be unused, in original packaging, and in the same
                condition as received.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock icon={<Ban className="w-5 h-5" />} title="Returns — Non-Returnable Items">
            <p>
              Custom or personalized items (such as customized labels and receipts)
              are non-returnable unless defective or damaged upon arrival.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<ListChecks className="w-5 h-5" />} title="Returns — Process">
            <ul>
              <li>
                Contact us at{" "}
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
                </a>{" "}
                to initiate a return.
              </li>
              <li>Include your order number and a description of the issue.</li>
              <li>
                Once approved, ship the item back to the address provided in the
                return confirmation email.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock icon={<Truck className="w-5 h-5" />} title="Returns — Shipping Costs">
            <p>
              The customer is responsible for return shipping costs unless the item
              is defective or incorrect due to our error.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<CheckCheck className="w-5 h-5" />} title="Refunds — Approval Process">
            <p>
              Once we receive your returned item, we will inspect it and notify you
              of approval or rejection of your refund.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<DollarSign className="w-5 h-5" />} title="Refunds — Refund Amount">
            <p>
              Approved refunds cover the cost of the product only. Shipping fees
              are non-refundable.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<Timer className="w-5 h-5" />} title="Refunds — Processing Time">
            <p>
              Refunds are processed within <strong>7 business days</strong> of
              approval and issued to the original payment method.
            </p>
          </PolicyBlock>

          <PolicyBlock icon={<Repeat className="w-5 h-5" />} title="Exchanges">
            <p>
              We replace items only if they are defective or damaged. To request an
              exchange for the same item, contact{" "}
              <a
                href="mailto:supplies@pharmabest.ca"
                className="text-blue-600 font-semibold hover:underline"
              >
                supplies@pharmabest.ca
              </a>{" "}
              with details and photos of the damaged product.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<AlertTriangle className="w-5 h-5" />}
            title="Damaged or Defective Items"
          >
            <p>If your order arrives damaged or defective:</p>
            <ul>
              <li>
                Notify us within <strong>3 business days</strong> of delivery.
              </li>
              <li>
                Provide photos of the damaged item and packaging for verification.
              </li>
              <li>
                We will arrange for a replacement or refund based on your preference.
              </li>
            </ul>
          </PolicyBlock>

          <ContactCTA
            title="Need to start a return?"
            subtitle="Get in touch and we'll walk you through it."
          />
          </div>
        </div>
      </section>
    </>
  );
}
