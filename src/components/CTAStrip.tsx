import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React, { useState } from "react";

export const CTAStrip = () => {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxowrUJHzsoT0OLTMEi9IVBWgTR1QYW27LkMeUIG2Is_r8naowDnJ_7F7YrSYeEUEYqzA/exec";

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

    const form = e.currentTarget;
    const data = new FormData();
    const date = new Date().toLocaleString();

    // Sending BOTH TitleCase and lowercase keys to handle the script's conflict:
    // 1. The Sheet logic uses headers (e.g. "Name") -> needs 'Name'
    // 2. The Email logic uses lowercase properties (e.g. e.parameter.name) -> needs 'name'

    data.append('date', date);
    data.append('Date', date);

    data.append('name', formData.name);
    data.append('Name', formData.name);

    data.append('email', formData.email);
    data.append('Email', formData.email);

    data.append('phone', formData.phone);
    data.append('Phone', formData.phone);

    data.append('quantity', formData.quantity);
    data.append('Quantity', formData.quantity);

    data.append('message', formData.message);
    data.append('Message', formData.message);

    // Debug logging
    console.log("Submitting form data to Google Sheet:", {
      url: GOOGLE_SCRIPT_URL,
      data: Object.fromEntries(data.entries())
    });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      // Since mode is 'no-cors', we cannot access response status.
      // We assume if it didn't throw, it was successful.
      setStatus("Message sent successfully!");
      console.log("Form submission fetch completed (no-cors mode)");

      setFormData({
        name: "",
        email: "",
        phone: "",
        quantity: "50",  // Reset to default numeric value
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
