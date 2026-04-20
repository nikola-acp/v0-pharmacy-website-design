import PageHero from "@/components/PageHero";
import { ContactCTA } from "@/components/PolicyBlock";

export const metadata = {
  title: "Terms of Service | Pharmabest Supplies",
  description:
    "Terms of service for Pharmabest Supplies.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Terms of Service"
        intro="This page will contain our full terms of service. For any questions in the meantime, please contact us."
      />
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[920px]">
            <div className="bg-slate-50 border border-slate-100 rounded-[28px] p-8 lg:p-10 text-slate-600 text-base leading-relaxed">
              Our full terms of service are being prepared. In the meantime, if you
              have questions about using the Pharmabest Supplies website or services,
              please reach out to us directly.
            </div>
            <ContactCTA title="Questions about our terms?" subtitle="We're happy to answer." />
          </div>
        </div>
      </section>
    </>
  );
}
