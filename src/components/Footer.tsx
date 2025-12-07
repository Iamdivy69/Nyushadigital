import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#D8F3DC] text-[#1B4332] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Nyusha Enterprise" className="w-20 h-20 mb-4 object-contain" />
            <h3 className="text-2xl font-bold mb-4">Nyusha Enterprise</h3>
            <p className="text-[#1B4332]/80 leading-relaxed">
              Handcrafted natural fiber bags that combine sustainability, 
              craftsmanship, and timeless style. Made in India with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-[#1B4332]/80">
              <li><a href="#" className="hover:text-[#40916C] transition-colors">Woven Bags</a></li>
              <li><a href="#" className="hover:text-[#40916C] transition-colors">Non-Woven Bags</a></li>
              <li><a href="#" className="hover:text-[#40916C] transition-colors">Designer Totes</a></li>
              <li><a href="#" className="hover:text-[#40916C] transition-colors">Eco Essentials</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-2 text-[#1B4332]/80">
              <li><a href="#" className="hover:text-[#40916C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#40916C] transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#40916C] transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-[#40916C] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="border-t border-[#1B4332]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <a
                href="tel:+917359392396"
                className="flex items-center gap-2 hover:text-[#40916C] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 7359392396</span>
              </a>
              <a
                href="mailto:hello@nyushaenterprise.com"
                className="flex items-center gap-2 hover:text-[#40916C] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>nyushadigitals@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center hover:bg-[#1B4332]/90 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#D8F3DC]" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 text-[#1B4332]/60 text-sm">
            <p>© 2024 Nyusha Enterprise. Handcrafted in India. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};