import { Scissors, Sparkles, Flower2, Heart, Crown, Wind, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircut & Styling',
    desc: 'Precision cuts, trendy styles, and blowouts tailored to your face shape and personality.',
    price: 'From ₹150',
    image: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Popular',
  },
  {
    icon: Wind,
    title: 'Hair Spa & Treatment',
    desc: 'Deep conditioning, protein treatments, and scalp therapies to restore shine and strength.',
    price: 'From ₹500',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
  },
  {
    icon: Sparkles,
    title: 'Facial & Glow',
    desc: 'Premium facials using top-tier products for radiant, youthful skin every time.',
    price: 'From ₹400',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Best Seller',
  },
  {
    icon: Flower2,
    title: 'Skincare & Cleanup',
    desc: 'Deep pore cleansing, de-tanning, and moisturizing treatments for healthy skin.',
    price: 'From ₹300',
    image: 'https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
  },
  {
    icon: Crown,
    title: 'Bridal Package',
    desc: 'Complete bridal makeover — hair, skin, and beauty — to make your special day unforgettable.',
    price: 'From ₹3000',
    image: 'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Premium',
  },
  {
    icon: Heart,
    title: 'Spa Relaxation',
    desc: 'Therapeutic massages, body wraps, and relaxation therapies to rejuvenate body and mind.',
    price: 'From ₹700',
    image: 'https://images.pexels.com/photos/3820338/pexels-photo-3820338.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-poppins text-[#c9a840] text-xs font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="gold-text italic">Services</span>
          </h2>
          <p className="font-poppins text-[#f5f0e8]/50 text-base max-w-xl mx-auto">
            From everyday grooming to special occasion glamour — we have everything your family needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-[#161616] border border-white/5 hover:border-[#c9a840]/30 card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover gallery-img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/20 to-transparent" />
                {service.badge && (
                  <span className="absolute top-3 right-3 bg-[#c9a840] text-black font-poppins text-xs font-semibold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a840]/10 group-hover:bg-[#c9a840]/20 flex items-center justify-center transition-colors">
                    <service.icon size={18} className="text-[#c9a840]" />
                  </div>
                  <h3 className="font-playfair font-semibold text-white text-lg">{service.title}</h3>
                </div>
                <p className="font-poppins text-[#f5f0e8]/50 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-[#c9a840] font-bold text-lg">{service.price}</span>
                  <a
                    href="#booking"
                    className="font-poppins text-xs text-[#c9a840] border border-[#c9a840]/30 hover:bg-[#c9a840] hover:text-black px-4 py-2 rounded-full transition-all duration-200"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#c9a840]/10 via-[#c9a840]/5 to-[#c9a840]/10 border border-[#c9a840]/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star size={16} className="text-[#c9a840] fill-[#c9a840]" />
            <span className="font-playfair text-white font-semibold">Special Combo Packages Available</span>
            <Star size={16} className="text-[#c9a840] fill-[#c9a840]" />
          </div>
          <p className="font-poppins text-[#f5f0e8]/50 text-sm mb-4">Ask our staff about family packages and seasonal offers</p>
          <a href="#booking" className="inline-flex items-center gap-2 bg-[#c9a840] text-black font-poppins font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#e8c85a] transition-colors">
            View All Packages
          </a>
        </div>
      </div>
    </section>
  );
}
