import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black py-20 relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-500/8 to-amber-600/8 rounded-full blur-3xl animate-float-large" style={{top: '10%', left: '5%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-2xl animate-float-large delay-4000" style={{bottom: '10%', right: '5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/6 to-amber-400/6 rounded-full blur-xl animate-pulse-slow" style={{top: '50%', right: '20%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/8 to-red-400/8 rounded-full blur-lg animate-pulse-slow delay-2500" style={{bottom: '40%', left: '15%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-yellow-400/8 rounded-full animate-spin-very-slow" style={{top: '25%', right: '15%'}} />
        <div className="absolute w-32 h-32 border border-amber-400/12 rotate-45 animate-ping-slow" style={{bottom: '35%', left: '20%'}} />
        <div className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400/15 to-transparent rounded-full animate-bounce-slow" style={{top: '65%', right: '25%'}} />
        <div className="absolute w-20 h-20 border-2 border-amber-300/10 rounded-lg rotate-12 animate-spin-slow" style={{top: '40%', left: '10%'}} />

        {/* Service-themed floating icons */}
        <div className="absolute text-5xl text-yellow-400/15 animate-float-gentle" style={{top: '20%', right: '25%'}}>📸</div>
        <div className="absolute text-4xl text-amber-400/12 animate-float-gentle delay-1500" style={{bottom: '25%', left: '12%'}}>🎬</div>
        <div className="absolute text-3xl text-yellow-300/10 animate-twinkle delay-3000" style={{top: '70%', left: '8%'}}>✨</div>
        <div className="absolute text-3xl text-amber-300/15 animate-bounce-slow delay-2000" style={{bottom: '15%', right: '18%'}}>🏠</div>
        <div className="absolute text-2xl text-yellow-400/20 animate-twinkle" style={{top: '80%', right: '12%'}}>⭐</div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/25 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/4 via-transparent to-amber-900/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-800/2 to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      </div>

      {/* Main Content */}
      <div
        className="max-w-7xl mx-auto px-4 py-10 relative z-10"
        data-aos="fade-right"
        data-aos-duration="1700"
      >
        
        {/* Enhanced Header Section */}
        <div
          className={`text-center mb-12 relative transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-aos="fade-right"
          data-aos-duration="1900"
        >
          
          {/* Decorative elements around header */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-500 animate-expand-line" />
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse-slow">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1" />
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-500 animate-expand-line delay-500" />
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className="relative inline-block mb-4">
            <h2 className="text-2xl font-satisfy text-yellow-500 relative group">
              <span className="relative z-10">Enjoy Our</span>
              
              {/* Text glow effect */}
              <div className="absolute inset-0 text-yellow-500 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Floating sparkle */}
              <div className="absolute -right-6 -top-2 text-lg animate-twinkle">✨</div>
            </h2>
            
            {/* Subtle underline */}
            <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 delay-800 ${
              isVisible ? 'w-full' : 'w-0'
            }`} />
          </div>

          {/* Enhanced Main Title */}
          <h1 className="text-5xl font-bold text-white mb-6 relative group">
            <span className="relative inline-block">
              <span className="relative z-10">
                Quality 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 ml-4">Services</span>
              </span>
              
              {/* Title shadow effect */}
              <div className="absolute inset-0 text-white blur-sm opacity-30 -z-10">
                Quality Services
              </div>
            </span>
            
            {/* Animated crown icon */}
            <div className="absolute -top-4 -right-8 text-3xl text-yellow-400 animate-bounce-slow">
              👑
            </div>
            
            {/* Enhanced underline */}
            <div className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 transition-all duration-1500 delay-1000 ${
              isVisible ? 'w-full' : 'w-0'
            }`} />
          </h1>

          {/* Enhanced Description */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background decoration for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent rounded-2xl blur-xl" />
            
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto relative z-10 leading-relaxed text-lg transition-colors duration-300 hover:text-gray-300">
              ROYFILMS specializes in real estate and commercial photography and
              videography, capturing properties and spaces with a natural,
              professional style that highlights their true potential. Whether
              you're selling a home, promoting a business, or showcasing a
              development, we deliver high-quality visuals that make a lasting
              impression. Our goal is to meet your exact needs with attention to
              detail, creativity, and a commitment to helping your space stand out
              in the best possible light.
            </p>

            {/* Highlight keywords with subtle animation */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-text-shimmer" />
            </div>
          </div>

          {/* Service highlights */}
          <div className={`flex flex-wrap justify-center gap-6 mt-8 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center space-x-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-yellow-300 text-sm font-medium">Real Estate Photography</span>
            </div>
            <div className="flex items-center space-x-2 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500" />
              <span className="text-amber-300 text-sm font-medium">Commercial Videography</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000" />
              <span className="text-yellow-300 text-sm font-medium">Professional Editing</span>
            </div>
          </div>

          {/* Statistics showcase */}
          <div className={`grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="text-center group">
              <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm text-gray-500 mt-1">Properties Captured</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-yellow-300 group-hover:scale-110 transition-transform duration-300">24h</div>
              <div className="text-sm text-gray-500 mt-1">Fast Delivery</div>
            </div>
          </div>
        </div>

        {/* Enhanced Empty Grid (keeping original structure) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-8 relative transition-all duration-1200 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-aos="fade-left"
          data-aos-duration="1900"
        >
          {/* Grid background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-3xl blur-2xl -m-8 opacity-50" />
          
          {/* Placeholder for future services - keeping empty as original */}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-500/15 to-amber-500/15 px-8 py-4 rounded-full border border-yellow-500/25 backdrop-blur-sm">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 font-semibold text-lg">Ready to showcase your property with professional quality?</span>
            <div className="text-3xl animate-bounce-slow">📸</div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(25px, -35px) rotate(3deg); }
          50% { transform: translate(-20px, -45px) rotate(-3deg); }
          75% { transform: translate(-30px, -25px) rotate(2deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.5) rotate(90deg); }
          50% { opacity: 0.8; transform: scale(0.7) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.4) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.4) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(10deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 3rem; }
        }
        
        @keyframes text-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float-large { animation: float-large 18s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 7s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 30s linear infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 2s ease-out forwards; }
        .animate-text-shimmer { animation: text-shimmer 4s linear infinite; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1px, transparent 0);
          background-size: 50px 50px;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}