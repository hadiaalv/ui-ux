import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Schema from "@/components/Schema";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Home",
  description:
    "Dreamital Web creates premium UI/UX design systems and polished digital experiences that help brands stand out.",
  alternates: {
    canonical: "/",
  },
});

export default function HomePage() {
  return (
    <>
      <Schema path="/" />
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
