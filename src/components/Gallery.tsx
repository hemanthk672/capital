import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Salon Interior',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Precision Haircut',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Hair Coloring',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Facial Treatment',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/13599840/pexels-photo-13599840.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Skincare Ritual',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Bridal Services',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Hair Spa',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Spa Ambiance',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-poppins text-[#c9a840] text-xs font-semibold tracking-widest uppercase mb-3">Our Space & Work</p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gold-text italic">Gallery</span>
          </h2>
          <p className="font-poppins text-[#f5f0e8]/50 text-base max-w-xl mx-auto">
            A glimpse into our world — stunning interiors, expert services, and happy clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className={`gallery-item relative overflow-hidden rounded-2xl cursor-pointer group ${item.span} ${item.span ? 'row-span-1' : ''}`}
              style={{ aspectRatio: item.span === 'col-span-2' ? '16/9' : '1/1' }}
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="gallery-img-hover w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn size={28} className="text-[#c9a840]" />
                  <span className="font-poppins text-white text-sm font-medium">{item.label}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-poppins text-[#c9a840] text-xs font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#c9a840] transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
