import HeroSection from "@/components/HeroSection";
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import TrustedPartners from "@/components/TrustedPartners";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F2]">
      <HeroSection />
      <TalentShowcaseMarquee />
      <TrustedPartners />
      
      <ProblemSolution />
            <ServicesSection />
                  <HowItWorks />
                  <CTASection />


    </main>
  );
}