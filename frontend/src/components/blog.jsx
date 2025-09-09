import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import blog1 from "/blog1.png";
import blog2 from "/blog2.png";
import blog3 from "/blog3.png";

export function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1700 });
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-600/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Geometric Background Shapes */}
        <div className="absolute w-96 h-96 border border-orange-600/5 rounded-full animate-pulse-slow" style={{top: '10%', right: '-10%'}} />
        <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-spin-very-slow" style={{bottom: '20%', left: '-5%'}} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-orange-600/10 to-transparent rounded-full animate-ping-slow" style={{top: '40%', left: '20%'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Titles Section */}
        <div className="mb-10 relative">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div data-aos="fade-down" className="text-left relative">
              {/* Enhanced decorative line with animation */}
              <h3 className="text-warning text-lg font-light ml-14 relative before:absolute before:left-0 before:top-2.5 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-orange-600 before:to-red-600 before:animate-expand-line">
                Our Blogs
              </h3>
              
              {/* Main title with letter animation */}
              <h1 className="text-3xl md:text-5xl text-white font-bold mt-2 relative overflow-hidden">
                <span className="inline-block animate-slide-up" style={{animationDelay: '0.5s'}}>BLOGS</span>
                <span className="mx-4 text-orange-600 animate-pulse">•</span>
                <span className="inline-block animate-slide-up text-yellow-400" style={{animationDelay: '0.7s'}}>ARTICLE</span>
                
                {/* Glowing underline */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-600 to-transparent transition-all duration-2000 delay-1000 ${
                  isVisible ? 'w-32' : 'w-0'
                }`} />
              </h1>
            </div>
          </div>

          {/* Floating blog stats */}
          <div className="absolute -top-4 right-0 opacity-20 animate-bounce-slow">
            <div className="text-orange-600 text-sm font-bold">3+ Articles</div>
          </div>
        </div>

        {/* Enhanced Blog Articles Grid */}
        <div className="grid md:grid-cols-7 gap-6">
          {/* Large Main Blog with Enhanced Effects */}
          <div className="md:col-span-4 group" data-aos="fade-down">
            <div className="mb-6 relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-600/10">
              {/* Image with overlay effects */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={blog1} 
                  alt="Blog 1" 
                  className="w-full h-auto rounded transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating read time badge */}
                <div className="absolute top-4 right-4 bg-orange-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transform translate-y-[-100px] group-hover:translate-y-0 transition-transform duration-500">
                  5 min read
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="text-white mt-4 text-left relative">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white relative overflow-hidden">
                  <span className="relative z-10">10 Tips for Capturing Stunning Property Photos on a Budget</span>
                  {/* Text highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </h1>
                
                <small className="block text-gray-400 mt-3 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse" />
                  May 1, 2025
                </small>
                
                <p className="text-gray-400 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-300">
                  You don't need a massive budget to make your listing stand out. From choosing the right time of day to preparing each space properly, these tips will help you get the most out of your shoot without overspending...
                </p>
                
                <button disabled className="text-orange-600 mt-4 text-sm relative overflow-hidden group/btn">
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">read more</span>
                  <span className="absolute right-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Smaller Blogs */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Blog 2 with Enhanced Effects */}
            <div data-aos="fade-down" className="group transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/5">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={blog2}
                  alt="Blog 2"
                  className="w-full h-44 object-cover rounded transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating category badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-orange-600 px-2 py-1 rounded text-xs font-semibold backdrop-blur-sm transform translate-x-[-100px] group-hover:translate-x-0 transition-transform duration-300">
                  Tips
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-orange-600/20 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="text-white mt-3 text-left relative">
                <h1 className="text-lg font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                  How to Get the Best Results From Your Photographer
                </h1>
                
                <small className="block text-gray-400 mt-2 flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2" />
                  April 20, 2025
                </small>
                
                <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                  Real estate photography is a team effort. Learn how agents, homeowners, and photographers can work together before and during the shoot to ensure the best visual outcome...
                </p>
                
                <button disabled className="text-orange-600 mt-2 text-sm relative group/btn">
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">read more</span>
                </button>
              </div>
            </div>

            {/* Blog 3 with Enhanced Effects */}
            <div data-aos="fade-down" className="group transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/5">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={blog3}
                  alt="Blog 3"
                  className="w-full h-44 object-cover rounded transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating category badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-orange-600 px-2 py-1 rounded text-xs font-semibold backdrop-blur-sm transform translate-x-[-100px] group-hover:translate-x-0 transition-transform duration-300 delay-100">
                  Guide
                </div>
                
                {/* Reading progress indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-orange-600/30 w-0 group-hover:w-full transition-all duration-1000 delay-200" />
              </div>
              
              <div className="text-white mt-3 text-left relative">
                <h1 className="text-lg font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                  Maximizing the Value of Your Property Shoot
                </h1>
                
                <small className="block text-gray-400 mt-2 flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2" />
                  April 5, 2025
                </small>
                
                <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                  As a seasoned real estate photographer, my job is to showcase your space in the best light. Here's how you can prepare and what to expect to ensure top-notch results from your shoot...
                </p>
                
                <button disabled className="text-orange-600 mt-2 text-sm relative group/btn">
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">read more</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Newsletter Signup Hint */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center text-gray-500 text-sm">
            <div className="w-8 h-8 border border-orange-600/30 rounded-full flex items-center justify-center mr-2 animate-pulse">
              <span className="text-orange-600 text-xs">✉</span>
            </div>
            Stay updated with our latest photography tips
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 6rem; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 2s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 25s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}