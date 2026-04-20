import PageHero from "@/components/PageHero";
import { PolicyBlock, ContactCTA } from "@/components/PolicyBlock";
import {
  Database,
  Share2,
  ShieldCheck,
  UserCheck,
  Cookie,
  Baby,
  FileEdit,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Pharmabest Supplies",
  description:
    "Pharmabest Supplies privacy policy — how we collect, use, share, and protect your personal information under Canadian and Ontario privacy law.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Privacy Policy"
        intro="Pharmabest Supplies Inc. (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what personal information we collect, how we use and share it, and the rights you have. We follow Canada&rsquo;s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario privacy laws."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[920px] space-y-6">
            <PolicyBlock
              icon={<Database className="w-5 h-5" />}
              title="Information We Collect"
            >
              <p>
                We only collect personal information you choose to provide or that
                is needed to process your order. This typically includes:
              </p>
              <ul>
                <li>Name and pharmacy or business name</li>
                <li>Email address and phone number</li>
                <li>Billing and shipping address</li>
                <li>Order details and any messages you send us</li>
                <li>
                  Limited technical data (IP address, browser type, pages visited)
                  collected automatically by our website and standard analytics
                </li>
              </ul>
            </PolicyBlock>

            <PolicyBlock
              icon={<FileEdit className="w-5 h-5" />}
              title="How We Use Your Information"
            >
              <ul>
                <li>To process, fulfill, and ship your orders</li>
                <li>To respond to quote requests, support questions, and inquiries</li>
                <li>To send order updates and important service communications</li>
                <li>To improve our website, products, and customer experience</li>
                <li>To meet our legal, tax, and regulatory obligations</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock
              icon={<Share2 className="w-5 h-5" />}
              title="How We Share Your Information"
            >
              <p>
                <strong>We do not sell your personal information.</strong> We only
                share it with trusted third parties when needed to run our business,
                including:
              </p>
              <ul>
                <li>
                  Shipping carriers (Canada Post, Purolator, UPS) to deliver your
                  orders
                </li>
                <li>
                  Payment processors and our e-commerce platform to securely handle
                  transactions
                </li>
                <li>
                  Email and customer-support service providers to communicate with you
                </li>
                <li>
                  Government or law-enforcement authorities when required by
                  applicable Canadian law
                </li>
              </ul>
              <p>
                These service providers are only permitted to use your information to
                perform services on our behalf.
              </p>
            </PolicyBlock>

            <PolicyBlock
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Data Security & Retention"
            >
              <p>
                We use reasonable physical, technical, and administrative safeguards
                to protect your personal information. We keep your information only
                as long as needed for the purposes described above, or as required by
                Canadian tax, accounting, and legal record-keeping obligations.
              </p>
            </PolicyBlock>

            <PolicyBlock
              icon={<UserCheck className="w-5 h-5" />}
              title="Your Rights"
            >
              <p>Under PIPEDA, you have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Ask us to correct inaccurate or incomplete information</li>
                <li>Withdraw consent to our use of your information (subject to legal or contractual restrictions)</li>
                <li>
                  File a complaint with the Office of the Privacy Commissioner of
                  Canada
                </li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:supplies@pharmabest.ca"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  supplies@pharmabest.ca
                </a>
                .
              </p>
            </PolicyBlock>

            <PolicyBlock icon={<Cookie className="w-5 h-5" />} title="Cookies & Analytics">
              <p>
                Our website uses basic cookies and analytics tools to keep the site
                working correctly and to understand how visitors use it. You can
                disable cookies in your browser settings, though some parts of the
                site may not function as intended.
              </p>
            </PolicyBlock>

            <PolicyBlock icon={<Baby className="w-5 h-5" />} title="Children">
              <p>
                Our website and products are intended for businesses and adults. We
                do not knowingly collect personal information from anyone under 18.
              </p>
            </PolicyBlock>

            <PolicyBlock
              icon={<Mail className="w-5 h-5" />}
              title="Contact Us About Privacy"
            >
              <p>
                Questions, concerns, or requests about this policy or your personal
                information can be sent to:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:supplies@pharmabest.ca"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    supplies@pharmabest.ca
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+16474292677"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    +1 (647) 429-2677
                  </a>
                </li>
                <li>Address: Toronto, Ontario, Canada</li>
              </ul>
              <p>
                We may update this policy from time to time. The most current version
                will always be posted on this page.
              </p>
            </PolicyBlock>

            <ContactCTA
              title="Questions about privacy?"
              subtitle="We're happy to answer."
            />
          </div>
        </div>
      </section>
    </>
  );
}
