import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { DentalZoneLogo } from './DentalZoneLogo';

interface NavbarProps {
  activePage: 'home' | 'treatments' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'treatments' | 'about' | 'contact', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'treatments' | 'about' | 'contact') => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleBookAppointmentClick = () => {
    if (activePage === 'home') {
      const el = document.getElementById('book');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      onNavigate('home', 'book');
    }
    setMobileMenuOpen(false);
  };

  const navLinks: { label: string; page: 'home' | 'treatments' | 'about' | 'contact' }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Treatments', page: 'treatments' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1528]/95 backdrop-blur-md border-b border-slate-800 shadow-elevated py-3 fixed top-0'
            : 'bg-transparent py-4 sm:py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-8 flex items-center justify-between gap-2 sm:gap-6">
          {/* Official Brand Logo (Compact on mobile) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none cursor-pointer group shrink-0"
          >
            <DentalZoneLogo size="sm" variant="white" className="sm:hidden" />
            <DentalZoneLogo size="md" variant="white" className="hidden sm:flex" />
          </button>

          {/* Transparent Header Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-amber-400 font-bold'
                      : 'text-white/90 hover:text-white drop-shadow-xs'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Responsive CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleBookAppointmentClick}
              className="px-3.5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-[11px] sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-soft transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 active:scale-[0.98]"
            >
              <span>Book</span>
              <span className="hidden sm:inline">Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-white hover:bg-white/10 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B1528]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 shadow-2xl space-y-4 animate-fadeIn text-white">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left py-2.5 text-sm uppercase tracking-wider font-semibold border-b border-slate-800/80 transition-colors ${
                    activePage === link.page ? 'text-amber-400 font-bold' : 'text-slate-200'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleBookAppointmentClick}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold uppercase tracking-wider rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
