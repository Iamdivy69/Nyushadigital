import { Hero } from "@/components/sections/Hero";
import { USPStrip } from "@/components/sections/USPStrip";
import { ProductHighlight } from "@/components/sections/ProductHighlight";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Founders } from "@/components/sections/Founders";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { Footer } from "@/components/sections/Footer";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Nyusha Enterprise | Handcrafted Sustainable Bags";
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <USPStrip />
      <ProductHighlight />
      <CategoryGrid />
      <Founders />
      <Process />
      <Testimonials />
      <CTAStrip />
      <Footer />
    </main>
  );
};

export default Index;
