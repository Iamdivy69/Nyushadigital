import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const CTAStrip = () => {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Bulk <span className="font-script">Inquiries</span>
          </h2>
          <p className="text-xl text-primary/80">
            Interested in wholesale or custom orders? Convert to sustainable packaging for your business today.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-primary/10">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            {/* ACCESS KEY - REPLACE WITH YOUR OWN KEY FROM WEB3FORMS */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
                <input required type="text" name="name" id="name" placeholder="Your Name" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
                <input required type="email" name="email" id="email" placeholder="your@email.com" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-primary">Phone</label>
                <input required type="tel" name="phone" id="phone" placeholder="+91 98765 43210" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium text-primary">Estimated Quantity</label>
                <select required name="quantity" id="quantity" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                  <option value="50-100">50 - 100 units</option>
                  <option value="100-500">100 - 500 units</option>
                  <option value="500-1000">500 - 1000 units</option>
                  <option value="1000+">1000+ units</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
              <textarea required name="message" id="message" rows={4} placeholder="Tell us about your requirements..." className="w-full p-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] group"
            >
              Send Inquiry
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
