import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Send,
  MessageCircle,
  CheckCircle2,
  Navigation,
  Car
} from 'lucide-react';
import { CLINIC_INFO, TREATMENTS, IMAGES } from '../data/clinicData';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState(TREATMENTS[0].id);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Dental Zone Bahrain!\nName: ${name}\nPhone: ${phone}\nMessage: ${message || 'I would like to inquire about appointments at your Riffa clinic.'}`
    );
    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="w-full bg-white text-slate-800 pb-20">
      {/* Hero Header with HD Background Photo */}
      <section className="relative pt-16 pb-20 bg-[#0B1528] text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={IMAGES.headerBg}
            alt="Dental Zone Bahrain clinic facade"
            className="w-full h-full object-cover opacity-40 filter contrast-105 saturate-115"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#0B1528]/85 to-[#0B1528]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-[#0B1528]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Get In Touch · Dental Zone Bahrain
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-display font-bold text-white tracking-tight mt-2">
            Visit Our Clinic in Riffa or <br />
            <span className="text-amber-400 italic">Request An Appointment</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Conveniently located on Road No. 977 in East Riffa with dedicated patient parking and evening appointment availability up to 10:00 PM.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Clinic Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                Direct Contact Lines
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0B1528]">
                Always Here For Your Smile
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Whether you need to confirm an emergency visit, consult about composite veneers with Dr. Afrah, or ask about clear aligners, our reception desk is ready.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Clinic Location (Riffa)</h4>
                  <p className="text-slate-600 mt-0.5">Building 2175, Flat 15, Road No. 977, Block 909, East Riffa, Kingdom of Bahrain</p>
                  <p className="text-slate-400 text-[11px] mt-1">{CLINIC_INFO.landmark}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Telephone & Mobile</h4>
                  <p className="text-slate-700 font-mono tabular-nums mt-0.5">
                    Landline: <a href={`tel:${CLINIC_INFO.phone1}`} className="hover:text-sky-600 underline">{CLINIC_INFO.phone1}</a>
                  </p>
                  <p className="text-slate-700 font-mono tabular-nums mt-0.5">
                    Direct Line: <a href={`tel:${CLINIC_INFO.phone2}`} className="hover:text-sky-600 underline">{CLINIC_INFO.phone2}</a>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-emerald-950 text-sm">WhatsApp Fast Support</h4>
                  <p className="text-emerald-800 text-xs mt-0.5">
                    Instant appointment booking and inquiries directly with our clinic coordinators.
                  </p>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline"
                  >
                    <span>Message +973 6660 0424</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">Official Working Hours</h4>
                  <div className="space-y-1 text-slate-600">
                    {CLINIC_INFO.operatingHours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-200/50 pb-1">
                        <span>{h.days}:</span>
                        <span className="font-semibold text-slate-800">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Official Instagram</h4>
                  <a
                    href={CLINIC_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:underline font-medium text-xs mt-0.5 block"
                  >
                    {CLINIC_INFO.instagramHandle} (Dental Zone منطقة الأسنان)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-soft">
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                Send A Message or Request A Visit
              </span>
              <h3 className="text-2xl font-serif-display font-bold text-[#0B1528] mt-1 mb-2">
                Patient Consultation Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Complete this form and our treatment coordinator will reply by WhatsApp or phone call.
              </p>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center space-y-4 shadow-soft">
                  <div className="w-14 h-14 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif-display font-bold text-slate-900">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{name}</span>. Dental Zone Bahrain will get back to you at <span className="font-semibold text-slate-900">{phone}</span> promptly.
                  </p>

                  <div className="pt-2">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open in WhatsApp for Faster Response
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Mohammed Al-Sayed"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone or WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+973 3XXXXXXX"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="patient@example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Treatment of Interest *
                      </label>
                      <select
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      >
                        {TREATMENTS.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.title}
                          </option>
                        ))}
                        <option value="routine-checkup">Routine Cleaning & Exam</option>
                        <option value="whitening">Laser Whitening</option>
                        <option value="other">General Dental Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message or Consultation Details
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your desired smile outcome, dental concerns, or preferred days to visit..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0B1528] hover:bg-slate-900 text-amber-300 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-soft flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                Location Map & Access
              </span>
              <h3 className="text-2xl font-serif-display font-bold text-[#0B1528] mt-1">
                Finding Dental Zone in Riffa
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Located in Building 2175, Flat 15, Road No. 977, Block 909, East Riffa, Kingdom of Bahrain.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Dental+Zone+Bahrain+Riffa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white border border-slate-200 hover:border-amber-400 text-slate-800 text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors shrink-0 shadow-2xs"
            >
              <Navigation className="w-4 h-4 text-amber-600" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="aspect-[16/7] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-200 shadow-inner">
            <iframe
              title="Dental Zone Bahrain Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114594.4981123478!2d50.4855523!3d26.1287955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e9cb65b822d5%3A0x6b772439c27b0b2e!2sRiffa%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1700000000000!5m2!1sen!2sbh"
              className="w-full h-full border-0 filter saturate-90 contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <Car className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">From Manama & Seef:</span>
                <span>Approximately 18–20 minutes via Shaikh Salman Hwy heading south towards Riffa.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Car className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">From Hamad Town & Isa Town:</span>
                <span>Under 10–12 minutes with straightforward road connections directly into Road 977.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Car className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Patient Parking:</span>
                <span>Complimentary parking spaces reserved right in front of the Dental Zone entrance.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
