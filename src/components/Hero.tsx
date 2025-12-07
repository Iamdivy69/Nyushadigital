import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-muted">
      {/* Fixed Background for performant Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: 0.6, 
          filter: "grayscale(20%) contrast(120%)",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-muted" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <img 
          src={logo} 
          alt="Nyusha Enterprise" 
          className="w-40 h-40 mx-auto mb-8 object-contain animate-fade-in drop-shadow-xl" 
        />
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
          Made with Natural Fibers.{" "}
          <span className="font-script text-secondary">Crafted</span> for Everyday Life.
        </h1>
        
        <p className="text-xl md:text-2xl text-primary/80 mb-10 animate-fade-in font-medium">
          Sustainable handcrafted bags designed for work, travel, and everything in between.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          {/* Shop Now - FIXED: Removed animate-shimmer and gradient */}
          <button className="inline-flex h-14 items-center justify-center rounded-full border border-primary/20 bg-primary px-10 font-bold text-white shadow-2xl transition-all hover:bg-secondary hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-muted duration-200">
            Shop Now
          </button>

          {/* Explore Collection - Outline Button */}
          <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-muted group">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D8F3DC_0%,#1B4332_50%,#D8F3DC_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-muted px-8 py-1 text-lg font-semibold text-primary backdrop-blur-3xl transition-all group-hover:bg-muted/80">
              Explore Collection
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};