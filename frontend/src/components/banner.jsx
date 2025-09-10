import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(150, 40, 40, 0) 70%, rgba(2,2,2,0.7) 92%, black), url('./v23.jpg')",
          filter: "blur(2px) brightness(0.7)",
        }}
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-pulse-slow" style={{top: '10%', left: '5%'}} />
          <div className="absolute w-32 h-32 border border-white/10 rounded-full animate-spin-very-slow" style={{top: '60%', right: '10%'}} />
          <div className="absolute w-48 h-48 border border-orange-600/20 rounded-full animate-ping-slow" style={{bottom: '20%', left: '15%'}} />
        </div>

        {/* Gradient Overlay Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-30" />
      </div>

      {/* Content Container */}
      <div className="container absolute top-72 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Empty space on left side for larger screens */}
        <div className="hidden md:block"></div>

        {/* Content Section */}
        <div
          className={`text-white text-center md:text-left px-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-satisfy bg-gradient-to-r text-whit bg-clip-text leading-snug mb-6 relative overflow-hidden">
            <span 
              className={`inline-block transition-all duration-1200 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              Capturing the emotions
            </span>
            <br />
            <span 
              className={`inline-block transition-all duration-1200 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              of your special day
            </span>
            
            {/* Animated Underline */}
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-600 to-orange-300 transition-all duration-1500 delay-1000 ${
              isVisible ? 'w-full' : 'w-0'
            }`} />
          </h1>

          {/* Welcome Text with Animation */}
          <div className="mb-8">
            <span 
              className={`text-yellow-400 text-2xl font-bold inline-block transition-all duration-800 delay-700 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              Welcome to ROYFILMS
            </span>
            
            {/* Animated Sparkle Effect */}
            <div className="relative inline-block ml-2">
              <div className={`absolute w-2 h-2 bg-red-600 rounded-full animate-ping delay-1000 ${isVisible ? 'opacity-75' : 'opacity-0'}`} />
              <div className={`absolute w-1 h-1 bg-orange-600 rounded-full animate-pulse delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </div>

          {/* Description with Typewriter Effect */}
          <div 
            className={`text-base sm:text-lg font-bold mb-8 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-white bg-clip-text relative">
              "At ROYFILMS, we capture real estate and commercial spaces with
              stunning photography and videography. Whether you're a realtor or
              business owner, we deliver clean, standout visuals with creativity
              and care."
              
              {/* Text Highlight Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-text-shimmer opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </p>
          </div>

          {/* Enhanced Button with Complex Animations */}
          <div className={`transition-all duration-1200 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link to="/package">
              <button className="relative inline-block w-full sm:w-auto px-8 py-4 border-4 border-yellow-500 text-orange-300 font-semibold uppercase tracking-wider overflow-hidden group hover:text-black transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/25">
                {/* Original Background Animation */}
                <span className="absolute w-0 h-full bg-yellow-300 top-0 left-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
                
                {/* Additional Glow Effects */}
                <span className="absolute inset-0 bg-orange-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded z-0"></span>
                <span className="absolute inset-0 border border-orange-600/50 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 rounded z-0"></span>
                
                {/* Button Text */}
                <span className="relative z-10 font-bold flex items-center justify-center">
                  All Packages
                  
                  {/* Arrow Animation */}
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
              </button>
            </Link>
          </div>

          {/* Floating Social Proof Elements */}
          <div className="absolute -right-10 -top-10 opacity-20 pointer-events-none">
            <div className="animate-bounce-slow delay-2000">
              <div className="w-16 h-16 border border-orange-600/30 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-xs font-bold">4.9★</span>
              </div>
            </div>
          </div>

          <div className="absolute -left-8 top-20 opacity-20 pointer-events-none">
            <div className="animate-float delay-1500">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">📸</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes text-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s linear infinite; }
        .animate-text-shimmer { animation: text-shimmer 2s linear; }
        .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}