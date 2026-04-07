import { Hero } from "@/components/Hero";
import { SideElements } from "@/components/SideElements";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <SideElements />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
