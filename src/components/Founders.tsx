import foundersImg from "@/assets/founders.jpg";

export const Founders = () => {
  return (
    <section
      id="founders"
      className="relative w-full bg-primary flex items-center justify-center overflow-hidden py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full aspect-video md:aspect-auto md:h-[600px] order-first">
            <img
              src={foundersImg}
              alt="Founders"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Green Fade Overlay - Reduced intensity */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/60 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="text-cream relative pb-8 lg:pb-0">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              The Person Behind the <span className="font-script text-accent">Purpose</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-cream/90 leading-relaxed">
              <p>
                We're the team behind Nyusha Enterprise — building a brand inspired by
                craftsmanship, sustainability, and everyday style.
              </p>

              <p>
                Every bag we create is a testament to traditional artisan techniques
                combined with modern design sensibility. Our commitment goes beyond
                creating beautiful products — we're dedicated to preserving age-old
                crafts while supporting local communities.
              </p>

              <p className="font-semibold text-accent">
                Every purchase supports artisan-made, eco-friendly production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};