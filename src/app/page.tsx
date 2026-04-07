import { Hero } from "@/components/Hero";
import { SideElements } from "@/components/SideElements";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main>
      <SideElements />
      <Hero />
      <About />
    </main>
  );
}
