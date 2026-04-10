import { MapPin, Phone, Clock, Mail, ExternalLink, Vault } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    // value: 'Pool Bagh Road, Near RTC Complex Rd',
    // sub: 'Anakapalle, Andhra Pradesh',
    // link: 'https://maps.google.com/?q=Look+Me+Family+Spa+Hair+Anakapalle',
     value: 'Prime Majestic Apartment, Mathrushree Layout, Dwarakapuri Colony',
    sub: 'Kurmannapalem, Gajuwaka, Andhra Pradesh 530049',
    link: 'https://share.google/W51YzWsptxQEFH8hM',
  },
  {
    icon: Phone,
    label: 'Phone',
    // value: '+91 80195 66636',
    value:'081858 91864',
    sub: 'Available during working hours',
    link: 'tel:+918185891864',
  },
  {
    icon: Mail,
    label: 'Email',
    // value: 'lookme@example.com',
    value:'youthicon@gmail.com',
    sub: 'We reply within 24 hours',
    link: 'mailto:youthicon@gmail.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Sat: 9 AM – 8 PM',
    sub: 'Sunday: 10 AM – 7 PM',
    link: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a8fe3]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-poppins text-[#c9a840] text-xs font-semibold tracking-widest uppercase mb-3">Find Us</p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gold-text italic">Get In Touch</span>
          </h2>
          <p className="font-poppins text-[#f5f0e8]/50 text-base max-w-xl mx-auto">
            We're conveniently located in Anakapalle. Walk in or call us — we're always happy to see you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, sub, link }) => (
              <div
                key={label}
                className="flex items-start gap-5 p-6 rounded-2xl bg-[#161616] border border-white/5 hover:border-[#c9a840]/25 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a840]/10 group-hover:bg-[#c9a840]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon size={20} className="text-[#c9a840]" />
                </div>
                <div className="flex-1">
                  <span className="block font-poppins text-[#f5f0e8]/40 text-xs uppercase tracking-wide mb-1">{label}</span>
                  <span className="block font-playfair font-semibold text-white text-base">{value}</span>
                  <span className="block font-poppins text-[#f5f0e8]/40 text-sm mt-0.5">{sub}</span>
                </div>
                {link && (
                  <a
                    href={link}
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-[#c9a840]/40 hover:text-[#c9a840] transition-colors mt-1"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#c9a840]/10 to-[#c9a840]/5 border border-[#c9a840]/20">
              <h3 className="font-playfair font-semibold text-white text-lg mb-3">Reach Us Instantly</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918185891864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bf5a] text-white font-poppins font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.529 5.861L0 24l6.335-1.501A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-4.988-1.362l-.358-.214-3.712.879.895-3.614-.234-.371A9.79 9.79 0 012.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="tel:+918185891864"
                  className="flex items-center justify-center gap-2 bg-[#c9a840] hover:bg-[#e8c85a] text-black font-poppins font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  <Phone size={15} />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/5 min-h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.7!2d83.0!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Look Me The Family Spa & Hair Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <a
              href="https://maps.google.com/?q=Pool+Bagh+Road+Near+RTC+Complex+Anakapalle"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#c9a840] text-black font-poppins font-semibold text-xs px-4 py-2 rounded-full shadow-lg hover:bg-[#e8c85a] transition-colors"
            >
              <MapPin size={13} />
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
