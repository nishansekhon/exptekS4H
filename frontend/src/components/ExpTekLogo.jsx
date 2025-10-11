import React from 'react';

const ExpTekLogo = ({ className = "", size = "default" }) => {
  // Size variants for responsive design
  const sizes = {
    small: { fontSize: 24 },
    default: { fontSize: 28 },
    large: { fontSize: 32 }
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div 
      className={`exptek-logo-text inline-flex items-center cursor-pointer transition-all duration-300 ease-in-out ${className}`}
      style={{
        fontSize: `${currentSize.fontSize}px`,
        fontWeight: '700',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        letterSpacing: '-0.5px',
        lineHeight: '1',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
      }}
    >
      <span 
        className="logo-exp transition-colors duration-300"
        style={{
          color: '#0A6ED1', // SAP Blue
        }}
      >
        Exp
      </span>
      <span 
        className="logo-tek transition-colors duration-300"
        style={{
          color: '#60d5ff', // Cyan accent
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#0A6ED1';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#60d5ff';
        }}
      >
        Tek
      </span>
    </div>
  );
};

export default ExpTekLogo;