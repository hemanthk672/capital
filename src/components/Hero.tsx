import { Star, Users, Award, ChevronDown } from 'lucide-react';

const highlights = [
  { icon: Star, label: '4.6 Rating', sub: '5-Star Excellence' },
  { icon: Users, label: '1300+ Reviews', sub: 'Happy Clients' },
  { icon: Award, label: 'Expert Staff', sub: 'Certified Stylists' },
];

const slides = [
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3738347/pexels-photo-3738347.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${slides[0]}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a840]/40 bg-[#c9a840]/10 backdrop-blur-sm">
          <Star size={14} className="text-[#c9a840] fill-[#c9a840]" />
          <span className="text-[#c9a840] font-poppins text-xs font-medium tracking-widest uppercase">Kurmannapalem's Finest Salon</span> {/* Anakapalle's Finest Family Spa & Hair */ }
          <Star size={14} className="text-[#c9a840] fill-[#c9a840]" />
        </div>

        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight">
          Experience<br />
          <span className="gold-text text-shadow-gold italic">Luxury & Style</span>
        </h1>

        <p className="font-poppins text-[#f5f0e8]/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Your premier family spa and hair destination in the heart of Anakapalle.
          Where beauty meets expertise, and every visit is a transformative experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a840] hover:bg-[#e8c85a] text-black font-poppins font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#c9a840]/40 hover:shadow-xl hover:-translate-y-1"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-[#c9a840]/50 hover:border-[#c9a840] text-[#f5f0e8] hover:text-[#c9a840] font-poppins font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            Explore Services
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {highlights.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 p-4 rounded-2xl border border-[#c9a840]/20 bg-black/40 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#c9a840]/15 flex items-center justify-center mb-1">
                <Icon size={18} className="text-[#c9a840]" />
              </div>
              <span className="font-playfair font-bold text-[#c9a840] text-base sm:text-lg">{label}</span>
              <span className="font-poppins text-[#f5f0e8]/50 text-xs">{sub}</span>
            </div>
          ))}
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex flex-col items-center gap-2 text-[#f5f0e8]/40 hover:text-[#c9a840] transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
