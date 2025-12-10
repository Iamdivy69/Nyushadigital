import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { categories } from "@/data/categories";
import { Link } from "react-router-dom";

export const CategoryGrid = () => {
  return (
    <section id="shop-by-category" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Shop by <span className="font-script text-accent">Category</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`} className="block w-full">
              <CardContainer className="inter-var w-full" containerClassName="py-0">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-80 rounded-3xl p-0 border overflow-hidden">
                  <CardItem
                    translateZ="50"
                    className="w-full h-full absolute inset-0"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                  </CardItem>

                  <div className="relative h-full flex flex-col justify-end p-8 text-cream z-20 pointer-events-none">
                    <CardItem
                      translateZ="60"
                      className="text-3xl font-bold mb-3 group-hover/card:text-accent transition-colors"
                    >
                      {category.name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="50"
                      className="text-cream/90 text-lg leading-relaxed"
                    >
                      {category.description}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
