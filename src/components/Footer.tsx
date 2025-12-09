import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#D8F3DC] text-[#1B4332] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Nyusha Enterprise" className="w-20 h-20 mb-4 object-contain drop-shadow-md" />
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
              {/* X (Twitter) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center hover:bg-[#1B4332]/90 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#D8F3DC]"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center hover:bg-[#1B4332]/90 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#D8F3DC]"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/917359392396"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center hover:bg-[#1B4332]/90 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#D8F3DC]"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487 2.082.899 2.859.721 3.419.669.621-.057 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center hover:bg-[#1B4332]/90 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#D8F3DC]"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
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