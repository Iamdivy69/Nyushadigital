import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Architect",
    text: "This bag has been with me for over a year now. Still looks as good as day one. The quality is exceptional!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Teacher",
    text: "Love that it's eco-friendly and stylish. I get compliments everywhere I go. Perfect for daily use.",
    rating: 5,
  },
  {
    name: "Ananya Desai",
    role: "Entrepreneur",
    text: "Finally, a bag that combines sustainability with style. The craftsmanship is evident in every stitch.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-4">
            What Our Customers <span className="font-script text-accent">Say</span>
          </h2>
          <p className="text-xl text-cream/80">Real experiences from real people</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-cream p-8 rounded-3xl border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                transform: `rotate(${index % 2 === 0 ? "-" : ""}1deg)`,
              }}
            >
              {/* Polaroid-style pin */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full shadow-lg flex items-center justify-center">
                <div className="w-1.5 h-4 bg-primary/30 rounded-full" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t-2 border-muted pt-4">
                <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
