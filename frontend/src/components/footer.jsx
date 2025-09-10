import React, { useEffect, useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="w-screen bg-black text-white py-10 relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/4 to-amber-500/4 rounded-full blur-3xl animate-float-large" style={{top: '20%', left: '10%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-500/6 to-orange-500/6 rounded-full blur-2xl animate-float-large delay-6000" style={{bottom: '20%', right: '10%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/3 to-amber-400/3 rounded-full blur-xl animate-pulse-slow" style={{top: '50%', right: '25%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-full blur-lg animate-pulse-slow delay-4000" style={{bottom: '40%', left: '20%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-yellow-400/5 rounded-full animate-spin-very-slow" style={{top: '30%', left: '15%'}} />
        <div className="absolute w-32 h-32 border border-amber-400/6 rotate-45 animate-ping-slow" style={{bottom: '50%', right: '20%'}} />
        <div className="absolute w-28 h-28 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full animate-bounce-slow" style={{top: '70%', right: '30%'}} />
        <div className="absolute w-24 h-24 border-2 border-amber-300/5 rounded-lg rotate-12 animate-spin-slow" style={{top: '60%', left: '25%'}} />

        {/* Footer-themed floating icons */}
        <div className="absolute text-4xl text-yellow-400/6 animate-float-gentle" style={{top: '25%', right: '35%'}}></div>
        <div className="absolute text-3xl text-amber-400/5 animate-float-gentle delay-3000" style={{bottom: '30%', left: '15%'}}>📱</div>
        <div className="absolute text-2xl text-yellow-300/4 animate-twinkle delay-5000" style={{top: '80%', left: '12%'}}>✨</div>
        <div className="absolute text-3xl text-amber-300/6 animate-bounce-slow delay-2000" style={{bottom: '20%', right: '25%'}}>🌟</div>
        <div className="absolute text-2xl text-yellow-400/8 animate-twinkle" style={{top: '85%', right: '18%'}}>💫</div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/12 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${6 + Math.random() * 8}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/1 via-transparent to-amber-900/1" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-800/0.5 to-transparent" />
        
        {/* Footer-specific gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/2 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between px-6 md:px-12 gap-8 relative z-10">
        
        {/* Enhanced About Section */}
        <div className={`w-full sm:w-[45%] md:w-1/4 text-center md:text-left transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative group">
            {/* Section background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/2 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-4" />
            
            <h1 className="text-xl font-semibold mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-satisfy">
                About Roy
              </span>
              
              {/* Title underline */}
              <div className={`absolute -bottom-1 left-0 md:left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1500 delay-500 ${
                isVisible ? 'w-full' : 'w-0'
              }`} />
              
              {/* Floating camera icon */}
              <div className="absolute -right-6 -top-2 text-lg text-yellow-400 animate-bounce-slow opacity-60">
                
              </div>
            </h1>
            
            <ul className="space-y-3 text-gray-400 relative z-10">
              {[
                { href: "/about", text: "My Story" },
                { href: "/portfolio", text: "Portfolio" },
                { href: "/testimonials", text: "Testimonials" }
              ].map((item, index) => (
                <li key={item.text} className={`transition-all duration-800 delay-${(index + 2) * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  <a 
                    href={item.href} 
                    className="hover:text-yellow-300 transition-all duration-300 relative group/link inline-flex items-center"
                  >
                    <span className="relative z-10">{item.text}</span>
                    
                    {/* Link hover effect */}
                    <div className="absolute inset-0 bg-yellow-400/10 rounded scale-0 group-hover/link:scale-100 transition-transform duration-300 -m-1" />
                    
                    {/* Arrow animation */}
                    <span className="ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300 text-yellow-400">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Services Section */}
        <div className={`w-full sm:w-[45%] md:w-1/4 text-center md:text-left transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/2 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-4" />
            
            <h1 className="text-xl font-semibold mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 font-satisfy">
                Photography Services
              </span>
              
              <div className={`absolute -bottom-1 left-0 md:left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-1500 delay-700 ${
                isVisible ? 'w-full' : 'w-0'
              }`} />
              
              <div className="absolute -right-6 -top-2 text-lg text-amber-400 animate-bounce-slow opacity-60 delay-1000">
                
              </div>
            </h1>
            
            <ul className="space-y-3 text-gray-400 relative z-10">
              {[
                { href: "/services/real-estate", text: "Real Estate Photography" },
                { href: "/services/commercial", text: "Commercial Projects" },
                { href: "/services/events", text: "Event Coverage" }
              ].map((item, index) => (
                <li key={item.text} className={`transition-all duration-800 delay-${(index + 4) * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  <a 
                    href={item.href} 
                    className="hover:text-amber-300 transition-all duration-300 relative group/link inline-flex items-center"
                  >
                    <span className="relative z-10">{item.text}</span>
                    <div className="absolute inset-0 bg-amber-400/10 rounded scale-0 group-hover/link:scale-100 transition-transform duration-300 -m-1" />
                    <span className="ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300 text-amber-400">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div className={`w-full sm:w-[45%] md:w-1/4 text-center md:text-left transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/2 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-4" />
            
            <h1 className="text-xl font-semibold mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-satisfy">
                Get in Touch
              </span>
              
              <div className={`absolute -bottom-1 left-0 md:left-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-1500 delay-900 ${
                isVisible ? 'w-full' : 'w-0'
              }`} />
              
              <div className="absolute -right-6 -top-2 text-lg text-orange-400 animate-bounce-slow opacity-60 delay-2000">
                
              </div>
            </h1>
            
            <div className="space-y-3 text-gray-400 relative z-10">
              {[
                { icon: "", text: "Email: rohitha.me94@gmail.com" },
                { icon: "", text: "Phone: +64 204166 3202" },
                { icon: "", text: "Location: 224 Sandwich Road, St Andrews, Hamilton 3200 New zealand" }
              ].map((item, index) => (
                <p key={index} className={`transition-all duration-800 delay-${(index + 6) * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } group/contact flex items-start space-x-2`}>
                  <span className="text-yellow-400 mt-1 group-hover/contact:animate-bounce">{item.icon}</span>
                  <span className="group-hover/contact:text-gray-300 transition-colors duration-300">{item.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Social Media Section */}
        <div className={`w-full sm:w-[45%] md:w-1/4 text-center md:text-left transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/2 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-4" />
            
            <h1 className="text-xl font-semibold mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-satisfy">
                Follow Me
              </span>
              
              <div className={`absolute -bottom-1 left-0 md:left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-1500 delay-1100 ${
                isVisible ? 'w-full' : 'w-0'
              }`} />
              
              <div className="absolute -right-6 -top-2 text-lg text-yellow-400 animate-bounce-slow opacity-60 delay-3000">
                
              </div>
            </h1>
            
            <div className="flex justify-center md:justify-start space-x-6 relative z-10">
              {[
                { Icon: AiOutlineFacebook, color: "text-blue-400", hoverColor: "hover:text-blue-300" },
                { Icon: AiOutlineTwitter, color: "text-cyan-400", hoverColor: "hover:text-cyan-300" },
                { Icon: AiOutlineInstagram, color: "text-pink-400", hoverColor: "hover:text-pink-300" }
              ].map(({ Icon, color, hoverColor }, index) => (
                <div key={index} className={`transition-all duration-800 delay-${(index + 9) * 200} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${hoverColor} text-2xl relative group/social transition-all duration-300 hover:scale-125 inline-block`}
                  >
                    <Icon className="relative z-10" />
                    
                    {/* Social icon background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full scale-0 group-hover/social:scale-150 transition-transform duration-500 blur-md" />
                    
                    {/* Pulse effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover/social:scale-100 group-hover/social:animate-ping" />
                  </a>
                </div>
              ))}
            </div>

            {/* Social media stats */}
            <div className={`mt-6 flex justify-center md:justify-start space-x-4 transition-all duration-1000 delay-1400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="text-center">
                <div className="text-sm font-bold text-yellow-400">2.5K</div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-amber-400">150+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer Bottom */}
      <div className={`text-center text-gray-500 mt-8 text-sm relative transition-all duration-1000 delay-1600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Decorative line above copyright */}
        <div className="flex items-center justify-center mb-6">
          <div className={`h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent transition-all duration-2000 delay-1800 ${
            isVisible ? 'w-64' : 'w-0'
          }`} />
        </div>
        
        <div className="relative inline-block">
          <span className="relative z-10">
            &copy; {new Date().getFullYear()} 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold mx-2">
              ROYFILMS
            </span>
            All rights reserved.
          </span>
          
          {/* Copyright glow effect */}
          <div className="absolute inset-0 text-gray-500 blur-lg opacity-20">
            &copy; {new Date().getFullYear()} ROYFILMS. All rights reserved.
          </div>
        </div>

        {/* Floating "Back to top" hint */}
        <div className="mt-4 opacity-60">
          <div className="inline-flex items-center space-x-2 text-yellow-400 text-xs animate-bounce-slow">
            <span></span>
            <span>Crafted with passion for photography</span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(35px, -45px) rotate(3deg); }
          50% { transform: translate(-30px, -55px) rotate(-3deg); }
          75% { transform: translate(-40px, -35px) rotate(2deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(8deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.6) rotate(90deg); }
          50% { opacity: 0.6; transform: scale(0.7) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.5) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.12); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.6) rotate(45deg);
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
          50% { transform: translateY(-25px) rotate(15deg); }
        }
        
        .animate-float-large { animation: float-large 25s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 8s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 7s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 10s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}