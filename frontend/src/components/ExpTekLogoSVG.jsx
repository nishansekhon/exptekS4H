import React from 'react';

const ExpTekLogoSVG = ({ className = "", size = "default", variant = "primary" }) => {
  // Size variants for responsive design
  const sizes = {
    small: { width: 120, height: 32 },
    default: { width: 160, height: 40 },
    large: { width: 200, height: 50 },
    xlarge: { width: 240, height: 60 }
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div 
      className={`exptek-logo-svg cursor-pointer transition-all duration-300 ease-in-out ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.filter = 'brightness(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      <svg 
        width={currentSize.width} 
        height={currentSize.height} 
        viewBox={`0 0 ${currentSize.width} ${currentSize.height}`} 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300"
      >
        <defs>
          {/* Blue gradient for "Exp" */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#0A6ED1', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#0066cc', stopOpacity: 1}} />
          </linearGradient>
          
          {/* Dark navy for "TEK" */}
          <linearGradient id="navyColor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#1e3a5f', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        
        {/* Main ExpTek Text */}
        <g className="main-text">
          {/* "Exp" part with gradient */}
          <text 
            x="4" 
            y={currentSize.height * 0.55} 
            fill="url(#blueGradient)" 
            fontSize={currentSize.height * 0.6} 
            fontWeight="900" 
            fontFamily="'Arial Black', 'Helvetica', sans-serif"
            letterSpacing="1"
          >
            Exp
          </text>
          
          {/* "TEK" part in navy */}
          <text 
            x={currentSize.width * 0.42} 
            y={currentSize.height * 0.55} 
            fill="#1e3a5f" 
            fontSize={currentSize.height * 0.6} 
            fontWeight="900" 
            fontFamily="'Arial Black', 'Helvetica', sans-serif"
            letterSpacing="1"
          >
            TEK
          </text>
        </g>
        
        {/* Brand elements - squares and tagline */}
        <g className="brand-elements">
          {/* Two small squares */}
          <rect 
            x="4" 
            y={currentSize.height * 0.7} 
            width={currentSize.height * 0.2} 
            height={currentSize.height * 0.2} 
            fill="#1e3a5f" 
          />
          <rect 
            x={4 + (currentSize.height * 0.25)} 
            y={currentSize.height * 0.7} 
            width={currentSize.height * 0.2} 
            height={currentSize.height * 0.2} 
            fill="#0A6ED1" 
          />
          
          {/* EXPLORE TEK tagline */}
          <text 
            x={4 + (currentSize.height * 0.5)} 
            y={currentSize.height * 0.85} 
            fill="#1e3a5f" 
            fontSize={currentSize.height * 0.22} 
            fontWeight="400" 
            fontFamily="'Arial', sans-serif"
            letterSpacing="2"
          >
            EXPLORE TEK
          </text>
        </g>
        
        {/* Horizontal variant with tagline */}
        {variant === "horizontal" && (
          <g className="horizontal-tagline">
            {/* SAP S/4HANA */}
            <text 
              x={currentSize.width * 0.75} 
              y={currentSize.height * 0.35} 
              fill="#1e3a5f" 
              fontSize={currentSize.height * 0.28} 
              fontWeight="700" 
              fontFamily="'Arial', sans-serif"
              letterSpacing="1"
            >
              SAP S/4HANA
            </text>
            
            {/* PUBLIC CLOUD */}
            <text 
              x={currentSize.width * 0.75} 
              y={currentSize.height * 0.55} 
              fill="#0A6ED1" 
              fontSize={currentSize.height * 0.22} 
              fontWeight="600" 
              fontFamily="'Arial', sans-serif"
              letterSpacing="1"
            >
              PUBLIC CLOUD
            </text>
            
            {/* EXPERTS */}
            <text 
              x={currentSize.width * 0.75} 
              y={currentSize.height * 0.75} 
              fill="#0A6ED1" 
              fontSize={currentSize.height * 0.22} 
              fontWeight="600" 
              fontFamily="'Arial', sans-serif"
              letterSpacing="1"
            >
              EXPERTS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default ExpTekLogoSVG;