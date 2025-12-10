import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";

export const Process = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Handcrafted with Care */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              <span className="font-script text-accent">Handcrafted</span> with Care
            </h2>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Each Nyusha bag begins with carefully selected natural fibers — jute,
                cotton, and hemp — sourced from sustainable farms.
              </p>

              <p>
                Our artisans hand-weave and stitch every piece using traditional
                techniques passed down through generations. This attention to detail
                ensures not just beauty, but durability that lasts for years.
              </p>

              <p>
                No two bags are exactly alike. The subtle variations in texture and
                color celebrate the handmade nature of our craft.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[500px] w-full group">
            <img
              src={process1}
              alt="Handcrafting process"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Sustainability in Every Stitch */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[500px] w-full group">
            <img
              src={process2}
              alt="Natural materials"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Sustainability in Every <span className="font-script text-accent">Stitch</span>
            </h2>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe in creating products that don't harm the planet. That's why
                we use only natural, biodegradable fibers and plant-based dyes.
              </p>

              <p>
                Our low-waste production process minimizes environmental impact. Fabric
                scraps are repurposed, and we avoid plastic packaging entirely.
              </p>

              <p>
                By choosing handcrafted over mass-produced, we reduce carbon emissions
                and support fair-wage employment for local artisans.
              </p>

              <div className="mt-8 p-6 bg-accent/10 rounded-2xl border-2 border-accent/30">
                <p className="font-semibold text-primary">
                  🌱 Every bag prevents approximately 2kg of CO₂ emissions compared
                  to synthetic alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
