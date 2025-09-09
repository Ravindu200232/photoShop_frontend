import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SingleCard from "./singleCard";

const FeatureCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1700 });
    setIsVisible(true);
  }, []);

  const cards = [
    {
      img: "/f1.jpg",
      name: "Simple, Customisable Packages, High-Res Images in Two Working Days",
      dis: "Get high-quality photos of your property – fast. Choose from two streamlined packages that you can customise to suit your real estate or commercial needs.",
    },
    {
      img: "/f2.jpg",
      name: "Our Photographer Captures Flawless, On-Trend Images Every Time",
      dis: "Present your property in its best light. From wide-angle interior shots to striking exteriors, we deliver professional photos that impress buyers and clients. View our gallery for inspiration.",
    },
    {
      img: "/f3.jpg",
      name: "Affordable Combo Packages With Flexible Payment Options",
      dis: "Professional photography that fits your marketing budget. Select a package that works for you and pay with flexible options.",
    },
  ];

  return (
    <div className="Features-section py-16 bg-black relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full blur-3xl animate-float-slow" style={{top: '10%', left: '5%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-yellow-400/8 to-amber-500/8 rounded-full blur-2xl animate-float-slow delay-2000" style={{bottom: '10%', right: '5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-amber-400/5 to-yellow-500/5 rounded-full blur-xl animate-pulse-slow" style={{top: '40%', right: '10%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-lg animate-pulse-slow delay-1500" style={{bottom: '30%', left: '10%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-32 h-32 border border-amber-500/10 rounded-full animate-spin-very-slow" style={{top: '20%', left: '20%'}} />
        <div className="absolute w-24 h-24 border border-yellow-400/15 rotate-45 animate-ping-slow" style={{bottom: '40%', right: '25%'}} />
        <div className="absolute w-16 h-16 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full animate-bounce-slow" style={{top: '60%', left: '15%'}} />

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <Container className="relative z-10">
        
        {/* Enhanced Title Section */}
        <div className={`Feature-title text-center mb-16 relative transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} data-aos="fade-right">
          
          {/* Decorative elements around title */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-500 animate-expand-line" />
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-500 animate-expand-line delay-500" />
            </div>
          </div>

          {/* Main subtitle with enhanced styling */}
          <div className="relative inline-block mb-6">
            <h3 className="google-font text-warning text-amber-300 text-lg font-semibold relative">
              <span className="relative z-10">What We Offer</span>
              
              {/* Glow effect behind text */}
              <div className="absolute inset-0 bg-amber-300/20 blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated underline */}
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-1000 delay-700 ${
                isVisible ? 'w-full' : 'w-0'
              }`} />
            </h3>
            
            {/* Floating icon */}
            <div className="absolute -right-8 -top-2 text-amber-400 text-xl animate-bounce-slow">
              ⭐
            </div>
          </div>

          {/* Enhanced main title */}
          <h2 className="text-[2.6rem] text-[#e8e4e4bf] pb-4 relative font-bold leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">
                Explore & Choose What's Best for 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"> Your Property!</span>
              </span>
              
              {/* Text shadow effect */}
              <div className="absolute inset-0 text-[#e8e4e4bf] blur-sm opacity-50 -z-10">
                Explore & Choose What's Best for Your Property!
              </div>
            </span>
            
            {/* Decorative sparkles */}
            <div className="absolute -top-4 -right-4 text-2xl text-amber-400 animate-twinkle">✨</div>
            <div className="absolute -bottom-2 -left-4 text-xl text-yellow-400 animate-twinkle delay-1000">💎</div>
          </h2>

          {/* Enhanced description */}
          <div className={`mt-6 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Professional photography services tailored to showcase your property's unique features and maximize its market appeal
            </p>
            
            {/* Feature count indicator */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                    style={{animationDelay: `${i * 0.3}s`}}
                  />
                ))}
              </div>
              <span className="text-amber-400 text-sm font-medium ml-2">3 Premium Services</span>
            </div>
          </div>
        </div>

        {/* Enhanced Grid Container */}
        <div className={`relative transition-all duration-1200 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          {/* Grid background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl blur-xl -m-8" />
          
          <Grid container spacing={4} className="relative z-10">
            {cards.map((card, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <div 
                  className={`transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${(idx + 1) * 200}ms`
                  }}
                >
                  <SingleCard card={card} />
                </div>
              </Grid>
            ))}
          </Grid>

          {/* Grid overlay effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Connecting lines between cards */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-amber-400/20 to-amber-400/20 transform -translate-y-1/2" />
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-l from-amber-400/20 to-amber-400/20 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Enhanced Footer Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          
          {/* Call to action */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 px-8 py-4 rounded-full border border-amber-500/20 backdrop-blur-sm">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 font-medium">Ready to showcase your property?</span>
            <div className="text-2xl animate-bounce-slow">📸</div>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>High Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>

        {/* Center bottom satisfaction badge */}
        <div className="flex justify-center mt-8">
          <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-3 animate-float-gentle">
            <div className="flex items-center space-x-3">
              <div className="text-amber-400 text-lg">⭐⭐⭐⭐⭐</div>
              <span className="text-white text-sm font-medium">100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -20px) rotate(1deg); }
          50% { transform: translate(-10px, -30px) rotate(-1deg); }
          75% { transform: translate(-20px, -15px) rotate(0.5deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.3) rotate(90deg); }
          50% { opacity: 0.6; transform: scale(0.9) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.2) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.2) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(10deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 2rem; }
        }
        
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 30s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 1.5s ease-out forwards; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1px, transparent 0);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
};

export default FeatureCards;