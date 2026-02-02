import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { InsightsGrid } from "@/components/insights-grid";
import { FeatureGrid } from "@/components/feature-grid";
import { HowItWorks } from "@/components/how-it-works";
import { CaseStudies } from "@/components/case-studies";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <SocialProof />
      <InsightsGrid />
      <FeatureGrid />
      <HowItWorks />
      <CaseStudies />
      <Footer />
    </main>
  );
}
