import React from 'react';

const ExpTekLogo = ({ className = "", size = "default" }) => {
  // Size variants
  const sizes = {
    small: { width: 100, height: 36, fontSize: 16, padding: "6px 14px" },
    default: { width: 140, height: 50, fontSize: 24, padding: "8px 20px" },
    large: { width: 180, height: 64, fontSize: 32, padding: "12px 26px" }
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div 
      className={`exptek-logo inline-flex items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0A6ED1 0%, #0056b3 100%)',
        border: '3px solid rgba(255, 255, 255, 0.9)',
        borderRadius: '6px',
        padding: currentSize.padding,
        boxShadow: '0 4px 12px rgba(10, 110, 209, 0.25), 0 2px 4px rgba(0, 0, 0, 0.1)',
        width: currentSize.width,
        height: currentSize.height,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-1px)';
        e.target.style.boxShadow = '0 6px 16px rgba(10, 110, 209, 0.35), 0 4px 8px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 12px rgba(10, 110, 209, 0.25), 0 2px 4px rgba(0, 0, 0, 0.1)';
      }}
    >
      <span 
        className="logo-text font-bold tracking-wide"
        style={{
          color: 'white',
          fontSize: `${currentSize.fontSize}px`,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
          fontWeight: '700',
          letterSpacing: '0.5px',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        ExpTek
      </span>
    </div>
  );
};

// Alternative SVG version for more control
export const ExpTekLogoSVG = ({ width = 140, height = 50, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 140 50" 
      className={`exptek-logo-svg ${className}`}
      style={{ cursor: 'pointer' }}
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A6ED1" />
          <stop offset="100%" stopColor="#0056b3" />
        </linearGradient>
        <filter id="logoShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="rgba(10, 110, 209, 0.25)" />
        </filter>
      </defs>
      
      {/* Blue Rectangle Background with Gradient */}
      <rect 
        x="2" 
        y="2" 
        width="136" 
        height="46" 
        fill="url(#logoGradient)" 
        rx="6"
        filter="url(#logoShadow)"
      />
      
      {/* White Border */}
      <rect 
        x="2" 
        y="2" 
        width="136" 
        height="46" 
        fill="none" 
        stroke="rgba(255, 255, 255, 0.9)" 
        strokeWidth="3"
        rx="6"
      />
      
      {/* ExpTek Text */}
      <text 
        x="70" 
        y="33" 
        fill="white" 
        fontSize="24" 
        fontWeight="700" 
        fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif" 
        textAnchor="middle"
        letterSpacing="0.5px"
        style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
      >
        ExpTek
      </text>
    </svg>
  );
};

export default ExpTekLogo;