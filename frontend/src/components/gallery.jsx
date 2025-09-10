import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import wedding1 from "/g1.jpg";
import wedding2 from "/g2.jpg";
import wedding3 from "/g3.jpg";
import wedding4 from "/g4.jpg";
import wedding6 from "/g6.jpg";
import wedding8 from "/g9.jpg";

export function SmallGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1900 });
    setIsVisible(true);
  }, []);

  const images = [
    { src: wedding1, anim: "fade-right" },
    { src: wedding4, anim: "fade-right" },
    { src: wedding3, anim: "fade-up" },
    { src: wedding2, anim: "fade-down" },
    { src: wedding6, anim: "fade-up" },
    { src: wedding8, anim: "fade-down" },
  ];

  return (
    <div className="w-full px-4 py-10 bg-black relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-500/6 to-blue-600/6 rounded-full blur-3xl animate-float-large" style={{top: '15%', left: '10%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-pink-500/8 to-purple-600/8 rounded-full blur-2xl animate-float-large delay-5000" style={{bottom: '15%', right: '10%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-400/5 to-cyan-500/5 rounded-full blur-xl animate-pulse-slow" style={{top: '40%', right: '25%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-indigo-500/7 to-purple-500/7 rounded-full blur-lg animate-pulse-slow delay-3000" style={{bottom: '35%', left: '20%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-purple-400/8 rounded-full animate-spin-very-slow" style={{top: '30%', left: '15%'}} />
        <div className="absolute w-32 h-32 border border-blue-400/10 rotate-45 animate-ping-slow" style={{bottom: '40%', right: '20%'}} />
        <div className="absolute w-28 h-28 bg-gradient-to-br from-cyan-400/12 to-transparent rounded-full animate-bounce-slow" style={{top: '65%', left: '25%'}} />
        <div className="absolute w-24 h-24 border-2 border-pink-300/8 rounded-lg rotate-12 animate-spin-slow" style={{top: '50%', right: '15%'}} />

        {/* Photography-themed floating icons */}
        <div className="absolute text-5xl text-purple-400/12 animate-float-gentle" style={{top: '25%', right: '30%'}}>📷</div>
        <div className="absolute text-4xl text-blue-400/10 animate-float-gentle delay-2000" style={{bottom: '30%', left: '15%'}}>🖼️</div>
        <div className="absolute text-3xl text-cyan-300/8 animate-twinkle delay-4000" style={{top: '75%', left: '12%'}}></div>
        <div className="absolute text-3xl text-pink-300/12 animate-bounce-slow delay-1500" style={{bottom: '20%', right: '25%'}}>🎨</div>
        <div className="absolute text-2xl text-purple-400/15 animate-twinkle" style={{top: '85%', right: '18%'}}>⭐</div>

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/3 via-transparent to-blue-900/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-800/2 to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient opacity-25" />
      </div>

      {/* Gallery Header */}
      <div className={`text-center mb-12 relative z-10 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Decorative elements */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-500 animate-expand-line" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse-slow" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-yellow-500 animate-expand-line delay-500" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-white mb-4 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
            Gallery Showcase
          </span>
          <div className="absolute -top-2 -right-6 text-2xl animate-twinkle"></div>
        </h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our stunning collection of professional photography and videography work
        </p>

        {/* Gallery counter */}
        <div className="flex items-center justify-center mt-4 space-x-2">
          <div className="flex space-x-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                style={{animationDelay: `${i * 0.2}s`}}
              />
            ))}
          </div>
          <span className="text-yellow-300 text-sm font-medium ml-2">6 Featured Works</span>
        </div>
      </div>

      {/* Enhanced Gallery Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 transition-all duration-1200 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Grid background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-blue-500/3 rounded-2xl blur-2xl -m-4 opacity-40" />
        
        {/* First vertical stack */}
        <div className="flex flex-col gap-4 relative group">
          {/* Stack glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <div 
            className="overflow-hidden rounded-lg relative group/image" 
            data-aos={images[0].anim}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image container with enhanced effects */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={images[0].src}
                alt=""
                className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110 hover:rotate-1"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              {/* Floating badge */}
              <div className="absolute top-3 left-3 bg-yellow-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transform translate-y-[-50px] group-hover/image:translate-y-0 transition-transform duration-500">
                Featured
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-t-yellow-500/30 border-r-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
          
          <div 
            className="overflow-hidden rounded-lg relative group/image" 
            data-aos={images[1].anim}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={images[1].src}
                alt=""
                className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110 hover:rotate-1"
              />
              
              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-3 right-3 bg-yellow-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transform translate-x-[50px] group-hover/image:translate-x-0 transition-transform duration-500">
                Premium
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[25px] border-l-[25px] border-b-blue-500/30 border-l-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 delay-200" />
            </div>
          </div>
        </div>

        {/* Second column */}
        <div 
          className="overflow-hidden rounded-lg relative group/image" 
          data-aos={images[2].anim}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative overflow-hidden rounded-lg h-full">
            <img
              src={images[2].src}
              alt=""
              className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110 hover:rotate-1"
            />
            
            {/* Special effects for full-height image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm translate-x-[-60px] group-hover/image:translate-x-0 transition-transform duration-500">
              Spotlight
            </div>

            {/* Full border glow */}
            <div className="absolute inset-0 border-2 border-purple-400/0 rounded-lg group-hover/image:border-purple-400/50 transition-all duration-500" />
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 delay-300" />
          </div>
        </div>

        {/* Third vertical stack */}
        <div className="flex flex-col gap-4 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <div 
            className="overflow-hidden rounded-lg relative group/image" 
            data-aos={images[3].anim}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={images[3].src}
                alt=""
                className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110 hover:rotate-1"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-3 left-3 bg-cyan-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transform translate-y-[50px] group-hover/image:translate-y-0 transition-transform duration-500">
                Creative
              </div>

              <div className="absolute top-0 left-0 w-0 h-0 border-t-[25px] border-l-[25px] border-t-cyan-500/30 border-l-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 delay-100" />
            </div>
          </div>
          
          <div 
            className="overflow-hidden rounded-lg relative group/image" 
            data-aos={images[4].anim}
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={images[4].src}
                alt=""
                className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110 hover:rotate-1"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-3 right-3 bg-pink-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transform translate-x-[50px] group-hover/image:translate-x-0 transition-transform duration-500">
                Artistic
              </div>

              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[25px] border-r-[25px] border-b-pink-500/30 border-r-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 delay-400" />
            </div>
          </div>
        </div>

        {/* Fourth column */}
        <div 
          className="overflow-hidden rounded-lg relative group/image" 
          data-aos={images[5].anim}
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative overflow-hidden rounded-lg h-full">
            <img
              src={images[5].src}
              alt=""
              className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110 hover:rotate-1"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-indigo-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm translate-x-[60px] group-hover/image:translate-x-0 transition-transform duration-500">
              Masterpiece
            </div>

            <div className="absolute inset-0 border-2 border-indigo-400/0 rounded-lg group-hover/image:border-indigo-400/50 transition-all duration-500" />
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 delay-500" />
          </div>
        </div>
      </div>

      {/* Gallery Footer */}
      <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-500/15 to-blue-500/15 px-8 py-4 rounded-full border border-purple-500/25 backdrop-blur-sm">
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-yellow-400 font-semibold text-lg">Discover more in our complete gallery</span>
         
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -40px) rotate(2deg); }
          50% { transform: translate(-25px, -50px) rotate(-2deg); }
          75% { transform: translate(-35px, -30px) rotate(1deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.6) rotate(90deg); }
          50% { opacity: 0.6; transform: scale(0.8) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.5) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5) rotate(45deg);
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
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 2rem; }
        }
        
        .animate-float-large { animation: float-large 20s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 7s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 8s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 35s linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 2s ease-out forwards; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0);
          background-size: 60px 60px;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(147, 51, 234, 0.08) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}