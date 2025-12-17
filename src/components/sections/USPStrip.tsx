import { Leaf, Heart, Hammer, Shield } from "lucide-react";
import madeInIndia from "@/assets/made in india.png";

const MakeInIndiaIcon = ({ className }: { className?: string }) => (
  <img
    src={madeInIndia}
    alt="Made in India"
    // Override the default size (w-8 h-8) to make this specific icon larger
    className={className?.replace("w-8 h-8", "w-14 h-14")}
    style={{ objectFit: "contain" }}
  />
);

const usps = [
  { icon: Leaf, text: "Sustainability in Every Stitch" },
  { icon: Hammer, text: "100% Handcrafted" },
  { icon: Heart, text: "Eco-Friendly Materials" },
  { icon: Shield, text: "Built to Last" },
  { icon: MakeInIndiaIcon, text: "Made in India" },
];

export const USPStrip = () => {
  return (
    <section className="bg-cream py-16 border-y-2 border-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <usp.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-sm text-primary">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
