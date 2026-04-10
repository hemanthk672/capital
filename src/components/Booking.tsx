import { useState } from 'react';
import { Calendar, Clock, User, Phone, Scissors, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { AppointmentFormData } from '../types';

const services = [
  'Haircut & Styling',
  'Hair Spa & Treatment',
  'Facial & Glow',
  'Skincare & Cleanup',
  'Bridal Package',
  'Spa Relaxation',
  'Hair Coloring',
  'Keratin Treatment',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
];

const initialForm: AppointmentFormData = {
  name: '',
  phone: '',
  service: '',
  appointment_date: '',
  appointment_time: '',
  message: '',
};

export default function Booking() {
  const [form, setForm] = useState<AppointmentFormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('appointments').insert([form]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    } else {
      setStatus('success');
      setForm(initialForm);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a840]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="font-poppins text-[#c9a840] text-xs font-semibold tracking-widest uppercase mb-3">Reserve Your Spot</p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Book Your<br />
              <span className="gold-text italic">Appointment</span>
            </h2>
            <p className="font-poppins text-[#f5f0e8]/50 text-base leading-relaxed mb-8">
              Secure your preferred slot with our expert team. We confirm within 30 minutes via phone call.
            </p>

            <div className="space-y-4">
              {[
                { icon: Calendar, text: 'Choose your preferred date & time' },
                { icon: Scissors, text: 'Select from our range of premium services' },
                { icon: Phone, text: 'Receive confirmation call from our team' },
                { icon: CheckCircle, text: 'Arrive and enjoy your transformation' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c9a840]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#c9a840]" />
                  </div>
                  <span className="font-poppins text-[#f5f0e8]/60 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl border border-[#c9a840]/20 bg-[#c9a840]/5">
              <p className="font-poppins text-[#c9a840] text-sm font-semibold mb-1">Opening Hours</p>
              <div className="space-y-1">
                <div className="flex justify-between font-poppins text-[#f5f0e8]/60 text-sm">
                  <span>Mon – Sat</span><span>9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between font-poppins text-[#f5f0e8]/60 text-sm">
                  <span>Sunday</span><span>10:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#161616] rounded-3xl border border-white/5 p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-[#c9a840]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-[#c9a840]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Booking Confirmed!</h3>
                <p className="font-poppins text-[#f5f0e8]/60 text-base mb-8">
                  Thank you! We've received your appointment request and will call you within 30 minutes to confirm.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-[#c9a840] hover:bg-[#e8c85a] text-black font-poppins font-semibold text-sm px-8 py-3 rounded-full transition-colors"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-playfair text-xl font-semibold text-white mb-6">Fill in Your Details</h3>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <AlertCircle size={18} />
                    <span className="font-poppins text-sm">{errorMsg}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-poppins text-[#f5f0e8]/60 text-xs mb-2 block uppercase tracking-wide">Full Name *</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a840]/60" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-white/10 focus:border-[#c9a840]/50 rounded-xl text-[#f5f0e8] placeholder-[#f5f0e8]/25 font-poppins text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-poppins text-[#f5f0e8]/60 text-xs mb-2 block uppercase tracking-wide">Phone Number *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a840]/60" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-white/10 focus:border-[#c9a840]/50 rounded-xl text-[#f5f0e8] placeholder-[#f5f0e8]/25 font-poppins text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-poppins text-[#f5f0e8]/60 text-xs mb-2 block uppercase tracking-wide">Select Service *</label>
                  <div className="relative">
                    <Scissors size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a840]/60" />
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-white/10 focus:border-[#c9a840]/50 rounded-xl text-[#f5f0e8] font-poppins text-sm outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Choose a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-poppins text-[#f5f0e8]/60 text-xs mb-2 block uppercase tracking-wide">Date *</label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a840]/60" />
                      <input
                        type="date"
                        name="appointment_date"
                        value={form.appointment_date}
                        onChange={handleChange}
                        required
                        min={today}
                        className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-white/10 focus:border-[#c9a840]/50 rounded-xl text-[#f5f0e8] font-poppins text-sm outline-none transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-poppins text-[#f5f0e8]/60 text-xs mb-2 block uppercase tracking-wide">Time *</label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a840]/60" />
                      <select
                        name="appointment_time"
                        value={form.appointment_time}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-white/10 focus:border-[#c9a840]/50 rounded-xl text-[#f5f0e8] font-poppins text-sm outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-poppins text-[#f5f0e8]/60 text-xs mb-2 block uppercase tracking-wide">Special Requests</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requests or notes for our team..."
                    className="w-full px-4 py-3 bg-[#0f0f0f] border border-white/10 focus:border-[#c9a840]/50 rounded-xl text-[#f5f0e8] placeholder-[#f5f0e8]/25 font-poppins text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#c9a840] hover:bg-[#e8c85a] disabled:opacity-70 disabled:cursor-not-allowed text-black font-poppins font-semibold text-sm py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#c9a840]/30 hover:shadow-xl hover:-translate-y-0.5"
                >
                  {status === 'loading' ? 'Booking...' : 'Book Appointment Now'}
                </button>

                <p className="font-poppins text-[#f5f0e8]/30 text-xs text-center">
                  Prefer to call? Reach us at <a href="tel:+919999999999" className="text-[#c9a840] hover:underline">+91 99999 99999</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
