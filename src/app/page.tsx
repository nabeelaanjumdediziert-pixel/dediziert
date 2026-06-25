import { Hero } from "@/features/home/hero";
import { Welcome } from "@/features/home/welcome";
import { ServicesPreview } from "@/features/home/services-preview";
import { SoftwareIntegration } from "@/features/home/software-integration";
import { ProcessTimeline } from "@/features/home/process-timeline";
import { Testimonials } from "@/features/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServicesPreview />
      <ProcessTimeline />
      <SoftwareIntegration />
      <Testimonials />
    </>
  );
}
