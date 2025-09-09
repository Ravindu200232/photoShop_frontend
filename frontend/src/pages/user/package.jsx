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
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-black via-gray-900 to-black relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header with staggered animation */}
      <div className={`relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-lg text-yellow-500 uppercase tracking-[0.3em] font-bold animate-pulse">
          ✨ Our Premium Packages ✨
        </h2>
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-500 to-white mt-4 mb-8 leading-tight">
          Choose Your <span className="relative inline-block">
            <span className="text-yellow-500 animate-pulse">Perfect</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
          </span> Experience
        </h1>
      </div>

      {/* Packages grid with staggered entrance */}
      <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden border border-yellow-500/20 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:-translate-y-2 hover:shadow-yellow-500/25 hover:shadow-2xl flex-col flex ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ animationDelay: `${index * 200}ms` }}
            onClick={() => handlePackageClick(pkg)}
          >
            {/* Popular badge */}
            {pkg.popular && (
              <div className="absolute -top-2 -right-2 z-20">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full animate-bounce shadow-lg">
                  🔥 POPULAR
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
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 bg-gradient-to-b from-black/40 to-black flex-grow relative">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500 mb-3 group-hover:text-yellow-500 transition-all duration-300">
                {pkg.title}
              </h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                {pkg.description}
              </p>
              
              {/* Price highlight */}
              <div className="absolute bottom-4 right-4">
                <span className="text-2xl font-black text-yellow-500 group-hover:animate-pulse">
                  {pkg.details.price}
                </span>
              </div>

              {/* Animated hover indicator */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <span className="text-yellow-500 text-sm font-semibold">Click to explore →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-xl bg-black/80 px-4 animate-fadeIn">
          <div className="relative bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-sm border-2 border-yellow-500/40 p-8 rounded-3xl max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh] animate-slideUp">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 rounded-3xl"></div>
            
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-yellow-500 hover:text-white hover:bg-yellow-500/20 text-2xl font-bold transition-all duration-300 rounded-full hover:rotate-90 hover:scale-110"
            >
              ×
            </button>

            <div className="relative z-10">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-white mb-6">
                {selectedPackage.title}
              </h2>
              
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-xl border border-yellow-500/20">
                    <span className="text-yellow-500 font-bold text-sm uppercase tracking-wide">Price</span>
                    <p className="text-3xl font-black text-white">{selectedPackage.details.price}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-xl border border-yellow-500/20">
                    <span className="text-yellow-500 font-bold text-sm uppercase tracking-wide">Duration</span>
                    <p className="text-xl font-semibold text-white">{selectedPackage.details.timeOnSite}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-yellow-500/20">
                      <span className="text-yellow-500 font-semibold">Photos:</span>
                      <span className="text-white font-bold">{selectedPackage.details.photos}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-yellow-500/20">
                      <span className="text-yellow-500 font-semibold">Drone Photos:</span>
                      <span className="text-white font-bold">{selectedPackage.details.dronePhotos}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-yellow-500/20">
                      <span className="text-yellow-500 font-semibold">Video:</span>
                      <span className="text-white font-bold text-sm">{selectedPackage.details.video}</span>
                    </div>
                    {selectedPackage.details.twilight && (
                      <div className="flex justify-between items-center py-2 border-b border-yellow-500/20">
                        <span className="text-yellow-500 font-semibold">Twilight:</span>
                        <span className="text-white font-bold text-sm">{selectedPackage.details.twilight}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent rounded-xl border border-yellow-500/30">
                <span className="text-yellow-500 font-bold text-sm uppercase tracking-wide">Photographer</span>
                <p className="text-white font-semibold text-lg">{selectedPackage.details.photographer}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}