import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorIntro from "@/components/DoctorIntro";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <DoctorIntro />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}