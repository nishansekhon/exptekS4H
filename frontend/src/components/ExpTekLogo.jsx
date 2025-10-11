import React from 'react';

const ExpTekLogo = ({ className = "", size = "default", variant = "primary" }) => {
  // Size variants for responsive design
  const sizes = {
    small: { height: 32, width: 'auto' },
    default: { height: 40, width: 'auto' },
    large: { height: 48, width: 'auto' },
    xlarge: { height: 60, width: 'auto' }
  };

  const currentSize = sizes[size] || sizes.default;

  // Logo variants - use the clean blue logo for better web display
  const logoSrc = variant === "expert" 
    ? "https://customer-assets.emergentagent.com/job_finance-activate/artifacts/kbupqer4_ExpTek%20Expert%20Logo.png"
    : "https://customer-assets.emergentagent.com/job_finance-activate/artifacts/upc5tjj3_ExpTek%20Logo.jpeg";

  return (
    <div 
      className={`exptek-logo inline-flex items-center cursor-pointer transition-all duration-300 ease-in-out ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.filter = 'brightness(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      <img 
        src={logoSrc}
        alt="ExpTek - SAP S/4HANA Public Cloud Finance Experts"
        className="transition-all duration-300 object-contain"
        style={{
          height: `${currentSize.height}px`,
          width: currentSize.width,
          maxWidth: '200px' // Prevent oversized logos
        }}
        onError={(e) => {
          // Fallback to text logo if image fails to load
          e.target.style.display = 'none';
          const fallback = document.createElement('span');
          fallback.className = 'text-2xl font-bold text-blue-600';
          fallback.textContent = 'ExpTek';
          e.target.parentNode.appendChild(fallback);
        }}
      />
      
      {/* Optional tagline for expert variant */}
      {variant === "expert" && size === "large" && (
        <div className="ml-3 flex flex-col text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold">SAP S/4HANA</span>
          <span className="text-xs">Public Cloud Experts</span>
        </div>
      )}
    </div>
  );
};

export default ExpTekLogo;