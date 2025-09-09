import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/6 to-amber-500/6 rounded-full blur-3xl animate-float-large" style={{top: '10%', left: '5%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-500/8 to-orange-500/8 rounded-full blur-2xl animate-float-large delay-7000" style={{bottom: '20%', right: '5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/4 to-amber-400/4 rounded-full blur-xl animate-pulse-slow" style={{top: '40%', right: '20%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/6 to-red-400/6 rounded-full blur-lg animate-pulse-slow delay-4000" style={{bottom: '35%', left: '15%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-yellow-400/6 rounded-full animate-spin-very-slow" style={{top: '25%', right: '15%'}} />
        <div className="absolute w-32 h-32 border border-amber-400/8 rotate-45 animate-ping-slow" style={{bottom: '45%', left: '20%'}} />
        <div className="absolute w-28 h-28 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full animate-bounce-slow" style={{top: '65%', right: '25%'}} />
        <div className="absolute w-24 h-24 border-2 border-amber-300/6 rounded-lg rotate-12 animate-spin-slow" style={{top: '50%', left: '10%'}} />

        {/* About-themed floating icons */}
        <div className="absolute text-5xl text-yellow-400/8 animate-float-gentle" style={{top: '20%', right: '30%'}}>👤</div>
        <div className="absolute text-4xl text-amber-400/6 animate-float-gentle delay-3000" style={{bottom: '25%', left: '12%'}}>📷</div>
        <div className="absolute text-3xl text-yellow-300/5 animate-twinkle delay-5000" style={{top: '70%', left: '8%'}}>✨</div>
        <div className="absolute text-3xl text-amber-300/8 animate-bounce-slow delay-2000" style={{bottom: '15%', right: '22%'}}>🎨</div>
        <div className="absolute text-2xl text-yellow-400/10 animate-twinkle" style={{top: '80%', right: '15%'}}>⭐</div>

        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/15 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${6 + Math.random() * 8}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/2 via-transparent to-amber-900/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-800/1 to-transparent" />
        
        {/* About-specific radial gradient */}
        <div className="absolute inset-0 bg-radial-gradient opacity-20" />
      </div>

      {/* Enhanced Header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1, type: "spring" } }}
      >
        {/* Decorative elements around header */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-500 animate-expand-line" />
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse-slow relative">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1" />
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-500 animate-expand-line delay-500" />
          </div>
        </div>

        <h3 className="text-lg text-gray-400 tracking-wide mb-2 relative">
          <FaUser className="inline-block mr-2 text-primary text-yellow-400" />
          <span className="relative">
            Something About Myself
            {/* Text glow effect */}
            <div className="absolute inset-0 text-yellow-400 blur-lg opacity-20">
              Something About Myself
            </div>
          </span>
        </h3>
        
        <h1 className="text-4xl font-bold drop-shadow-sm relative font-satisfy">
          <span className="relative">
            About 
            <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 ml-2">
              Me
            </span>
            
            {/* Title shadow effect */}
            <div className="absolute inset-0 text-4xl font-bold text-white blur-sm opacity-20 -z-10">
              About Me
            </div>
          </span>
          
          {/* Floating sparkle */}
          <div className="absolute -top-4 -right-8 text-2xl text-yellow-400 animate-twinkle">
            ✨
          </div>
        </h1>
      </motion.div>

      {/* Enhanced Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Enhanced Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="relative group"
        >
          {/* Image background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          {/* Main image container */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/profile.jpg"
              alt="Rohitha Prabath"
              className="w-full h-auto max-w-sm mx-auto rounded-xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              title="Rohitha Prabath"
            />
            
            {/* Image overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Professional badge */}
            <div className="absolute top-4 left-4 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm transform translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-500">
              Photographer
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-yellow-400/30 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-400/30 rounded-bl-xl" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl" />
          </div>

          {/* Floating achievement badges */}
          <div className="absolute -top-4 -right-4 opacity-70">
            <div className="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-full px-3 py-2 animate-float-gentle">
              <div className="flex items-center space-x-1 text-yellow-400 text-xs">
                <span>⭐</span>
                <span>ROYFILMS</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 opacity-60">
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/20 rounded-full px-3 py-2 animate-pulse-slow">
              <div className="flex items-center space-x-1 text-amber-300 text-xs">
                <span>📍</span>
                <span>Hamilton</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="relative"
        >
          {/* Content background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/3 to-transparent rounded-2xl blur-xl -m-8 opacity-60" />
          
          <h2 className="text-3xl font-semibold mb-2 text-center md:text-left relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
              Roy Dissanayake
            </span>
            
            {/* Name glow effect */}
            <div className="absolute inset-0 text-3xl font-semibold text-white blur-sm opacity-20 -z-10">
              Roy Dissanayake
            </div>
          </h2>

          {/* Enhanced Type Animation */}
          <div className="mb-6 relative">
            <TypeAnimation
              className="text-xl sm:text-2xl font-bold text-primary text-yellow-400 text-center md:text-left"
              cursor
              sequence={["A Photographer", 2000, "A Designer", 2000, "A Creator", 2000]}
              wrapper="span"
              repeat={Infinity}
            />
            
            {/* Type animation glow */}
            <div className="absolute inset-0 text-xl sm:text-2xl font-bold text-yellow-400 blur-lg opacity-30 -z-10">
              A Creative Professional
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="relative mb-8">
            <p className="text-gray-300 text-justify leading-relaxed relative z-10 transition-colors duration-300 hover:text-gray-200">
              Hi, I'm Roy Dissanayake, the founder of ROYFILMS, based in Hamilton.
              I started this journey with a passion for photography and a strong
              interest in real estate and commercial spaces. With a creative eye
              and a commitment to quality, I aim to provide clean, professional,
              and engaging visual content that helps clients market their
              properties with confidence. Whether you're selling a home,
              showcasing a business, or promoting a new development, I'm here to
              capture the details that make your space stand out. As a growing
              business, I value every client and always strive to deliver results
              that exceed expectations.
            </p>
            
            {/* Text highlight animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-text-shimmer opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Enhanced Contact Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-sm">
            {[
              { Icon: FaUser, text: "Roy Dissanayake", color: "text-yellow-400" },
              { Icon: FaPhone, text: "+64 20 4166 3202", color: "text-blue-400" },
              { Icon: FaEnvelope, text: "rohitha.me94@gmail.com", color: "text-green-400" },
              { Icon: FaMapMarkerAlt, text: "224 Sandwich Road, St Andrews, Hamilton 3200 New zealand", color: "text-red-400" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-2 group transition-all duration-300 hover:scale-105 transition-all duration-800 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <item.Icon className={`text-primary ${item.color} group-hover:animate-bounce`} />
                <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
                
                {/* Contact item glow */}
                <div className="absolute inset-0 bg-yellow-400/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </div>
            ))}
          </div>

          {/* Enhanced Portfolio Button */}
          <div className={`mt-8 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <a
              href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold hover:from-yellow-600 hover:to-amber-700 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span>View My Portfolio</span>
              
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Button glow */}
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Google Maps Section */}
      <div className={`mt-12 relative z-10 transition-all duration-1200 delay-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Map section header */}
        <div className="text-center mb-8 relative">
          <h2 className="text-lg font-semibold text-gray-400 mb-4 relative inline-block font-satisfy">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-yellow-400">
              My Location
            </span>
            
            {/* Map header underline */}
            <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1500 delay-1200 ${
              isVisible ? 'w-full' : 'w-0'
            }`} />
            
            {/* Location pin icon */}
            <div className="absolute -right-8 -top-2 text-2xl text-yellow-400 animate-bounce-slow">
              📍
            </div>
          </h2>

          {/* Location details */}
          <div className="flex items-center justify-center space-x-2 text-yellow-300 text-sm">
            <span>🏠</span>
            <span>Hamilton, New Zealand</span>
            <span>•</span>
            <span>Professional Studio</span>
          </div>
        </div>
        
        {/* Enhanced Map Container */}
        <div className="relative group">
          {/* Map background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.785749254697!2d175.2470759!3d-37.7481703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d22f3ce2cbadd%3A0x9e5fcd83dfadd5dd!2s224%20Sandwich%20Road%2C%20St%20Andrews%2C%20Hamilton%203200%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1746645849485!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
              className="rounded-xl transition-all duration-500 group-hover:brightness-110"
            ></iframe>
            
            {/* Map overlay decorations */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-400/30 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400/30 rounded-bl-xl pointer-events-none" />
          </div>

          {/* Map interaction hint */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-2 text-yellow-300 text-xs">
              <span>🗺️</span>
              <span>Click to interact with map</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(40px, -50px) rotate(4deg); }
          50% { transform: translate(-35px, -60px) rotate(-4deg); }
          75% { transform: translate(-45px, -40px) rotate(3deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(10deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.7) rotate(90deg); }
          50% { opacity: 0.6; transform: scale(0.8) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.6) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.7) rotate(45deg);
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
          50% { transform: translateY(-30px) rotate(18deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        
        @keyframes text-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float-large { animation: float-large 28s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 9s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 12s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 45s linear infinite; }
        .animate-spin-slow { animation: spin-slow 28s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 2.5s ease-out forwards; }
        .animate-text-shimmer { animation: text-shimmer 4s linear infinite; }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.06) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default About;