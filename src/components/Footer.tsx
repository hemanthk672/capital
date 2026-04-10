import { Scissors, Instagram, Facebook, Youtube, MapPin, Phone, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Haircut & Styling',
  'Hair Spa & Treatment',
  'Facial & Glow',
  'Skincare & Cleanup',
  'Bridal Package',
  'Spa Relaxation',
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#c9a840] flex items-center justify-center">
                <Scissors size={16} className="text-black" />
              </div>
              <div>
                <span className="block font-playfair font-bold text-[#c9a840] text-base">YOUTH ICON</span>
                <span className="block font-poppins text-[#f5f0e8]/40 text-[10px] tracking-widest uppercase">Hair Salon</span>
              </div>
            </div>
            <p className="font-poppins text-[#f5f0e8]/40 text-sm leading-relaxed mb-5">
              Kurmannapalem's premier family salon — where luxury meets expertise and every visit is a transformation.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#c9a840]/20 hover:text-[#c9a840] text-[#f5f0e8]/40 flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-white text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-poppins text-[#f5f0e8]/40 hover:text-[#c9a840] text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-white text-base mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-poppins text-[#f5f0e8]/40 hover:text-[#c9a840] text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-white text-base mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#c9a840] mt-0.5 flex-shrink-0" />
                <span className="font-poppins text-[#f5f0e8]/40 text-sm">Prime Majestic Apartment, colony, Mathrushree Layout, Dwarakapuri Colony, Vuda Colony, Kurmannapalem, Gajuwaka, A.P</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#c9a840] flex-shrink-0" />
                <a href="tel:+918185891864" className="font-poppins text-[#f5f0e8]/40 hover:text-[#c9a840] text-sm transition-colors">
                  +91 81858 91864
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#c9a840] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-poppins text-[#f5f0e8]/40 text-sm">Mon–Sat: 9:00 AM – 8:00 PM</span>
                  <span className="block font-poppins text-[#f5f0e8]/40 text-sm">Sunday: 10:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-[#f5f0e8]/25 text-xs">
            © {new Date().getFullYear()} Youth Icon Hair Salon. All rights reserved.
          </p>
          <p className="font-poppins text-[#f5f0e8]/25 text-xs">
            Kurmannapalem, Andhra Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
