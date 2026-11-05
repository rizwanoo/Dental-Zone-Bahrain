import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  ArrowRight,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { DentalZoneLogo } from './DentalZoneLogo';

interface FooterProps {
  onNavigate: (page: 'home' | 'treatments' | 'about' | 'contact', sectionId?: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#0B1528] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <DentalZoneLogo size="lg" variant="white" />
            <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase mt-2">
              Healthy Smiles · Brighter Tomorrows
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing Bahrain with gentle, personalized, and world-class dental care. Specializing in aesthetic composite veneers, precision implants, and comfortable family dentistry in East Riffa.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:bg-emerald-900 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone1}`}
                className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-1.5 ml-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-medium">Licensed NHRA Bahrain</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-display font-bold text-white text-base tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home', 'top')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Services & Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Our Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', 'doctors')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Our Doctors (Dr. Afrah)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'transformations')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Smile Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-display font-bold text-white text-base tracking-tight">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onNavigate('treatments', t.id)}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Laser Teeth Whitening
                </button>
              </li>
            </ul>
          </div>

          {/* Clinic Hours & Direct Booking (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-display font-bold text-white text-base tracking-tight">
              Visit Dental Zone
            </h4>

            <div className="text-xs space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Building 2175, Flat 15, Road 977, Block 909, East Riffa, Bahrain</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>Sat – Wed: 9:00 AM – 10:00 PM</p>
                  <p>Thursday: 9:00 AM – 9:00 PM</p>
                  <p>Friday: 2:00 PM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 font-mono tabular-nums text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CLINIC_INFO.phone2} / {CLINIC_INFO.phone1}</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold uppercase tracking-wider rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-soft transition-all cursor-pointer"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.legalName} ({CLINIC_INFO.arabicName}). Licensed NHRA Bahrain.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 font-medium tracking-wide uppercase text-[11px] transition-colors cursor-pointer"
          >
            <span>A Healthier Smile For A Brighter Tomorrow</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
