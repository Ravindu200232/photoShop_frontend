import React, { useState, useEffect } from 'react';

const packages = [
  {
    title: 'Standard Media Package',
    image: 'v4.jpg',
    description: '10 Photos',
    popular: false,
    details: {
      photos: 10,
      dronePhotos: 0,
      video: 'None',
      price: '$195',
      timeOnSite: '45 min',
      photographer: 'Roy Dissanayake',
    },
  },
  {
    title: 'Gold Media Package',
    image: 'v20.jpg',
    description: '20 Photos, 4 Drone Photos',
    popular: false,
    details: {
      photos: 20,
      dronePhotos: 4,
      video: 'None',
      price: '$295',
      timeOnSite: '1 hr',
      photographer: 'Roy Dissanayake',
      cameraGear: 'Nikon Z7, 70-200mm f/2.8',
    },
  },
  {
    title: 'Diamond Media Package',
    image: 'v24.jpg',
    description: '20 Photos, 4 Drone Photos, Cinematic Video + Drone Video',
    popular: true,
    details: {
      photos: 20,
      dronePhotos: 4,
      video: 'Cinematic Video + Drone Video',
      price: '$595',
      timeOnSite: '2.5 hrs',
      photographer: 'Roy Dissanayake',
    },
  },
  {
    title: 'Platinum Media Package',
    image: 'v13.jpg',
    description: '20 Photos, 4 Drone Photos, Vertical Reel for Social Media',
    popular: false,
    details: {
      photos: 20,
      dronePhotos: 4,
      video: 'Vertical Reel for Social Media',
      price: '$550',
      timeOnSite: '2.5 hrs',
      photographer: 'Roy Dissanayake',
    },
  },
  {
    title: 'X Package (Go All-In)',
    image: 'v1.jpg',
    description: '25 Photos, 6 Drone Photos, Cinematic Video + Drone Video, Twilight Shoot',
    popular: false,
    details: {
      photos: 25,
      dronePhotos: 6,
      video: 'Cinematic Video + Drone Video',
      twilight: 'Twilight Video + Photo shoot',
      price: '$895',
      timeOnSite: '3 hrs + 20 min at twilight',
      photographer: 'Roy Dissanayake',
      cameraGear: 'Canon EOS R6, 70-200mm f/2.8, DJI Mavic Pro 2',
    },
  },
];

export default function Package() {
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePackageClick = (index) => {
    setExpandedPackage(expandedPackage === index ? null : index);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-gray-900 to-black relative min-h-screen overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/8 to-amber-500/8 rounded-full blur-3xl animate-float-large" style={{top: '10%', left: '5%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl animate-float-large delay-8000" style={{bottom: '20%', right: '5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/6 to-amber-400/6 rounded-full blur-xl animate-pulse-slow" style={{top: '40%', right: '20%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/8 to-red-400/8 rounded-full blur-lg animate-pulse-slow delay-5000" style={{bottom: '35%', left: '15%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-yellow-400/8 rounded-full animate-spin-very-slow" style={{top: '25%', right: '15%'}} />
        <div className="absolute w-32 h-32 border border-amber-400/10 rotate-45 animate-ping-slow" style={{bottom: '45%', left: '20%'}} />
        <div className="absolute w-28 h-28 bg-gradient-to-br from-yellow-400/12 to-transparent rounded-full animate-bounce-slow" style={{top: '65%', right: '25%'}} />
        <div className="absolute w-24 h-24 border-2 border-amber-300/8 rounded-lg rotate-12 animate-spin-slow" style={{top: '50%', left: '10%'}} />

        {/* Package-themed floating shapes */}
        <div className="absolute w-20 h-20 bg-gradient-to-br from-yellow-500/5 to-amber-600/5 rounded-lg animate-float-gentle" style={{top: '20%', right: '30%'}} />
        <div className="absolute w-16 h-16 bg-gradient-to-br from-amber-400/7 to-yellow-500/7 rounded-full animate-float-gentle delay-3000" style={{bottom: '25%', left: '12%'}} />
        <div className="absolute w-12 h-12 bg-gradient-to-br from-yellow-300/6 to-transparent rounded-lg animate-twinkle delay-5000" style={{top: '70%', left: '8%'}} />
        <div className="absolute w-14 h-14 bg-gradient-to-br from-amber-300/8 to-orange-400/8 rounded-full animate-bounce-slow delay-2000" style={{bottom: '15%', right: '22%'}} />

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/15 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/3 via-transparent to-amber-900/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-800/2 to-transparent" />
        
        {/* Package-specific radial gradient */}
        <div className="absolute inset-0 bg-radial-gradient opacity-20" />
      </div>

      {/* Enhanced Header Section */}
      <div className={`relative z-10 mb-16 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Decorative elements around header */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-3">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-500 animate-expand-line" />
            <div className="w-5 h-5 bg-yellow-500 rounded-full animate-pulse-slow relative">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1.5 left-1.5" />
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-yellow-500 animate-expand-line delay-500" />
          </div>
        </div>

        <h2 className="text-lg text-yellow-500 uppercase tracking-[0.3em] font-bold relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            Our Premium Packages
          </span>
          
          {/* Subtitle glow effect */}
          <div className="absolute inset-0 text-lg text-yellow-400 blur-lg opacity-20 uppercase tracking-[0.3em] font-bold">
            Our Premium Packages
          </div>
        </h2>
        
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white mt-4 mb-8 leading-tight relative">
          <span className="relative">
            Choose Your Perfect Experience
            
            {/* Title shadow effect */}
            <div className="absolute inset-0 text-4xl md:text-5xl font-black text-white  opacity-90 -z-10">
              Choose Your Perfect Experience
            </div>
          </span>
          
          {/* Animated underline */}
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 transition-all duration-1500 delay-800 ${
            isVisible ? 'w-64' : 'w-0'
          }`} />
        </h1>

        {/* Package count indicator */}
        <div className={`flex justify-center mt-6 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center group">
            <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">{packages.length}</div>
            <div className="text-xs text-gray-400">Premium Packages</div>
          </div>
        </div>
      </div>

      {/* Enhanced Packages Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } ${expandedPackage === index ? 'md:col-span-2 lg:col-span-3' : ''}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Package Card */}
            <div
              className={`group relative bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden border border-yellow-500/20 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-yellow-500/25 hover:shadow-2xl ${
                expandedPackage === index ? 'scale-105 shadow-yellow-500/30 shadow-2xl' : ''
              }`}
              onClick={() => handlePackageClick(index)}
            >
              
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-4 py-2 rounded-full animate-pulse shadow-lg">
                    POPULAR
                  </div>
                </div>
              )}

              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Image with overlay effects */}
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    expandedPackage === index ? 'h-80' : 'h-56'
                  }`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-black/40 to-black relative">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500 mb-3 group-hover:text-yellow-500 transition-all duration-300">
                  {pkg.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {pkg.description}
                </p>
                
                {/* Price highlight */}
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black text-yellow-500 group-hover:animate-pulse">
                    {pkg.details.price}
                  </span>
                  
                  {/* Expand indicator */}
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <span className="text-sm font-semibold">
                      {expandedPackage === index ? 'Less Details' : 'View Details'}
                    </span>
                    <div className={`transform transition-transform duration-300 ${
                      expandedPackage === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details Section */}
              <div className={`overflow-hidden transition-all duration-700 ${
                expandedPackage === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0 bg-gradient-to-b from-black/60 to-black/80 border-t border-yellow-500/20">
                  
                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-yellow-500/15 to-transparent p-4 rounded-xl border border-yellow-500/30">
                        <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">Duration</span>
                        <p className="text-xl font-semibold text-white">{pkg.details.timeOnSite}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-yellow-500/15 to-transparent p-4 rounded-xl border border-yellow-500/30">
                        <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">Photographer</span>
                        <p className="text-lg font-semibold text-white">{pkg.details.photographer}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 border-b border-yellow-500/20">
                        <span className="text-yellow-400 font-semibold">Photos:</span>
                        <span className="text-white font-bold">{pkg.details.photos}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-yellow-500/20">
                        <span className="text-yellow-400 font-semibold">Drone Photos:</span>
                        <span className="text-white font-bold">{pkg.details.dronePhotos}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-yellow-500/20">
                        <span className="text-yellow-400 font-semibold">Video:</span>
                        <span className="text-white font-bold text-sm">{pkg.details.video}</span>
                      </div>
                      {pkg.details.twilight && (
                        <div className="flex justify-between items-center py-3 border-b border-yellow-500/20">
                          <span className="text-yellow-400 font-semibold">Twilight:</span>
                          <span className="text-white font-bold text-sm">{pkg.details.twilight}</span>
                        </div>
                      )}
                      {pkg.details.cameraGear && (
                        <div className="flex justify-between items-center py-3">
                          <span className="text-yellow-400 font-semibold">Equipment:</span>
                          <span className="text-white font-bold text-sm">{pkg.details.cameraGear}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-6 text-center">
                    <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Book This Package
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(50px, -60px) rotate(5deg); }
          50% { transform: translate(-45px, -70px) rotate(-5deg); }
          75% { transform: translate(-55px, -50px) rotate(4deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(15deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(2) rotate(90deg); }
          50% { opacity: 0.7; transform: scale(0.8) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.8) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2) rotate(45deg);
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
          50% { transform: translateY(-40px) rotate(25deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 5rem; }
        }
        
        .animate-float-large { animation: float-large 35s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 12s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 7s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 16s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 55s linear infinite; }
        .animate-spin-slow { animation: spin-slow 35s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 8s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 3s ease-out forwards; }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.08) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}