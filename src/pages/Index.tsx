import { Hero } from "@/components/Hero";
import { USPStrip } from "@/components/USPStrip";
import { ProductHighlight } from "@/components/ProductHighlight";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Founders } from "@/components/Founders";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTAStrip } from "@/components/CTAStrip";
import { Footer } from "@/components/Footer";

const Index = () => {
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
