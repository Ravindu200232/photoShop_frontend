import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function NewsLetter() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1700 });
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          `linear-gradient(180deg, rgba(0,0,0,0.43) 60%, #020202), url(/nl.jpg)`
      }}
    >
      
      {/* Enhanced Animated Background Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/6 to-amber-500/6 rounded-full blur-3xl animate-float-large" style={{top: '10%', left: '5%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-500/8 to-orange-500/8 rounded-full blur-2xl animate-float-large delay-4000" style={{bottom: '10%', right: '5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/4 to-amber-400/4 rounded-full blur-xl animate-pulse-slow" style={{top: '40%', right: '20%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/6 to-red-400/6 rounded-full blur-lg animate-pulse-slow delay-2500" style={{bottom: '30%', left: '15%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-yellow-400/8 rounded-full animate-spin-very-slow" style={{top: '25%', right: '15%'}} />
        <div className="absolute w-32 h-32 border border-amber-400/10 rotate-45 animate-ping-slow" style={{bottom: '35%', left: '20%'}} />
        <div className="absolute w-28 h-28 bg-gradient-to-br from-yellow-400/12 to-transparent rounded-full animate-bounce-slow" style={{top: '65%', right: '25%'}} />
        <div className="absolute w-24 h-24 border-2 border-amber-300/8 rounded-lg rotate-12 animate-spin-slow" style={{top: '50%', left: '10%'}} />

        {/* Newsletter-themed floating icons */}
        <div className="absolute text-5xl text-yellow-400/10 animate-float-gentle" style={{top: '20%', right: '30%'}}>📧</div>
        <div className="absolute text-4xl text-amber-400/8 animate-float-gentle delay-2000" style={{bottom: '25%', left: '12%'}}>💌</div>
        <div className="absolute text-3xl text-yellow-300/6 animate-twinkle delay-3000" style={{top: '70%', left: '8%'}}>✨</div>
        <div className="absolute text-3xl text-amber-300/10 animate-bounce-slow delay-1500" style={{bottom: '15%', right: '22%'}}>🎁</div>
        <div className="absolute text-2xl text-yellow-400/12 animate-twinkle" style={{top: '80%', right: '15%'}}>⭐</div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/2 via-transparent to-amber-900/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-800/1 to-transparent" />
        
        {/* Newsletter-specific overlay */}
        <div className="absolute inset-0 bg-radial-gradient opacity-20" />
      </div>

      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Enhanced Left Content Section */}
          <div data-aos="fade-right" className="text-white relative">
            
            {/* Content background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/3 to-transparent rounded-2xl blur-xl -m-8 opacity-60" />
            
            {/* Enhanced Newsletter Label */}
            <div className="relative mb-6">
              <h3 className="text-warning text-lg font-light relative pl-32 mb-2 before:absolute before:left-0 before:top-2.5 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-yellow-500 before:to-amber-500 before:animate-expand-line">
                Our Newsletter
              </h3>
              
              {/* Floating newsletter icon */}
              <div className="absolute -top-2 -left-8 text-2xl text-yellow-400 animate-bounce-slow">
                
              </div>
            </div>

            {/* Enhanced Main Heading */}
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 relative font-satisfy transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">
                  SUBSCRIBE & GET 
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  10% OFF
                </span>
                
                {/* Animated percentage badge */}
                <div className="absolute -top-4 -right-8 bg-gradient-to-br from-yellow-500 to-amber-600 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce-slow">
                  10%
                </div>
              </span>
              
              {/* Title glow effect */}
              <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-yellow-400 blur-lg opacity-20 -z-10">
                SUBSCRIBE & GET 10% OFF
              </div>
              
              {/* Decorative sparkles */}
              <div className="absolute -top-2 -left-4 text-xl text-yellow-400 animate-twinkle"></div>
              <div className="absolute bottom-2 -right-2 text-lg text-amber-400 animate-twinkle delay-1000"></div>
            </h1>
            
            {/* Enhanced Description */}
            <div className={`relative mb-8 transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-gray-300 text-sm leading-relaxed relative z-10 transition-colors duration-300 hover:text-gray-200">
                Get updated on every new offer on your packages. We would be happy to help you coordinate the perfect photographer with the perfect package for your big day. We are available to talk — just email anytime!
              </p>
              
              {/* Text highlight animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-text-shimmer opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Enhanced Form Section */}
            <div className={`mt-8 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              
              {/* Success message */}
              {isSubscribed && (
                <div className="mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl px-4 py-2 animate-slide-in">
                  <div className="flex items-center space-x-2 text-green-300">
                    <span className="text-lg">✅</span>
                    <span className="text-sm font-medium">Successfully subscribed! Check your email for the discount code.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col border-1 border-gray-500 rounded-xl sm:flex-row gap-4 relative group">
                
                {/* Form glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Enhanced Email Input */}
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-3 w-full bg-black/50 backdrop-blur-sm border border-gray-500/50 rounded-xl text-white placeholder:text-gray-400 transition-all duration-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none hover:border-gray-400"
                  />
                  
                  {/* Input floating label effect */}
                  <div className="absolute inset-0 border border-yellow-500/0 rounded-xl pointer-events-none transition-all duration-300 group-focus-within:border-yellow-500/50" />
                  
                  {/* Email icon */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300">
                    📧
                  </div>
                </div>
                
                {/* Enhanced Subscribe Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold relative overflow-hidden group/btn transition-all duration-300 hover:from-yellow-600 hover:to-amber-700 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Subscribe</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  
                  {/* Button glow */}
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-xl blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              </form>
              
              {/* Form benefits */}
              <div className={`flex flex-wrap gap-4 mt-6 transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="flex items-center space-x-2 text-yellow-300 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Instant 10% Discount</span>
                </div>
                <div className="flex items-center space-x-2 text-amber-300 text-xs">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500" />
                  <span>Exclusive Offers</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-300 text-xs">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000" />
                  <span>Priority Booking</span>
                </div>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-14 -right-4 opacity-60 hidden lg:block">
              <div className="bg-black/40 backdrop-blur-sm border border-yellow-400/20 rounded-xl px-4 py-2 animate-float-gentle">
                {/* <div className="flex items-center space-x-3 text-yellow-300 text-xs">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>"Amazing service!" - Sarah K.</span>
                </div> */}
              </div>
            </div>
          </div>
          
          {/* Right side - keeping empty as in original */}
          <div className="relative">
            {/* Optional: Subtle decorative elements that don't interfere */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-32 h-32 border border-yellow-400/20 rounded-full animate-pulse-slow" style={{top: '20%', right: '30%'}} />
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full animate-bounce-slow delay-2000" style={{bottom: '30%', left: '20%'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(25px, -35px) rotate(2deg); }
          50% { transform: translate(-20px, -45px) rotate(-2deg); }
          75% { transform: translate(-30px, -25px) rotate(1deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.4) rotate(90deg); }
          50% { opacity: 0.7; transform: scale(0.9) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.3) rotate(270deg); }
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
          50% { transform: translateY(-18px) rotate(8deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 6rem; }
        }
        
        @keyframes text-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slide-in {
          0% { opacity: 0; transform: translateY(-10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-float-large { animation: float-large 16s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 7s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 30s linear infinite; }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 2s ease-out forwards; }
        .animate-text-shimmer { animation: text-shimmer 3s linear infinite; }
        .animate-slide-in { animation: slide-in 0.5s ease-out forwards; }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.06) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}