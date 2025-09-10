import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [];
for (let i = 1; i <= 26; i++) {
  images.push({
    original: `v${i}.jpg`,
    thumbnail: `v${i}.jpg`,
    description: `MYCAM ${i}`,
  });
}

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl animate-float-large" style={{top: '10%', left: '5%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-500/7 to-orange-500/7 rounded-full blur-2xl animate-float-large delay-8000" style={{bottom: '20%', right: '5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/4 to-amber-400/4 rounded-full blur-xl animate-pulse-slow" style={{top: '40%', right: '20%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/6 to-red-400/6 rounded-full blur-lg animate-pulse-slow delay-5000" style={{bottom: '35%', left: '15%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-yellow-400/5 rounded-full animate-spin-very-slow" style={{top: '25%', right: '15%'}} />
        <div className="absolute w-32 h-32 border border-amber-400/7 rotate-45 animate-ping-slow" style={{bottom: '45%', left: '20%'}} />
        <div className="absolute w-28 h-28 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full animate-bounce-slow" style={{top: '65%', right: '25%'}} />
        <div className="absolute w-24 h-24 border-2 border-amber-300/5 rounded-lg rotate-12 animate-spin-slow" style={{top: '50%', left: '10%'}} />

        {/* Gallery-themed floating icons */}
        <div className="absolute text-5xl text-yellow-400/6 animate-float-gentle" style={{top: '20%', right: '30%'}}></div>
        <div className="absolute text-4xl text-amber-400/5 animate-float-gentle delay-3000" style={{bottom: '25%', left: '12%'}}></div>
        <div className="absolute text-3xl text-yellow-300/4 animate-twinkle delay-5000" style={{top: '70%', left: '8%'}}></div>
        <div className="absolute text-3xl text-amber-300/6 animate-bounce-slow delay-2000" style={{bottom: '15%', right: '22%'}}></div>
        <div className="absolute text-2xl text-yellow-400/8 animate-twinkle" style={{top: '80%', right: '15%'}}></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/12 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${7 + Math.random() * 8}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/2 via-transparent to-amber-900/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-800/1 to-transparent" />
        
        {/* Gallery-specific radial gradient */}
        <div className="absolute inset-0 bg-radial-gradient opacity-15" />
      </div>

      {/* Enhanced Header Section */}
      <div className={`relative z-10 mb-12 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
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

        <h2 className="text-lg text-white uppercase tracking-wide relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            Our Gallery
          </span>
          
          {/* Subtitle glow effect */}
          <div className="absolute inset-0 text-lg text-yellow-400 blur-lg opacity-20 uppercase tracking-wide">
            Our Gallery
          </div>
          
          {/* Floating camera icon */}
          <div className="absolute -right-8 -top-2 text-2xl text-yellow-400 animate-bounce-slow">
            
          </div>
        </h2>
        
        <h1 className="text-3xl font-bold text-white mt-2 mb-6 relative font-satisfy">
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
              Explore Our Work
            </span>
            
            {/* Title shadow effect */}
            <div className="absolute inset-0 text-3xl font-bold text-white blur-sm opacity-20 -z-10">
              Explore Our Work
            </div>
          </span>
          
          {/* Animated underline */}
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 transition-all duration-1500 delay-800 ${
            isVisible ? 'w-32' : 'w-0'
          }`} />
          
          {/* Floating sparkles */}
          <div className="absolute -top-4 -left-8 text-xl text-yellow-400 animate-twinkle"></div>
          <div className="absolute -bottom-2 -right-8 text-lg text-amber-400 animate-twinkle delay-1000"></div>
        </h1>

        {/* Gallery statistics */}
        <div className={`flex justify-center space-x-8 mt-6 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center group">
            <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">{images.length}</div>
            <div className="text-xs text-gray-500">Photos</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-xs text-gray-500">Professional</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-yellow-300 group-hover:scale-110 transition-transform duration-300">4K</div>
            <div className="text-xs text-gray-500">Quality</div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Gallery Container */}
      <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1200 delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        
        {/* Gallery background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 to-amber-500/3 rounded-3xl blur-2xl -m-8 opacity-50" />
        
        {/* Enhanced ImageGallery Container */}
        <div className="relative gallery-container">
          <ImageGallery items={images} />
          
          {/* Gallery corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-400/30 rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-amber-400/30 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400/30 rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-400/30 rounded-br-2xl pointer-events-none" />
        </div>

        {/* Gallery interaction hints */}
        <div className="flex justify-center mt-6 space-x-8 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span>Click to view full size</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-500" />
            <span>Use arrows to navigate</span>
          </div>
        </div>
      </div>

      {/* Enhanced Separate Grid Gallery */}
      <div className={`w-full px-4 py-10 bg-black relative z-10 mt-16 transition-all duration-1400 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}>
        
        {/* Grid section header */}
        <div className="text-center mb-12 relative">
          <h3 className="text-2xl font-bold text-white mb-4 font-satisfy">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
              Complete Portfolio
            </span>
            
            {/* Grid header underline */}
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1500 delay-1400 ${
              isVisible ? 'w-48' : 'w-0'
            }`} />
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through our complete collection of professional photography work
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="relative">
          {/* Grid background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/2 to-amber-500/2 rounded-3xl blur-2xl -m-4 opacity-40" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {images.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg group relative transition-all duration-800 delay-${(index % 8) * 100} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                data-aos={image.anim}
              >
                {/* Image container with enhanced effects */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.original}
                    alt={image.description}
                    className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110 hover:brightness-110 hover:contrast-105"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image number badge */}
                  <div className="absolute top-3 left-3 bg-yellow-600/90 text-white px-2 py-1 rounded-full text-xs font-bold backdrop-blur-sm transform translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Image title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 transform translate-y-[50px] group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-white text-sm font-semibold">{image.description}</p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-yellow-500/40 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg" 
                       style={{animationDelay: `${index * 50}ms`}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 px-8 py-4 rounded-full border border-yellow-500/20 backdrop-blur-sm">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 font-semibold text-lg">Loved what you saw? Let's create something amazing together!</span>
            <div className="text-3xl animate-bounce-slow"></div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations & Gallery Styling */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(45px, -55px) rotate(4deg); }
          50% { transform: translate(-40px, -65px) rotate(-4deg); }
          75% { transform: translate(-50px, -45px) rotate(3deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(12deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.8) rotate(90deg); }
          50% { opacity: 0.6; transform: scale(0.7) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.7) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.18); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.8) rotate(45deg);
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
          50% { transform: translateY(-35px) rotate(20deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        
        .animate-float-large { animation: float-large 32s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 10s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 9s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 14s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 50s linear infinite; }
        .animate-spin-slow { animation: spin-slow 32s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 7s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 3s ease-out forwards; }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.05) 0%, transparent 70%);
        }

        /* Enhanced Gallery Styling */
        .gallery-container .image-gallery {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 1rem;
          padding: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(245, 158, 11, 0.1);
        }

        .gallery-container .image-gallery-content .image-gallery-slide .image-gallery-image {
          border-radius: 0.5rem;
        }

        .gallery-container .image-gallery-thumbnails .image-gallery-thumbnail {
          border-radius: 0.5rem;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .gallery-container .image-gallery-thumbnails .image-gallery-thumbnail.active,
        .gallery-container .image-gallery-thumbnails .image-gallery-thumbnail:hover {
          border-color: #f59e0b;
          transform: scale(1.05);
        }

        .gallery-container .image-gallery-icon:hover {
          color: #f59e0b !important;
          transform: scale(1.1);
        }

        .gallery-container .image-gallery-bullets .image-gallery-bullet {
          background-color: rgba(245, 158, 11, 0.5);
          border: 2px solid transparent;
        }

        .gallery-container .image-gallery-bullets .image-gallery-bullet.active {
          background-color: #f59e0b;
          border-color: #fbbf24;
        }
      `}</style>
    </div>
  );
}