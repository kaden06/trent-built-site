import { MidHero } from "@/components/midnight/Hero";
import { MidAbout } from "@/components/midnight/About";
import { MidServices } from "@/components/midnight/Services";
import { MidSectionTransition } from "@/components/midnight/SectionTransition";
import { MidGallery } from "@/components/midnight/Gallery";
import { MidTestimonials } from "@/components/midnight/Testimonials";
import { MidContact } from "@/components/midnight/Contact";
import { MidDivider } from "@/components/midnight/atoms";

export default function Home() {
  return (
    <>
      <MidHero />
      <MidDivider no="02" />
      <MidAbout />
      <MidDivider no="03" />
      <MidServices />
      <MidSectionTransition />
      <MidGallery />
      <MidDivider no="05" />
      <MidTestimonials />
      <MidDivider no="06" />
      <MidContact />
    </>
  );
}
