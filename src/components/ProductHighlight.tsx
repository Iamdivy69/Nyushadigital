import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ShoppingBag } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Artisan Woven Tote",
    description: "Handcrafted jute with leather handles",
    details: "This spacious tote is woven from 100% natural jute fibers, featuring reinforced leather handles for durability. Perfect for farmers markets or beach days.",
    price: "₹2,499",
    image: product1,
    images: [product1, product2, product3, product1],
  },
  {
    name: "Botanical Canvas Bag",
    description: "Natural cotton with leaf print",
    details: "Made from organic cotton canvas, this bag features a hand-printed botanical design using eco-friendly dyes. Includes an inner pocket for valuables.",
    price: "₹1,899",
    image: product2,
    images: [product2, product3, product1, product2],
  },
  {
    name: "Designer Sage Tote",
    description: "Premium canvas with wooden button",
    details: "Minimalist design meets functionality. The sage green canvas is paired with a handcrafted wooden button closure. Durable, stylish, and sustainable.",
    price: "₹2,199",
    image: product3,
    images: [product3, product1, product2, product3],
  },
  {
    name: "Hemp Market Shopper",
    description: "Breathable hemp fiber weave",
    details: "Ultra-strong hemp fibers make this the ideal reusable grocery bag. Naturally resistant to mold and UV light, ensuring it lasts for years.",
    price: "₹1,599",
    image: product1,
    images: [product1, product3, product2, product1],
  },
];

export const ProductHighlight = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openDetails = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
    setActiveImage(null);
  };

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 w-full">
        <div className="text-center mb-16 px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-4">
            Natural Fiber <span className="font-script text-accent">Collection</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Stylish, practical, and thoughtfully crafted bags for daily life.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee hover:[animation-play-state:paused]">
            {/* Original Set */}
            <div className="flex gap-8 px-4">
              {products.map((product, index) => (
                <ProductCard 
                  key={`original-${index}`} 
                  product={product} 
                  onClick={() => openDetails(product)} 
                />
              ))}
            </div>
            {/* Duplicate Set for Loop */}
            <div className="flex gap-8 px-4">
              {products.map((product, index) => (
                <ProductCard 
                  key={`duplicate-${index}`} 
                  product={product} 
                  onClick={() => openDetails(product)} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Detail View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-6xl bg-cream rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeDetails}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            {/* Image Gallery Side */}
            <div className="flex flex-col h-full bg-warm-beige p-6 gap-4">
              {/* Main Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-sm">
                <img 
                  src={activeImage || selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                      activeImage === img 
                        ? "border-primary shadow-md scale-105" 
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col h-full overflow-y-auto">
              <div className="mb-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-2xl font-medium text-accent mb-6">
                  {selectedProduct.price}
                </p>
                
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p className="font-medium text-primary/80">{selectedProduct.description}</p>
                  <p className="pb-6 border-b border-primary/10">{selectedProduct.details}</p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Product Highlights</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>100% Biodegradable Materials</li>
                      <li>Hand-stitched by skilled artisans</li>
                      <li>Durable natural fibers</li>
                      <li>Plastic-free packaging</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-primary/10">
                <div className="flex gap-4 flex-wrap">
                  <span className="px-4 py-2 bg-primary/5 rounded-full text-sm font-semibold text-primary">Natural Fiber</span>
                  <span className="px-4 py-2 bg-primary/5 rounded-full text-sm font-semibold text-primary">Handmade</span>
                  <span className="px-4 py-2 bg-primary/5 rounded-full text-sm font-semibold text-primary">Sustainable</span>
                </div>
                
                <Button size="lg" className="w-full bg-primary hover:bg-secondary text-primary-foreground text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  <ShoppingBag className="mr-2 w-5 h-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Backdrop click to close */}
          <div className="absolute inset-0 -z-10" onClick={closeDetails} />
        </div>
      )}
    </section>
  );
};

// Extracted Card Component for cleaner code
const ProductCard = ({ product, onClick }: { product: any; onClick: () => void }) => (
  <Card
    onClick={onClick}
    className="group min-w-[320px] max-w-[320px] bg-cream border-none shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden rounded-3xl"
  >
    <div className="relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent/80 rounded-full flex items-center justify-center shadow-lg z-10">
        <div className="w-2 h-8 bg-primary/30 rounded-full" />
      </div>
      <div className="aspect-[4/5] overflow-hidden bg-warm-beige">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-cream/90 text-primary px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </span>
        </div>
      </div>
    </div>
    
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-primary mb-1">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
      <p className="text-2xl font-bold text-accent">{product.price}</p>
    </div>
  </Card>
);