import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ShoppingBag, ChevronLeft, ChevronRight, Send } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { cn } from "@/lib/utils";

import { products } from "@/data/products";

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

  const nextImage = () => {
    if (!selectedProduct) return;
    const currentIndex = selectedProduct.images.indexOf(activeImage || selectedProduct.images[0]);
    const nextIndex = (currentIndex + 1) % selectedProduct.images.length;
    setActiveImage(selectedProduct.images[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedProduct) return;
    const currentIndex = selectedProduct.images.indexOf(activeImage || selectedProduct.images[0]);
    const prevIndex = (currentIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length;
    setActiveImage(selectedProduct.images[prevIndex]);
  };

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click is on the backdrop itself, not on its children
    if (e.target === e.currentTarget) {
      closeDetails();
    }
  };

  const handleBuyNow = (productName: string) => {
    const phoneNumber = "7359392396";
    const message = `Hello! I'm interested in buying the "${productName}".`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open in a new tab for a better user experience
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="natural-fiber-collection" className="relative py-24 bg-primary overflow-hidden">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-md animate-in fade-in duration-200" onClick={handleBackdropClick}>
          <div
            className="relative w-full max-w-7xl bg-cream rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
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
            <div className="flex flex-col justify-center bg-white p-6 gap-4">
              {/* Main Image - Reduced aspect ratio for a slightly smaller height */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-sm flex items-center justify-center group">
                <img
                  src={activeImage || selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain transition-all duration-300"
                />
                {/* Prev/Next Buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevImage}
                    className="w-10 h-10 bg-white/60 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-primary" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="w-10 h-10 bg-white/60 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all bg-white",
                      activeImage === img
                        ? "border-primary shadow-md scale-105"
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col h-full overflow-y-auto bg-cream">
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

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  onClick={() => handleBuyNow(selectedProduct.name)}
                >
                  {/* <ShoppingBag className="mr-2 w-5 h-5" /> */}
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Extracted Card Component for cleaner code
const ProductCard = ({ product, onClick }: { product: any; onClick: () => void }) => (
  <Card
    onClick={onClick} // Increased card width from 320px to 360px
    className="group min-w-[400px] max-w-[400px] bg-cream border-none shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden rounded-3xl"
  >
    <div className="relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent/80 rounded-full flex items-center justify-center shadow-lg z-10">
        <div className="w-2 h-8 bg-primary/30 rounded-full" />
      </div>
      {/* FIXED: Changed to bg-white and object-contain to ensure full image visibility */}
      <div className="aspect-[4/5] overflow-hidden bg-white p-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="bg-cream/90 text-primary px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </span>
        </div>
      </div>
    </div>

    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-primary mb-1">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
    </div>
  </Card>
);

// New Bulk Order Form Component
export const BulkOrderForm = () => {
  // IMPORTANT: Replace with your own Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Error sending message. Please try again.");
        console.error("Error from Web3Forms:", result);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Enquire for <span className="font-script text-secondary">Bulk Orders</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Interested in larger quantities for corporate gifting, events, or retail? Fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <input type="hidden" name="subject" value="New Bulk Order Inquiry from Nyusha Website" />
          <input type="hidden" name="from_name" value="Nyusha Green Craft" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full p-4 bg-white border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none transition-shadow" />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full p-4 bg-white border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none transition-shadow" />
          </div>
          <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="w-full p-4 bg-white border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none transition-shadow" />
          <textarea name="message" placeholder="Your message (e.g., 'I'm interested in 50 Artisan Woven Totes...')" required value={formData.message} onChange={handleChange} rows={5} className="w-full p-4 bg-white border border-primary/20 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none transition-shadow"></textarea>

          <div className="text-center">
            <Button type="submit" size="lg" className="bg-primary hover:bg-secondary text-primary-foreground text-lg py-6 px-12 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-70">
              <Send className="mr-2 w-5 h-5" />
              Submit Inquiry
            </Button>
          </div>
        </form>

        {status && (
          <p className="text-center mt-6 text-lg font-medium text-secondary">
            {status}
          </p>
        )}

        <div className="text-center mt-4 text-sm text-primary/60">
          <p>Powered by Web3Forms</p>
        </div>
      </div>
    </section>
  );
};