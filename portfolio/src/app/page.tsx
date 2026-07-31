import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBar />
      <Services />
      <FeaturedProjects />
      <WhyWorkWithMe />
      <Testimonials />
      <CTABanner />
    </>
  );
}
