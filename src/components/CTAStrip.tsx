import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTAStrip = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Ready for a bag that <span className="font-script">lasts?</span>
        </h2>
        <p className="text-xl text-primary/80 mb-8">
          Join thousands who've made the switch to sustainable, handcrafted quality
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-secondary text-primary-foreground font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
        >
          Shop Natural Fiber Collection
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};
