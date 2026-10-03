import React from 'react';

interface OrqomiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  className?: string;
  inverted?: boolean;
}

export const OrqomiLogo: React.FC<OrqomiLogoProps> = ({
  size = 'md',
  showWordmark = true,
  className = '',
  inverted = false
}) => {
  const pixelSizes = {
    sm: { emblem: 24, font: 'text-base', gap: 'gap-2' },
    md: { emblem: 30, font: 'text-xl', gap: 'gap-2.5' },
    lg: { emblem: 44, font: 'text-2xl', gap: 'gap-3' },
    xl: { emblem: 60, font: 'text-4xl', gap: 'gap-4' }
  }[size];

  const primaryColor = inverted ? '#0C0F14' : '#F6F4EF';
  const neutralAxisColor = inverted ? 'rgba(0,0,0,0.18)' : '#241447';
  const tealIntelligence = '#24BDBA';
  const coralAction = '#FF6B45';

  return (
    <div className={`inline-flex items-center ${pixelSizes.gap} ${className}`}>
      {/* Precision Master Emblem: Teal (Intelligence) + Coral (Action Signal) */}
      <div 
        className="relative shrink-0 flex items-center justify-center select-none"
        style={{ width: pixelSizes.emblem, height: pixelSizes.emblem }}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full overflow-visible"
          fill="none"
        >
          {/* Orchestration Indigo Coordinate Ring with dashed ticks */}
          <circle cx="50" cy="50" r="42" stroke={neutralAxisColor} strokeWidth="1.2" />
          <circle cx="50" cy="50" r="42" stroke={tealIntelligence} strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.7" />
          <line x1="50" y1="4" x2="50" y2="96" stroke={neutralAxisColor} strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="4" y1="50" x2="96" y2="50" stroke={neutralAxisColor} strokeWidth="0.8" strokeDasharray="3 3" />
          
          {/* Top-Left Arc in Warm Ivory */}
          <path 
            d="M 17 50 A 40 40 0 0 1 50 10" 
            stroke={primaryColor} 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          <circle cx="50" cy="10" r="3" fill={tealIntelligence} />

          {/* Bottom-Right Arc in Warm Ivory */}
          <path 
            d="M 50 90 A 40 40 0 0 0 90 50" 
            stroke={primaryColor} 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          <circle cx="90" cy="50" r="3.5" fill={primaryColor} />

          {/* 45° Kinetic Intercept Vector in Signal Coral (#FF6B45): Action in Motion */}
          <line 
            x1="26" 
            y1="74" 
            x2="74" 
            y2="26" 
            stroke={coralAction} 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
          <circle cx="26" cy="74" r="3.5" fill="#55DAD5" />
          <circle cx="74" cy="26" r="4.5" fill={coralAction} />

          {/* Central Master Aperture (Intelligence Hub) */}
          <circle cx="50" cy="50" r="10" fill={tealIntelligence} />
          <circle cx="50" cy="50" r="4.5" fill={inverted ? '#F6F4EF' : '#0C0F14'} />
        </svg>
      </div>

      {/* Typographic Wordmark in Space Grotesk with Coral 45° Slash on Q */}
      {showWordmark && (
        <span 
          className={`font-bold tracking-[0.08em] uppercase ${pixelSizes.font} font-['Space_Grotesk'] leading-none flex items-center`}
          style={{ color: primaryColor }}
        >
          <span>OR</span>
          <span className="relative inline-block mx-[0.5px]">
            Q
            <span 
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-0.5 bg-[#FF6B45] rotate-45 transform origin-left rounded-xs shadow-xs" 
              aria-hidden="true"
            />
          </span>
          <span>OMI</span>
        </span>
      )}
    </div>
  );
};
