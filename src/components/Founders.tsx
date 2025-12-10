import foundersImg from "@/assets/founders.jpg";
import { team } from "@/data/team";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export const Founders = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToTeam = () => {
    if (scrollContainerRef.current) {
      // Scroll width of one horizontal viewport
      const width = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: width,
        behavior: "smooth"
      });
    }
  };

  const scrollToFounders = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="founders"
      ref={scrollContainerRef}
      className="relative h-[100dvh] w-full bg-primary overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scrollbar-none"
    >

      {/* Slide 1: Founders Message */}
      <div className="min-w-full w-full h-full snap-center shrink-0 flex items-center justify-center relative bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full h-full overflow-y-auto pt-20 pb-10 flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full aspect-square md:aspect-auto md:h-[600px] order-first">
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

                <button
                  onClick={scrollToTeam}
                  className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-semibold hover:bg-accent/90 transition-all group w-full sm:w-auto justify-center"
                >
                  Meet Our Team
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Team Section */}
      <div className="min-w-full w-full h-full snap-center shrink-0 flex flex-col justify-center bg-primary/95 backdrop-blur-sm relative overflow-y-auto">
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
          <button
            onClick={scrollToFounders}
            className="inline-flex items-center gap-2 text-cream/80 hover:text-accent transition-colors bg-black/20 px-4 py-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 flex flex-col h-full justify-center">
          <h3 className="text-3xl md:text-5xl font-bold text-cream mb-8 md:mb-16 text-center shrink-0">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-10">
            {team.map((member) => (
              <div key={member.id} className="w-full h-full min-h-[400px]">
                <CardContainer className="inter-var w-full h-full" containerClassName="py-0 h-full">
                  <CardBody className="bg-white/10 backdrop-blur-md relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300 hover:bg-white/15 flex flex-col">
                    <CardItem translateZ="50" className="w-full aspect-square mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-lg"
                      />
                    </CardItem>
                    <div>
                      <CardItem
                        translateZ="60"
                        className="text-xl md:text-2xl font-bold text-cream mb-2"
                      >
                        {member.name}
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className="text-sm md:text-md font-semibold text-accent mb-3 uppercase tracking-wider"
                      >
                        {member.role}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="50"
                        className="text-cream/80 text-xs sm:text-sm leading-relaxed"
                      >
                        {member.bio}
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};