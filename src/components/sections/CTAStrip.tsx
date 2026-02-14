import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React, { useState } from "react";

export const CTAStrip = () => {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwb6iy2ucUXnG6_uHg-4coG4Xh9RNQI3VWKkKCRihf0t8eO7GfZmPf18IGQoz8MYKQI/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "50",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");

    // Sending data as JSON is more robust for Google Apps Script execution
    // We use 'text/plain' to avoid CORS preflight (OPTIONS) requests which GAS doesn't handle natively
    const payload = {
      date: new Date().toLocaleString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      quantity: formData.quantity,
      message: formData.message,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      // With no-cors/text-plain, we can't read the JSON response, but if it doesn't throw, it likely succeeded.
      // The script is designed to return JSON, but the browser might treat it as opaque.

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        quantity: "50",
        message: ""
      });
      setTimeout(() => setStatus(""), 5000);

    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-primary">Phone</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium text-primary">Estimated Quantity</label>
                <select
                  required
                  name="quantity"
                  id="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                >
                  <option value="50">50 - 100 units</option>
                  <option value="100">100 - 500 units</option>
                  <option value="500">500 - 1000 units</option>
                  <option value="1000">1000+ units</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
              <textarea
                required
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full p-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] group"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
              {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </Button>

            {status && (
              <p className={`text-center mt-4 text-lg font-medium ${status.includes("successfully") ? "text-green-600" : "text-red-500"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
