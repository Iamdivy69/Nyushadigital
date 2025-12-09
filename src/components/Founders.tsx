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
      ref={scrollContainerRef}
      className="relative h-screen w-full bg-primary overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scrollbar-none"
    >

      {/* Slide 1: Founders Message */}
      <div className="min-w-full w-full h-screen snap-center shrink-0 flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={foundersImg}
                alt="Founders"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Green Fade Overlay - Reduced intensity */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/60 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="text-cream relative">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                The Person Behind the <span className="font-script text-accent">Purpose</span>
              </h2>

              <div className="space-y-6 text-lg text-cream/90 leading-relaxed">
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
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-semibold hover:bg-accent/90 transition-all group"
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
      <div className="min-w-full w-full h-screen snap-center shrink-0 flex flex-col justify-center bg-primary/95 backdrop-blur-sm relative">
        <div className="absolute top-8 left-8">
          <button
            onClick={scrollToFounders}
            className="inline-flex items-center gap-2 text-cream/80 hover:text-accent transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Back to Founders
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <h3 className="text-4xl md:text-5xl font-bold text-cream mb-16 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="w-full h-full">
                <CardContainer className="inter-var w-full h-full" containerClassName="py-0 h-full">
                  <CardBody className="bg-white/10 backdrop-blur-md relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300 hover:bg-white/15 flex flex-col">
                    <CardItem translateZ="50" className="w-full h-72 mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-lg"
                      />
                    </CardItem>
                    <div>
                      <CardItem
                        translateZ="60"
                        className="text-2xl font-bold text-cream mb-2"
                      >
                        {member.name}
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className="text-md font-semibold text-accent mb-3 uppercase tracking-wider"
                      >
                        {member.role}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="50"
                        className="text-cream/80 text-sm leading-relaxed"
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