import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1700 });
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black py-24 relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/8 to-amber-500/8 rounded-full blur-3xl animate-float-large" style={{top: '20%', left: '-10%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl animate-float-large delay-3000" style={{bottom: '10%', right: '-5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/5 to-amber-400/5 rounded-full blur-xl animate-pulse-slow" style={{top: '50%', right: '15%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/8 to-red-400/8 rounded-full blur-lg animate-pulse-slow delay-2000" style={{bottom: '40%', left: '20%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-32 h-32 border border-yellow-400/10 rounded-full animate-spin-very-slow" style={{top: '30%', right: '10%'}} />
        <div className="absolute w-24 h-24 border border-amber-400/15 rotate-45 animate-ping-slow" style={{bottom: '50%', left: '25%'}} />
        <div className="absolute w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full animate-bounce-slow" style={{top: '70%', right: '30%'}} />

        {/* Camera-themed floating icons */}
        <div className="absolute text-4xl text-yellow-400/20 animate-float-gentle" style={{top: '15%', right: '20%'}}></div>
        <div className="absolute text-3xl text-amber-400/15 animate-float-gentle delay-1000" style={{bottom: '20%', left: '10%'}}></div>
        <div className="absolute text-2xl text-yellow-300/10 animate-twinkle" style={{top: '60%', left: '5%'}}></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/3 via-transparent to-amber-900/3" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Enhanced Left Image Section */}
          <div className={`relative transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            
            {/* Main Image with Enhanced Effects */}
            <div className="w-full group relative overflow-hidden rounded-[80px]">
              
              {/* Image glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-[80px] blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
              
              <img
                src={"./t3.jpg"}
                alt="Photographer 1"
                className="w-full md:w-[600px] h-[250px] md:h-[500px] object-cover rounded-[80px] brightness-75 contrast-115 saturate-100 transition-all duration-700 group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-110"
              />
              
              {/* Hover overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Professional badge */}
              <div className="absolute top-6 left-6 bg-yellow-400/90 text-black px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm transform translate-y-[-100px] group-hover:translate-y-0 transition-transform duration-500">
                Lead Photographer
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-400/30 rounded-tr-[80px]" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400/30 rounded-bl-[80px]" />
            </div>
            
            {/* Enhanced Smaller Image */}
            <div
              className="absolute w-[48%] -bottom-8 md:-right-12 right-0 group"
              data-aos="fade-up"
            >
              <div className="relative overflow-hidden rounded-[50px]">
                
                {/* Smaller image glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 to-orange-400/15 rounded-[50px] blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                
                <img
                  src={"./t1.jpg"}
                  alt="Photographer 2"
                  className="w-[200px] md:w-[300px] h-[150px] md:h-[300px] object-cover rounded-[50px] brightness-75 contrast-115 saturate-100 transition-all duration-500 group-hover:scale-110 group-hover:brightness-85 group-hover:saturate-120"
                />
                
                {/* Floating experience badge */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-br from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-bounce-slow">
                  Expert
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-[50px]" />
              </div>
            </div>

            {/* Floating achievement indicators */}
            <div className="absolute -top-4 -left-4 opacity-70">
              <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full px-3 py-2 animate-float-gentle">
                <div className="flex items-center space-x-1 text-yellow-400 text-xs">
                  <span>🏆</span>
                  <span>Award Winner</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 -left-8 opacity-60">
              <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/20 rounded-full px-3 py-2 animate-pulse-slow">
                <div className="flex items-center space-x-1 text-amber-300 text-xs">
                  <span>📷</span>
                  <span>500+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content Section */}
          <div className={`text-white transition-all duration-1500 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} data-aos="fade-right">
            
            <div className="pt-10 relative">
              
              {/* Decorative elements around title */}
              <div className="absolute -top-2 -left-4">
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-yellow-400 animate-expand-line" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Enhanced Main Heading */}
              <h4 className="text-yellow-400 text-3xl md:text-4xl font-semibold mb-3 relative group">
                <span className="relative z-10">Our Photographer</span>
                
                {/* Text glow effect */}
                <div className="absolute inset-0 text-yellow-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Animated underline */}
                <div className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 delay-500 ${
                  isVisible ? 'w-full' : 'w-0'
                }`} />
                
                {/* Floating camera icon */}
                <div className="absolute -right-8 -top-2 text-2xl animate-bounce-slow">
                  
                </div>
              </h4>
              
              {/* Enhanced Sub-heading */}
              <h1 className="text-xl md:text-3xl font-poppins text-[#e8e4e4bf] leading-tight mb-6 relative">
                <span className="relative inline-block">
                  The trusted, professional photography team preferred by 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500"> agents, developers, and business owners</span>
                </span>
                
                {/* Decorative sparkles */}
                <div className="absolute -top-2 -right-2 text-lg text-yellow-400 animate-twinkle"></div>
                <div className="absolute bottom-2 -left-2 text-sm text-amber-400 animate-twinkle delay-1000"></div>
              </h1>
            </div>
            
            {/* Enhanced Content Section */}
            <div className="border-b border-white/20 pb-9 relative">
              
              {/* Content background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-lg blur-xl opacity-50" />
              
              <p className="text-gray-400 text-justify text-sm md:text-base leading-relaxed relative z-10 transition-colors duration-300 hover:text-gray-300">
                At ROYFILMS, our photographer brings passion, a fresh
                perspective, and a sharp eye for detail to every project. As a
                dedicated newcomer in the field, we combine creativity with the
                latest techniques to deliver stunning visuals that highlight
                what makes your property unique. We don't just take pictures we
                capture stories, moods, and moments that help buyers connect.
                Professional, approachable, and committed to quality, our goal
                is simple: to make your property look its absolute best.
              </p>

              {/* Highlight keywords with subtle glow */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-text-shimmer" />
              </div>
            </div>

            {/* Enhanced Statistics Section */}
            <div className={`mt-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-xs text-gray-500">Projects Done</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-yellow-300 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className={`mt-8 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center space-x-3 text-yellow-400 text-sm">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                <span>Ready to capture your property's best moments?</span>
                <div className="text-lg animate-bounce-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(2deg); }
          50% { transform: translate(-15px, -40px) rotate(-2deg); }
          75% { transform: translate(-25px, -20px) rotate(1deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.4) rotate(90deg); }
          50% { opacity: 0.7; transform: scale(0.8) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.3) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.3) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 1.5rem; }
        }
        
        @keyframes text-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float-large { animation: float-large 15s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 5s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 25s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 1.5s ease-out forwards; }
        .animate-text-shimmer { animation: text-shimmer 3s linear infinite; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}