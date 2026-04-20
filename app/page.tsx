import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsMarquee from "@/components/BenefitsMarquee";
import TrustLogoBar from "@/components/TrustLogoBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyUs from "@/components/WhyUs";
import WhyThermal from "@/components/WhyThermal";
import Testimonials from "@/components/Testimonials";
import CustomOrder from "@/components/CustomOrder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <BenefitsMarquee />
        <TrustLogoBar />
        <WhyUs />
        <WhyThermal />
        <FeaturedProducts />
        <CustomOrder />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
