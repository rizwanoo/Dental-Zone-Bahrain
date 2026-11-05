import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Microscope,
  FileCheck
} from 'lucide-react';
import { CLINIC_INFO, IMAGES, DOCTORS } from '../data/clinicData';

interface AboutPageProps {
  onOpenBooking: (treatmentId?: string, doctorId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-white text-slate-800 pb-20">
      {/* Editorial Hero */}
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
            About Dental Zone Bahrain · منطقة الأسنان
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-display font-bold text-white tracking-tight mt-2">
            Pioneering Gentle Dentistry & <br />
            <span className="text-amber-400 italic">Aesthetic Precision in Riffa</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Founded on the principle that dental care should be calm, transparent, and artfully tailored, Dental Zone brings together certified clinicians, modern technologies, and genuine empathy.
          </p>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
              Our Clinical Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight">
              Where Medical Integrity Meets Natural Aesthetics
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dental Zone was established in Riffa with a clear mission: to dismantle dental anxiety and provide the residents of the Kingdom of Bahrain with restorative treatments that respect the natural biology of teeth.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We reject one-size-fits-all procedures. Whether performing an intricate smile redesign with composite veneers or placing a precision dental implant, our team designs each treatment to balance long-term oral health, optimal chewing mechanics, and authentic personal aesthetics.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Minimally Invasive Dentistry</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    We preserve maximum natural tooth enamel by prioritizing biomimetic bonding over irreversible crowns wherever clinically viable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Strict Zero-Fear Protocol</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Topical desensitization, gentle micro-injections, and unhurried doctor consultations ensure you feel completely at ease.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Bahrain NHRA Accredited</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fully certified medical professionals registered with the National Health Regulatory Authority (NHRA) of Bahrain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-100 relative group">
              <img
                src={IMAGES.clinicInterior}
                alt="Dental Zone reception and operatory suites in Riffa"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold tracking-wider uppercase text-amber-400">
                  Riffa Medical Facility · Road 977
                </span>
                <h4 className="text-lg font-serif-display font-bold">
                  Designed for Peace of Mind
                </h4>
                <p className="text-xs text-slate-200 mt-1">
                  Private operatory suites, quiet ambient lighting, and dedicated patient parking in East Riffa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors Detailed Profiles */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-20" id="doctors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
              Our Medical Practitioners
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight">
              Meet Our Specialist Dentists
            </h2>
            <p className="text-sm text-slate-500">
              Passionate healthcare practitioners dedicated to clinical excellence and compassionate patient care in Bahrain.
            </p>
          </div>

          <div className="space-y-12">
            {DOCTORS.map((doctor, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={doctor.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft p-6 sm:p-8 lg:p-10"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`lg:col-span-4 ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-soft border-2 border-white bg-slate-100">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className={`lg:col-span-8 space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-slate-900">
                            {doctor.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-amber-700 mt-0.5">
                            {doctor.title}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-[#0B1528] bg-amber-100 px-3 py-1 rounded-md">
                          {doctor.experience}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <p>{doctor.bio}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                        <div>
                          <span className="font-bold text-slate-700 block">Primary Specialization:</span>
                          <span className="text-slate-500">{doctor.specialty}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-700 block">Advanced Credentials:</span>
                          <span className="text-slate-500">{doctor.education}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => onOpenBooking(undefined, doctor.id)}
                          className="px-5 py-2.5 bg-[#0B1528] hover:bg-slate-900 text-amber-300 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>Request Consultation with {doctor.name.split(' ')[0]}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hospital-Grade Sterilization & Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
            Infection Control & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#0B1528] tracking-tight">
            Our Medical Sterilization Standards
          </h2>
          <p className="text-sm text-slate-500">
            At Dental Zone, patient safety is absolute. Our sterilization room operates on a verified multi-barrier cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display font-bold text-slate-900 text-base">
              Class-B Vacuum Autoclaves
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every reusable instrument undergoes ultrasonic enzymatic washing followed by medical vacuum autoclaving at 134°C with chemical indicator verification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display font-bold text-slate-900 text-base">
              Biological Spore Testing
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Routine biological spore monitoring tests ensure our sterilization autoclaves operate at 100% lethality against all bacterial, viral, and fungal pathogens.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display font-bold text-slate-900 text-base">
              Air & Waterline Filtration
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Medical HEPA air purification systems and sterile distilled waterline disinfectant systems protect the operatory room between every patient visit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
