import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import MarketingOverview from "@/components/marketing-overview";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import PrivacyPolicy from "@/components/privacy-policy";
import EULA from "@/components/eula";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navigation />
      <Hero />
      <MarketingOverview />
      <Pricing />
      <FAQ />
      <PrivacyPolicy />
      <EULA />
      <Footer />
    </div>
  );
}
