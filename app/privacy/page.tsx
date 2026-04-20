import PageHero from "@/components/PageHero";
import { ContactCTA } from "@/components/PolicyBlock";

export const metadata = {
  title: "Privacy Policy | Pharmabest Supplies",
  description:
    "Privacy policy for Pharmabest Supplies — how we handle customer information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Privacy Policy"
        intro="This page will contain our full privacy policy. For any questions about how we handle your information, please contact us."
      />
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[920px]">
            <div className="bg-slate-50 border border-slate-100 rounded-[28px] p-8 lg:p-10 text-slate-600 text-base leading-relaxed">
              Our full privacy policy is being prepared. In the meantime, if you have
              questions about how Pharmabest Supplies collects, uses, or protects your
              information, please reach out to us directly.
            </div>
            <ContactCTA title="Questions about privacy?" subtitle="We're happy to answer." />
          </div>
        </div>
      </section>
    </>
  );
}
