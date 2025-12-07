import { Card } from "@/components/ui/card";
import productsHero from "@/assets/products-hero.jpg";

const categories = [
  {
    name: "Woven Bags",
    description: "Natural jute and cotton weaves with authentic texture and durability for everyday use.",
    image: productsHero,
  },
  {
    name: "Non-Woven Bags",
    description: "Modern structured designs with eco-friendly materials perfect for work and travel.",
    image: productsHero,
  },
  {
    name: "Designer Totes",
    description: "Premium handcrafted pieces combining style with sustainable craftsmanship.",
    image: productsHero,
  },
  {
    name: "Eco Essentials",
    description: "Daily essentials crafted from natural fibers to reduce your environmental footprint.",
    image: productsHero,
  },
];

export const CategoryGrid = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Shop by <span className="font-script text-accent">Category</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80"
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-8 text-cream">
                <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-cream/90 text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
