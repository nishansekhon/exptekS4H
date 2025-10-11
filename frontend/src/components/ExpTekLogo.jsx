import React from 'react';

const ExpTekLogo = ({ className = "", size = "default", variant = "primary" }) => {
  // Size variants for responsive design
  const sizes = {
    small: { 
      fontSize: 20, 
      taglineSize: 7, 
      squareSize: 6, 
      spacing: 1.5,
      height: 32 
    },
    default: { 
      fontSize: 28, 
      taglineSize: 9, 
      squareSize: 8, 
      spacing: 2,
      height: 40 
    },
    large: { 
      fontSize: 36, 
      taglineSize: 11, 
      squareSize: 10, 
      spacing: 2.5,
      height: 50 
    },
    xlarge: { 
      fontSize: 44, 
      taglineSize: 13, 
      squareSize: 12, 
      spacing: 3,
      height: 60 
    }
  };

  const currentSize = sizes[size] || sizes.default;

  // Render horizontal version with tagline
  if (variant === "horizontal") {
    return (
      <div 
        className={`exptek-logo-horizontal inline-flex items-center cursor-pointer transition-all duration-300 ease-in-out ${className}`}
        style={{ height: `${currentSize.height}px` }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div className="flex items-center space-x-8">
          {/* Logo Section */}
          <div className="logo-section">
            <div 
              className="brand-name"
              style={{
                fontSize: `${currentSize.fontSize}px`,
                fontWeight: 900,
                letterSpacing: `${currentSize.spacing}px`,
                lineHeight: 1,
                fontFamily: "'Arial Black', 'Helvetica', sans-serif",
              }}
            >
              <span 
                className="exp"
                style={{
                  background: 'linear-gradient(90deg, #0A6ED1 0%, #0066cc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Exp
              </span>
              <span 
                className="tek"
                style={{ color: '#1e3a5f' }}
              >
                TEK
              </span>
            </div>
            <div 
              className="brand-tagline flex items-center gap-2 mt-1"
            >
              <div className="squares flex gap-1">
                <div 
                  className="square"
                  style={{
                    width: `${currentSize.squareSize}px`,
                    height: `${currentSize.squareSize}px`,
                    background: '#1e3a5f',
                    display: 'inline-block'
                  }}
                />
                <div 
                  className="square"
                  style={{
                    width: `${currentSize.squareSize}px`,
                    height: `${currentSize.squareSize}px`,
                    background: '#0A6ED1',
                    display: 'inline-block'
                  }}
                />
              </div>
              <span 
                className="tagline-text"
                style={{
                  fontSize: `${currentSize.taglineSize}px`,
                  letterSpacing: `${currentSize.spacing}px`,
                  color: '#1e3a5f',
                  fontWeight: 400,
                  fontFamily: "'Arial', sans-serif"
                }}
              >
                EXPLORE TEK
              </span>
            </div>
          </div>
          
          {/* Tagline Section - Only for large sizes */}
          {size === 'large' || size === 'xlarge' ? (
            <div className="tagline-section text-left">
              <div 
                className="tagline-large"
                style={{
                  fontSize: `${currentSize.fontSize * 0.6}px`,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: '#1e3a5f',
                  lineHeight: 1.1
                }}
              >
                SAP S/4HANA
              </div>
              <div 
                className="tagline-medium"
                style={{
                  fontSize: `${currentSize.fontSize * 0.45}px`,
                  fontWeight: 600,
                  letterSpacing: '1px',
                  color: '#0A6ED1',
                  lineHeight: 1
                }}
              >
                PUBLIC CLOUD
              </div>
              <div 
                className="tagline-medium"
                style={{
                  fontSize: `${currentSize.fontSize * 0.45}px`,
                  fontWeight: 600,
                  letterSpacing: '1px',
                  color: '#0A6ED1',
                  lineHeight: 1
                }}
              >
                EXPERTS
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // Main logo version (default)
  return (
    <div 
      className={`exptek-logo-modern inline-flex items-center cursor-pointer transition-all duration-300 ease-in-out ${className}`}
      style={{ height: `${currentSize.height}px` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.filter = 'brightness(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      <div className="exptek-brand">
        <div 
          className="brand-name"
          style={{
            fontSize: `${currentSize.fontSize}px`,
            fontWeight: 900,
            letterSpacing: `${currentSize.spacing}px`,
            lineHeight: 1,
            fontFamily: "'Arial Black', 'Helvetica', sans-serif",
          }}
        >
          <span 
            className="exp"
            style={{
              background: 'linear-gradient(90deg, #0A6ED1 0%, #0066cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Exp
          </span>
          <span 
            className="tek"
            style={{ color: '#1e3a5f' }}
          >
            TEK
          </span>
        </div>
        
        <div 
          className="brand-tagline flex items-center gap-2 mt-1"
        >
          <div className="squares flex gap-1">
            <div 
              className="square"
              style={{
                width: `${currentSize.squareSize}px`,
                height: `${currentSize.squareSize}px`,
                background: '#1e3a5f',
                display: 'inline-block'
              }}
            />
            <div 
              className="square"
              style={{
                width: `${currentSize.squareSize}px`,
                height: `${currentSize.squareSize}px`,
                background: '#0A6ED1',
                display: 'inline-block'
              }}
            />
          </div>
          <span 
            className="tagline-text"
            style={{
              fontSize: `${currentSize.taglineSize}px`,
              letterSpacing: `${currentSize.spacing}px`,
              color: '#1e3a5f',
              fontWeight: 400,
              fontFamily: "'Arial', sans-serif"
            }}
          >
            EXPLORE TEK
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpTekLogo;