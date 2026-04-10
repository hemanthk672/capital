import { useState, useEffect } from 'react';
import { Scissors, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book', href: '#booking' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#c9a840]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#c9a840] flex items-center justify-center shadow-md group-hover:bg-[#e8c85a] transition-colors">
              <Scissors size={18} className="text-black" />
            </div>
            <div className="leading-tight">
              <span className="block text-[#c9a840] font-playfair font-bold text-base tracking-wide">LOOK ME</span>
              <span className="block text-[#f5f0e8]/70 font-poppins text-[10px] tracking-widest uppercase">Family Spa & Hair</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#f5f0e8]/80 hover:text-[#c9a840] font-poppins text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a840] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 bg-[#c9a840] hover:bg-[#e8c85a] text-black font-poppins text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-[#c9a840]/30 hover:shadow-lg"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-[#f5f0e8] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-[#c9a840]/20 px-4 pb-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[#f5f0e8]/80 hover:text-[#c9a840] font-poppins text-sm font-medium border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919999999999"
            className="mt-4 flex items-center justify-center gap-2 bg-[#c9a840] text-black font-poppins text-sm font-semibold px-4 py-3 rounded-full"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
