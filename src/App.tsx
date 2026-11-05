/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

type Page = 'home' | 'treatments' | 'about' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavigate = (page: Page, sectionId?: string) => {
    setActivePage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleDirectBook = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId);
    if (activePage === 'home') {
      const el = document.getElementById('book');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      handleNavigate('home', 'book');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Top Navbar with HD Background & Official Logo */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {activePage === 'treatments' && (
          <TreatmentsPage
            initialTreatmentId={selectedTreatmentId}
            onOpenBooking={handleDirectBook}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onOpenBooking={handleDirectBook} />
        )}

        {activePage === 'contact' && (
          <ContactPage onOpenBooking={() => handleDirectBook()} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleDirectBook()}
      />

      {/* Floating Fast-Access Pill for WhatsApp & Direct Booking */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dental Zone Bahrain! I would like to inquire about dental treatments and appointments.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-elevated flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
          aria-label="Chat on WhatsApp with Dental Zone Bahrain"
          title="Chat with clinic on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <button
          onClick={() => handleDirectBook()}
          className="hidden sm:flex items-center gap-2 px-4 py-3 bg-[#0B1528] hover:bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-full shadow-elevated transition-all hover:scale-102 active:scale-98 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
}
