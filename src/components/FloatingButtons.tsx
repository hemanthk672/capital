import { useState, useEffect } from 'react';
import { Phone, ChevronUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 items-end">
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#161616] border border-white/10 hover:border-[#c9a840]/40 text-[#f5f0e8]/60 hover:text-[#c9a840] flex items-center justify-center transition-all duration-200 shadow-lg"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}

      <a
        href="tel:+919999999999"
        className="flex items-center gap-2 bg-[#c9a840] hover:bg-[#e8c85a] text-black font-poppins font-semibold text-xs px-4 py-3 rounded-full shadow-xl hover:shadow-[#c9a840]/40 transition-all duration-200 group"
        aria-label="Call Now"
      >
        <Phone size={15} />
        <span className="hidden sm:block">Call Now</span>
      </a>

      <a
        href="https://wa.me/919999999999?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Look%20Me%20Family%20Spa%20%26%20Hair."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20bf5a] text-white font-poppins font-semibold text-xs px-4 py-3 rounded-full shadow-xl hover:shadow-[#25d366]/40 transition-all duration-200"
        aria-label="WhatsApp Booking"
      >
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.529 5.861L0 24l6.335-1.501A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.988-1.362l-.358-.214-3.712.879.895-3.614-.234-.371A9.79 9.79 0 012.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/>
        </svg>
        <span className="hidden sm:block">WhatsApp</span>
      </a>
    </div>
  );
}
