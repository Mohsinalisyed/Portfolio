import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { OtherProjects } from "@/components/sections/other-projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Testimonials />
      <Contact />
    </>
  );
}
