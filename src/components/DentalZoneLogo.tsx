import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const DentalZoneLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = true,
  size = 'md'
}) => {
  const isWhite = variant === 'white';

  const sizeClasses = {
    sm: { icon: 'w-8 h-8', title: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-10 h-10', title: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', title: 'text-2xl', sub: 'text-xs' }
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Dental Zone Brand Icon Image */}
      <div className={`relative ${sizeClasses.icon} rounded-xl overflow-hidden shadow-sm shrink-0 border border-amber-500/30 bg-[#0B1528]`}>
        <img
          src="/assets/brand/dental_zone_official_logo.jpg"
          alt="Dental Zone Bahrain Official Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Typography Brand Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-serif-display font-bold tracking-tight ${sizeClasses.title} ${
              isWhite ? 'text-white' : 'text-[#0B1528]'
            }`}
          >
            Dental <span className="font-sans font-extrabold text-amber-500 tracking-wider">ZONE</span>
          </span>
          <span
            className={`text-xs font-semibold tracking-normal font-sans ${
              isWhite ? 'text-amber-200/90' : 'text-slate-500'
            }`}
          >
            منطقة الأسنان
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`tracking-widest uppercase font-semibold mt-1 ${sizeClasses.sub} ${
              isWhite ? 'text-amber-300/80' : 'text-amber-700/90'
            }`}
          >
            Bahrain · Riffa
          </span>
        )}
      </div>
    </div>
  );
};
