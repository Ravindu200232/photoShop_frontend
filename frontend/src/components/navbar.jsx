import React, { useState, useEffect } from 'react';

// Mock icons since we can't import react-icons
const AiOutlineLogin = () => <span className="text-xl">👤</span>;
const AiOutlineShoppingCart = () => <span className="text-xl">🛒</span>;
const HiMenu = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <div className="w-6 h-0.5 bg-current mb-1 transition-all duration-300"></div>
    <div className="w-6 h-0.5 bg-current mb-1 transition-all duration-300"></div>
    <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
  </div>
);
const FaTimes = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <div className="w-6 h-0.5 bg-current rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    <div className="w-6 h-0.5 bg-current -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
  </div>
);

// Mock Link component
const Link = ({ to, children, onClick, className }) => (
  <a href={to} onClick={onClick} className={className}>
    {children}
  </a>
);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`w-full h-[80px] shadow-2xl flex justify-between items-center px-4 md:px-8 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden transition-all duration-500 ${scrolled ? 'backdrop-blur-lg bg-black/90' : ''}`}>
      
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-3 h-3 bg-yellow-500/20 rounded-full animate-pulse blur-sm" style={{top: '15%', left: '5%', animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse blur-sm" style={{top: '70%', left: '85%', animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute w-2.5 h-2.5 bg-yellow-500/15 rounded-full animate-pulse blur-sm" style={{top: '30%', left: '60%', animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse blur-sm" style={{top: '80%', left: '30%', animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute w-4 h-4 bg-yellow-500/10 rounded-full animate-pulse blur-md" style={{top: '50%', left: '20%', animationDelay: '1.5s', animationDuration: '6s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute w-16 h-16 border border-yellow-500/10 rotate-45 animate-spin-slow" style={{top: '10%', right: '15%'}}></div>
        <div className="absolute w-12 h-12 border border-white/5 rounded-full animate-float" style={{bottom: '20%', left: '10%'}}></div>
      </div>

      {/* Gradient overlay animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 opacity-0 animate-pulse-slow"></div>

      {/* Logo with enhanced effects */}
      <div className="flex items-center relative z-10">
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg scale-150 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-yellow-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
          <img
            src="/logo.png"
            alt="logo"
            className="w-[60px] h-[60px] rounded-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-yellow-500/30 relative z-10 border-2 border-transparent group-hover:border-yellow-500/50"
          />
          {/* Rotating ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Enhanced Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10 text-white relative z-10">
        {['Home', 'About', 'Gallery', 'Package',].map((item, index) => {
          const routes = ['/', '/contact', '/gallery', '/package',];
          return (
            <div key={item} className="relative group">
              <Link 
                to={routes[index]} 
                className="text-[18px] font-medium relative overflow-hidden transition-all duration-500 ease-out hover:text-yellow-500 py-3 px-4 block transform hover:scale-110"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 block tracking-wide">
                  {item}
                </span>
                
                {/* Multiple underline animations */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-white transition-all duration-700 group-hover:w-full"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/50 transition-all duration-500 delay-100 group-hover:w-full blur-sm"></div>
                
                {/* Enhanced background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-white/5 to-yellow-500/10 rounded-lg scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 -z-10 blur-sm"></div>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-100 -z-10"></div>
                
                {/* Particle burst on hover */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 blur-sm"></div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Enhanced Icons and User Info */}
      <div className="flex items-center space-x-6 text-white relative z-10">
        {/* Mobile Menu Button with advanced animation */}
        <div className="relative group md:hidden">
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 scale-0 group-hover:scale-150 transition-all duration-500 blur-md animate-pulse"></div>
          <HiMenu
            className="text-[30px] cursor-pointer transition-all duration-500 ease-out hover:text-yellow-500 hover:scale-125 relative z-10 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {/* Ripple effects */}
          <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-active:scale-200 transition-transform duration-300 opacity-60"></div>
          <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30 scale-0 group-hover:scale-100 transition-all duration-700 animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-10 text-white md:hidden transition-all duration-700 ease-out z-50 ${
          menuOpen 
            ? 'opacity-100 translate-x-0 visible' 
            : 'opacity-0 translate-x-full invisible'
        }`}
      >
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 border-2 border-yellow-500/10 rounded-full animate-spin-slow" style={{top: '5%', left: '5%', animationDuration: '25s'}}></div>
          <div className="absolute w-32 h-32 border border-white/5 rounded-full animate-spin-slow" style={{top: '60%', right: '5%', animationDuration: '20s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-24 h-24 border border-yellow-500/20 rotate-45 animate-pulse" style={{top: '20%', right: '20%', animationDuration: '4s'}}></div>
          
          {/* Floating particles */}
          <div className="absolute w-3 h-3 bg-yellow-500/30 rounded-full animate-float" style={{top: '30%', left: '20%'}}></div>
          <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-float" style={{top: '70%', left: '80%', animationDelay: '2s'}}></div>
          <div className="absolute w-4 h-4 bg-yellow-500/20 rounded-full animate-float" style={{bottom: '30%', left: '15%', animationDelay: '1s'}}></div>
        </div>

        {/* Enhanced Close Button */}
        <div className="absolute top-8 right-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 scale-0 group-hover:scale-200 transition-all duration-500 blur-lg"></div>
          <div className="absolute inset-0 rounded-full bg-red-500/30 scale-0 group-hover:scale-100 transition-all duration-300 animate-ping"></div>
          <FaTimes
            className="text-[30px] cursor-pointer transition-all duration-500 ease-out hover:text-yellow-500 hover:scale-125 hover:rotate-180 group-active:scale-95 relative z-10 p-2"
            onClick={handleMenuClose}
          />
          {/* Rotating border */}
          <div className="absolute inset-0 rounded-full border-2 border-yellow-500/50 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
        </div>

        {/* Enhanced mobile menu items */}
        {[
          { name: 'Home', route: '/' },
          { name: 'Contact', route: '/contact' },
          { name: 'Gallery', route: '/gallery' },
          { name: 'Packages', route: '/package' }
        ].map((item, index) => (
          <div 
            key={item.name}
            className={`relative group transition-all duration-700 ease-out ${
              menuOpen 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{transitionDelay: `${index * 0.15 + 0.3}s`}}
          >
            <Link
              to={item.route}
              className="text-[32px] font-bold relative overflow-hidden transition-all duration-500 ease-out hover:text-yellow-500 py-4 px-8 block transform hover:scale-110"
              onClick={handleMenuClose}
            >
              <span className="relative z-10 transition-all duration-500 group-hover:scale-110 block tracking-wider">
                {item.name}
              </span>
              
              {/* Enhanced mobile item background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-white/5 to-yellow-500/10 rounded-2xl scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 -z-10 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent rounded-2xl scale-0 transition-all duration-400 group-hover:scale-100 -z-10"></div>
              
              {/* Enhanced mobile item border with glow */}
              <div className="absolute inset-0 border-2 border-yellow-500/30 rounded-2xl scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 -z-10 shadow-lg shadow-yellow-500/20"></div>
              
              {/* Particle effects */}
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-yellow-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1/2 blur-sm animate-pulse"></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1/2 blur-sm animate-pulse delay-150"></div>
            </Link>
            
            {/* Enhanced connecting line animation */}
            <div className="absolute -bottom-5 left-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all duration-700 group-hover:w-32 transform -translate-x-1/2 blur-sm"></div>
            <div className="absolute -bottom-5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 delay-200 group-hover:w-24 transform -translate-x-1/2"></div>
          </div>
        ))}

        {/* Enhanced floating elements in mobile menu */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-6 opacity-40">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="relative"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-white rounded-full animate-bounce shadow-lg shadow-yellow-500/50"
                   style={{animationDelay: `${i * 0.3}s`, animationDuration: '2s'}}></div>
              <div className="absolute inset-0 bg-yellow-500/30 rounded-full animate-ping" 
                   style={{animationDelay: `${i * 0.3 + 1}s`, animationDuration: '3s'}}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Custom keyframes for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}