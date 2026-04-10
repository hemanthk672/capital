import { Shield, Sparkles, Heart, Clock } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Trusted Since Day One',
    desc: 'Serving families in Anakapalle with consistency, quality, and genuine care.',
  },
  {
    icon: Sparkles,
    title: 'Premium Ambiance',
    desc: 'Step into a world of warm lighting, marble interiors, and serene atmosphere.',
  },
  {
    icon: Heart,
    title: 'Client-First Philosophy',
    desc: 'Every client receives personalized attention tailored to their unique style.',
  },
  {
    icon: Clock,
    title: 'Open 7 Days',
    desc: 'Convenient hours to fit your busy schedule. Walk-ins always welcome.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a840]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1a8fe3]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-poppins text-[#c9a840] text-xs font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Where Family Meets<br />
              <span className="gold-text italic">Fine Beauty</span>
            </h2>
            <p className="font-poppins text-[#f5f0e8]/60 text-base leading-relaxed mb-6">
              Nestled in the heart of Anakapalle on Pool Bagh Road, Look Me The Family Spa & Hair has been a beacon of excellence in personal grooming and wellness. Our journey began with a simple belief: every family member deserves professional, luxurious care at an accessible price.
            </p>
            <p className="font-poppins text-[#f5f0e8]/60 text-base leading-relaxed mb-8">
              Our stunning interiors — adorned with blue LED star ceilings, marble pillars, and golden accent lighting — create an atmosphere that transcends an ordinary salon visit. With a team of passionate, certified stylists led by experts like Tulasi, Naveena, and Lakshmi, we transform every appointment into a memorable experience.
            </p>

            <div className="flex items-center gap-6 p-5 rounded-2xl bg-[#c9a840]/10 border border-[#c9a840]/20">
              <div className="text-center">
                <span className="block font-playfair text-3xl font-bold text-[#c9a840]">4.6</span>
                <div className="flex gap-0.5 justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < 5 ? 'text-[#c9a840]' : 'text-white/20'}`}>★</span>
                  ))}
                </div>
                <span className="font-poppins text-[#f5f0e8]/50 text-xs mt-1 block">Avg Rating</span>
              </div>
              <div className="w-px h-14 bg-[#c9a840]/20" />
              <div className="text-center">
                <span className="block font-playfair text-3xl font-bold text-[#c9a840]">1300+</span>
                <span className="font-poppins text-[#f5f0e8]/50 text-xs mt-1 block">Happy Reviews</span>
              </div>
              <div className="w-px h-14 bg-[#c9a840]/20" />
              <div className="text-center">
                <span className="block font-playfair text-3xl font-bold text-[#c9a840]">10+</span>
                <span className="font-poppins text-[#f5f0e8]/50 text-xs mt-1 block">Expert Staff</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden row-span-2">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Salon interior"
                className="w-full h-full object-cover gallery-img-hover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hair styling"
                className="w-full h-full object-cover gallery-img-hover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Facial treatment"
                className="w-full h-full object-cover gallery-img-hover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-[#161616] border border-white/5 hover:border-[#c9a840]/30 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c9a840]/10 group-hover:bg-[#c9a840]/20 flex items-center justify-center mb-4 transition-colors">
                <Icon size={22} className="text-[#c9a840]" />
              </div>
              <h3 className="font-playfair font-semibold text-white text-base mb-2">{title}</h3>
              <p className="font-poppins text-[#f5f0e8]/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
