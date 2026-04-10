import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    service: 'Bridal Package',
    text: 'Absolutely stunning bridal makeup and hair! Tulasi and the team made me feel like royalty on my wedding day. Every detail was perfect, and the salon ambiance is incredibly elegant. Highly recommend for any bridal occasion!',
    date: 'March 2024',
    initials: 'PS',
  },
  {
    id: 2,
    name: 'Ramesh Kumar',
    rating: 5,
    service: 'Haircut & Styling',
    text: 'Best haircut I have had in years! Naveena understood exactly what I wanted and delivered flawlessly. The atmosphere is premium, staff are very professional. Will definitely come back every month.',
    date: 'February 2024',
    initials: 'RK',
  },
  {
    id: 3,
    name: 'Anitha Reddy',
    rating: 5,
    service: 'Facial & Glow',
    text: 'Lakshmi did an amazing facial for me. My skin was glowing for days after! The products they use are top quality, and the service was so relaxing. Look Me is truly Anakapalle\'s best beauty destination.',
    date: 'January 2024',
    initials: 'AR',
  },
  {
    id: 4,
    name: 'Suresh Babu',
    rating: 5,
    service: 'Hair Spa',
    text: 'The hair spa treatment was absolutely rejuvenating. My hair felt so soft and healthy after years of damage. The team is knowledgeable and caring. 5 stars without a doubt!',
    date: 'December 2023',
    initials: 'SB',
  },
  {
    id: 5,
    name: 'Kavitha Rao',
    rating: 5,
    service: 'Skincare Cleanup',
    text: 'Wonderful experience every single time I visit! The staff remembers my preferences, the salon is immaculate, and results are always outstanding. Special thanks to Tulasi for the excellent skincare advice.',
    date: 'November 2023',
    initials: 'KR',
  },
  {
    id: 6,
    name: 'Vijay Krishna',
    rating: 4,
    service: 'Haircut',
    text: 'Great salon with professional staff. Got a modern fade haircut that everyone loved. The interiors are gorgeous — the blue star ceiling is a memorable touch. Excellent value for money.',
    date: 'October 2023',
    initials: 'VK',
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-[#c9a840] fill-[#c9a840]' : 'text-white/20'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a840]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-poppins text-[#c9a840] text-xs font-semibold tracking-widest uppercase mb-3">Client Voices</p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our <span className="gold-text italic">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#c9a840] fill-[#c9a840]" />
              ))}
            </div>
            <span className="font-playfair text-3xl font-bold text-[#c9a840]">4.6</span>
            <div className="text-left">
              <span className="block font-poppins text-white text-sm font-semibold">Overall Rating</span>
              <span className="block font-poppins text-[#f5f0e8]/40 text-xs">Based on 1300+ reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#161616] rounded-2xl border border-white/5 hover:border-[#c9a840]/25 p-6 card-hover group relative"
            >
              <Quote size={30} className="text-[#c9a840]/20 mb-4 group-hover:text-[#c9a840]/30 transition-colors" />
              <p className="font-poppins text-[#f5f0e8]/65 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#c9a840]/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair font-bold text-[#c9a840] text-sm">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-playfair font-semibold text-white text-sm">{t.name}</span>
                  <span className="block font-poppins text-[#f5f0e8]/35 text-xs">{t.service} · {t.date}</span>
                </div>
                <StarRow rating={t.rating} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#c9a840]/30 hover:border-[#c9a840] text-[#c9a840] font-poppins text-sm font-medium px-8 py-3 rounded-full transition-all duration-200 hover:bg-[#c9a840]/10"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
