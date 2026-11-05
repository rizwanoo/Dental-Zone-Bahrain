import React, { useState } from 'react';
import {
  Clock,
  Shield,
  CheckCircle2,
  Calendar,
  Activity,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { TREATMENTS, IMAGES } from '../data/clinicData';

interface TreatmentsPageProps {
  initialTreatmentId?: string;
  onOpenBooking: (treatmentId?: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTreatmentId, setExpandedTreatmentId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'Aesthetic Dentistry', label: 'Cosmetic & Veneers' },
    { id: 'Implantology', label: 'Dental Implants' },
    { id: 'Orthodontics', label: 'Orthodontics & Aligners' },
    { id: 'General Care', label: 'General & Preventive' }
  ];

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === selectedCategory);

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
            Clinical Portfolio · Dental Zone Bahrain
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-display font-bold text-white tracking-tight mt-2">
            Comprehensive Treatments & <br />
            <span className="text-amber-400 italic">Aesthetic Smile Design</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Every procedure at Dental Zone is performed with minimal discomfort, state-of-the-art materials, and strict adherence to Bahrain NHRA healthcare standards.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-soft'
                    : 'bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="space-y-16">
          {filteredTreatments.map((treatment, idx) => {
            const isReversed = idx % 2 === 1;
            const isExpanded = expandedTreatmentId === treatment.id;

            return (
              <div
                key={treatment.id}
                id={treatment.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft p-6 sm:p-8 lg:p-10 transition-all hover:shadow-card"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Frame */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-soft relative group">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B1528] text-amber-300 text-[11px] font-bold px-3 py-1 rounded-md shadow-2xs">
                        {treatment.category}
                      </div>
                    </div>
                  </div>

                  {/* Content & Clinical Specs */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-slate-900">
                        {treatment.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-amber-700 font-semibold mt-1">
                        {treatment.shortDesc}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {treatment.fullDesc}
                    </p>

                    {/* Quick Specs Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 border-y border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{treatment.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{treatment.anesthesia}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{treatment.recovery}</span>
                      </div>
                    </div>

                    {/* Key Clinical Benefits */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Key Clinical Advantages:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {treatment.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* In-page Expandable Procedure Steps */}
                    {isExpanded && (
                      <div className="pt-2 animate-fadeIn">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Detailed Procedure Steps:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                          {treatment.procedureSteps.map((step, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                              <span className="font-bold text-[#0B1528] block mb-0.5">
                                0{sIdx + 1}. {step.title}
                              </span>
                              <span className="text-slate-500 text-[11px] leading-relaxed block">
                                {step.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onOpenBooking(treatment.id)}
                        className="px-6 py-3 bg-[#0B1528] hover:bg-slate-900 text-amber-300 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>Book This Treatment</span>
                      </button>

                      <button
                        onClick={() => setExpandedTreatmentId(isExpanded ? null : treatment.id)}
                        className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? 'Hide Steps' : 'View Procedure Steps'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Guide */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10 space-y-1">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
              Informed Patient Choices
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0B1528]">
              Treatment Comparison at Dental Zone
            </h3>
            <p className="text-xs text-slate-500">
              Understanding which restorative or cosmetic path matches your clinical needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#0B1528] text-white font-serif-display uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 font-bold text-amber-400">Treatment</th>
                    <th className="py-3.5 px-4 font-bold">Primary Goal</th>
                    <th className="py-3.5 px-4 font-bold">Invasiveness</th>
                    <th className="py-3.5 px-4 font-bold">Appointments</th>
                    <th className="py-3.5 px-4 font-bold">Typical Lifespan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/60">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Composite Veneers</td>
                    <td className="py-3.5 px-4">Instant aesthetic smile redesign</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-semibold">Minimally invasive (no enamel shaved)</td>
                    <td className="py-3.5 px-4">1 – 2 Visits</td>
                    <td className="py-3.5 px-4">5 – 8+ Years with polish</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Dental Implants</td>
                    <td className="py-3.5 px-4">Permanent replacement of lost tooth</td>
                    <td className="py-3.5 px-4 text-sky-700 font-semibold">Guided titanium fixture surgery</td>
                    <td className="py-3.5 px-4">3 – 4 Visits (healing phase)</td>
                    <td className="py-3.5 px-4">Lifetime with hygiene</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Clear Aligners</td>
                    <td className="py-3.5 px-4">Straighten crowded or spaced teeth</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-semibold">Non-invasive removable trays</td>
                    <td className="py-3.5 px-4">Checkup every 6 weeks</td>
                    <td className="py-3.5 px-4">Permanent with retainers</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="py-3.5 px-4 font-bold text-slate-900">In-Clinic Whitening</td>
                    <td className="py-3.5 px-4">Brighten teeth by 4–8 shades</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-semibold">Non-invasive laser therapy</td>
                    <td className="py-3.5 px-4">Single 60-min session</td>
                    <td className="py-3.5 px-4">12 – 24 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
