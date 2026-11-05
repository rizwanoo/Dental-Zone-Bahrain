import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Shield,
  Heart,
  ChevronDown,
  ChevronUp,
  Award,
  MessageCircle,
  ExternalLink,
  Building2,
  Microscope
} from 'lucide-react';
import {
  CLINIC_INFO,
  IMAGES,
  TREATMENTS,
  DOCTORS,
  TRANSFORMATIONS,
  REVIEWS,
  FAQS
} from '../data/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface HomePageProps {
  onNavigate: (page: 'home' | 'treatments' | 'about' | 'contact', sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // In-page direct booking form
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('cosmetic-dentistry');
  const [formDoctor, setFormDoctor] = useState('dr-afrah');
  const [formDate, setFormDate] = useState('');
  const [formTime, setFormTime] = useState('morning');
  const [formNotes, setFormNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInlineBook = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white text-slate-800">
      {/* ==============================================================
          SECTION A: FULL-WIDTH CINEMATIC HERO OVER BRIGHT HD CLINIC PHOTO
          (Bright natural HD clinic photo 100% visible, zero blur, zero blue tint)
      ============================================================== */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-slate-950 text-white overflow-hidden border-b border-slate-200">
        {/* Bright HD Clinic Background Photo — 100% visible, bright, crisp */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={IMAGES.brightClinicBg}
            alt="Dental Zone Bahrain bright luxury clinic reception and waiting lounge"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
          />
          {/* Subtle light gradient for text contrast only — zero blue layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-300 uppercase bg-slate-950/70 px-3.5 py-1.5 rounded-full border border-amber-400/40 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Dental Zone Bahrain · Riffa Practice</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-display font-bold text-white tracking-tight leading-[1.08] text-balance drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Your Smile. <br />
              <span className="text-amber-400 italic drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Our Passion.</span>
            </h1>

            <p className="text-base sm:text-xl text-white leading-relaxed max-w-2xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] font-medium">
              Experience gentle, personalized dental excellence in Riffa, Bahrain. Specializing in handcrafted composite veneers, guided implants, and painless family care.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('book')}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-2xl transition-all cursor-pointer flex items-center gap-2 group active:scale-[0.98]"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('clinic-tour')}
                className="px-7 py-4 bg-slate-950/60 hover:bg-slate-950/80 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/30 backdrop-blur-md transition-colors flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-slate-950">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Explore Clinic Tour</span>
              </button>
            </div>

            <div className="pt-8 border-t border-white/20 flex flex-wrap items-center gap-6">
              <div className="flex items-center -space-x-2">
                <div className="w-11 h-11 rounded-full border-2 border-amber-400 overflow-hidden shadow-md bg-slate-800">
                  <img
                    src={IMAGES.doctors.drAfrah}
                    alt="Dr. Afrah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white/50 overflow-hidden shadow-md bg-slate-800">
                  <img
                    src={IMAGES.doctors.orthodontist}
                    alt="Orthodontist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white/50 overflow-hidden shadow-md bg-slate-800">
                  <img
                    src={IMAGES.doctors.implantologist}
                    alt="Implantologist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-300" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1.5 drop-shadow">4.8 Rating</span>
                </div>
                <p className="text-xs text-slate-200 mt-0.5 drop-shadow font-medium">
                  Lead by <span className="text-amber-300 font-bold">Dr. Afrah</span> & certified medical team in Riffa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION B: TRUST & BENEFITS STRIP
      ============================================================== */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 py-2 md:py-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Advanced Technology</h4>
                <p className="text-xs text-slate-500">Modern 3D digital precision</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-2 md:py-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Certified Specialists</h4>
                <p className="text-xs text-slate-500">Dr. Afrah & expert clinicians</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-2 md:py-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Personalized Care</h4>
                <p className="text-xs text-slate-500">Tailored to your facial harmony</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-2 md:py-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Evening Availability</h4>
                <p className="text-xs text-slate-500">Open until 10:00 PM in Riffa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION C: ABOUT DENTAL ZONE
      ============================================================== */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-100" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-200 relative group">
                <img
                  src={IMAGES.clinicInterior}
                  alt="Dental Zone Bahrain clinic reception lounge and dental suites"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-card border border-slate-100">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-600 block mb-0.5">
                    A Cleaner, Brighter, Healthier You
                  </span>
                  <p className="text-xs text-slate-600">
                    Welcome to Dental Zone in Riffa. Designed with private suites and sterile German dental units.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                About Dental Zone Bahrain · منطقة الأسنان
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight">
                More Than <br />
                <span className="text-sky-700 italic">Just A Dental Clinic.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Dental Zone Bahrain, we believe a confident smile can transform lives. Our practice in Riffa is founded on medical honesty, gentle patient communication, and cutting-edge dental science.
              </p>

              <p className="text-sm text-slate-500 leading-relaxed">
                From handcrafted composite veneers by Dr. Afrah to computer-guided dental implants and invisible aligners, we dedicate ample consultation time to listen to your goals and tailor treatments specifically for you.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-200/80">
                {CLINIC_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-serif-display font-bold text-sky-700 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#0B1528] hover:bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Learn More About Us
                </button>
                <button
                  onClick={() => scrollToSection('book')}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION D: OUR SERVICES
      ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                Clinical Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight mt-1">
                Our Services & Treatments
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Complete, gentle dental care for the entire family in Riffa, Bahrain.
              </p>
            </div>

            <button
              onClick={() => onNavigate('treatments')}
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TREATMENTS.map((treatment) => (
              <div
                key={treatment.id}
                onClick={() => onNavigate('treatments', treatment.id)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-[10px] font-bold text-slate-900 px-2.5 py-1 rounded-md shadow-2xs">
                    {treatment.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display font-bold text-slate-900 text-lg group-hover:text-sky-700 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                      {treatment.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-sky-700">
                      Explore Treatment
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0B1528] text-slate-600 group-hover:text-amber-400 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION E: CINEMATIC BRAND BANNER
      ============================================================== */}
      <section className="relative py-20 bg-[#0B1528] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.smileBanner}
            alt="Dental Zone radiant smile"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold tracking-tight leading-tight">
              A Healthier Smile. <br />
              <span className="text-amber-400 italic">A More Confident You.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Book your appointment today at Dental Zone in Riffa. Experience painless anesthesia, digital precision, and welcoming healthcare.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('book')}
                className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-elevated transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider rounded-lg backdrop-blur-xs transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +973 6660 0424</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Painless Treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Modern Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Comfortable Environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION F: OUR EXPERT TEAM
      ============================================================== */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-100" id="doctors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                Qualified Dental Practitioners
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight mt-1">
                Our Expert Dentists
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Meet the verified professionals behind your healthy, confident smile.
              </p>
            </div>

            <button
              onClick={() => onNavigate('about', 'doctors')}
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-card transition-all flex flex-col group"
              >
                <div className="aspect-square overflow-hidden bg-slate-100 relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1528] text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded shadow-2xs">
                    {doctor.experience}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display font-bold text-slate-900 text-xl group-hover:text-sky-700 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mt-0.5">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setFormDoctor(doctor.id);
                        scrollToSection('book');
                      }}
                      className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
                    >
                      Book with {doctor.name.split(' ')[0]}
                    </button>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0B1528] text-slate-600 group-hover:text-amber-400 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION G: CLINIC TOUR
      ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-100" id="clinic-tour">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
              Virtual Walkthrough · Riffa Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight">
              Welcome Inside Dental Zone
            </h2>
            <p className="text-sm text-slate-500">
              Take a visual tour of our reception lounge, sterilization suites, and operatory rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-900 relative group aspect-video">
              <img
                src={IMAGES.clinicInterior}
                alt="Dental Zone reception and operatory suites"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  Road No. 977 · Riffa, Bahrain
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold mt-1">
                  Pristine Infection Control & Memory-Foam Ergonomics
                </h3>
                <p className="text-xs text-slate-200 mt-1 max-w-xl">
                  Engineered with quiet German dental units, advanced HEPA filtration, and private treatment suites designed for patient tranquility and dignity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Shield className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Class-B Vacuum Autoclave</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Exceeding Bahrain NHRA infection control guidelines with validated multi-barrier sterilization.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Microscope className="w-5 h-5 text-sky-700 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">3D Digital Radiography</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Low-dose digital sensors and 3D intraoral mapping for precise, painless diagnoses.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Building2 className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Dedicated Parking</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Hassle-free parking right in front of the clinic on Road No. 977 in Riffa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION H: REAL TRANSFORMATIONS
      ============================================================== */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-100" id="transformations">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                Authentic Clinical Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight mt-1">
                Real Smile Transformations
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Drag the slider to compare before and after cosmetic treatment.
              </p>
            </div>

            <button
              onClick={() => onNavigate('treatments')}
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Aesthetic Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSFORMATIONS.map((trans) => (
              <BeforeAfterSlider
                key={trans.id}
                beforeImage={trans.beforeImage}
                afterImage={trans.afterImage}
                title={trans.title}
                treatment={trans.treatment}
                doctor={trans.doctor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION I: WHAT OUR PATIENTS SAY
      ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-100" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                Patient Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight mt-1">
                What Our Patients Say
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Real feedback from patients treated at Dental Zone Bahrain in Riffa.
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">{rev.author}</h4>
                    <p className="text-[11px] text-slate-400">{rev.treatment}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Verified Patient
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION J: BOOK YOUR APPOINTMENT
      ============================================================== */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80" id="book">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 overflow-hidden shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/4.5] rounded-2xl overflow-hidden shadow-soft border-2 border-slate-100 bg-slate-100">
                  <img
                    src={IMAGES.consultation}
                    alt="Doctor consulting patient at Dental Zone Bahrain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                    Direct Scheduling · Zero Popups
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0B1528] tracking-tight mt-1">
                    Book Your Appointment
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below. We will confirm your date and time promptly via phone or WhatsApp.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-50/60 rounded-xl border border-emerald-200 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Appointment Request Received!</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-slate-900">{formName}</span>. Our clinic desk at Dental Zone (Riffa) will contact you at <span className="font-semibold text-slate-900">{formPhone}</span>.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-3">
                      <a
                        href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(`Hello Dental Zone! I requested an appointment for ${formName} (${formPhone}) on ${formDate || 'soon'}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Send Instant WhatsApp Note
                      </a>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleInlineBook} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="+973 XXXXXXXX"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Select Service *
                        </label>
                        <select
                          value={formService}
                          onChange={(e) => setFormService(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white"
                        >
                          {TREATMENTS.map((t) => (
                            <option key={t.id} value={t.id}>
                              {t.title}
                            </option>
                          ))}
                          <option value="routine-checkup">Routine Cleaning & Checkup</option>
                          <option value="whitening">Laser Whitening</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Doctor
                        </label>
                        <select
                          value={formDoctor}
                          onChange={(e) => setFormDoctor(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white"
                        >
                          {DOCTORS.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.name} ({d.specialty.split(',')[0]})
                            </option>
                          ))}
                          <option value="any">First Available Specialist</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formDate}
                          onChange={(e) => setFormDate(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Time
                        </label>
                        <select
                          value={formTime}
                          onChange={(e) => setFormTime(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white"
                        >
                          <option value="morning">Morning (9:00 AM – 1:00 PM)</option>
                          <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                          <option value="evening">Evening (5:00 PM – 10:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Dental Concern or Message (Optional)
                      </label>
                      <input
                        type="text"
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        placeholder="e.g. Inquiring about composite veneers consultation"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-elevated flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                      >
                        <span>Confirm Appointment Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Quick & Easy Booking</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>No Waiting</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Expert Care</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          SECTION K: FAQ
      ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-100" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
              Helpful Information
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500">
              Quick, verified answers to questions common to our patients in Bahrain.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-serif-display font-bold text-slate-900 text-base hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 text-slate-500 shadow-2xs">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
