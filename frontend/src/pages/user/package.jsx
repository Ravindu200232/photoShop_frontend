import React, { useState } from 'react';

const packages = [
  {
    title: 'Standard Media Package📸',
    image: 't1.jpg',
    description: '10 Photos, 2D Floor Plan, $395',
    details: {
      photos: 10,
      dronePhotos: 0,
      video: 'None',
      floorPlan: '2D',
      price: '$395',
      timeOnSite: '45 min',
      photographer: 'John Doe',
      cameraGear: 'Canon EOS R5, 24-70mm f/2.8',
    },
  },
  {
    title: 'Gold Media Package⭐',
    image: 't2.jpg',
    description: '20 Photos, 4 Drone Photos, $495',
    details: {
      photos: 20,
      dronePhotos: 4,
      video: 'None',
      floorPlan: '2D',
      price: '$495',
      timeOnSite: '1 hr',
      photographer: 'Jane Smith',
      cameraGear: 'Nikon Z7, 70-200mm f/2.8',
    },
  },
  {
    title: 'Diamond Media Package🎬',
    image: 't3.jpg',
    description: '20 Photos, 4 Drone Photos, Cinematic Video + Drone Video, $795',
    details: {
      photos: 20,
      dronePhotos: 4,
      video: 'Cinematic Video + Drone Video',
      floorPlan: '2D',
      price: '$795',
      timeOnSite: '2.5 hrs',
      photographer: 'Emily Clark',
      cameraGear: 'Sony A7R IV, 24-70mm f/2.8, DJI Phantom 4 Pro',
    },
  },
  {
    title: 'Platinum Media Package📱🌐',
    image: 't4.jpg',
    description: '20 Photos, 4 Drone Photos, Vertical Reel for Social Media, $750',
    details: {
      photos: 20,
      dronePhotos: 4,
      video: 'Vertical Reel for Social Media',
      floorPlan: '2D',
      price: '$750',
      timeOnSite: '2.5 hrs',
      photographer: 'David Lee',
      cameraGear: 'Fujifilm X-T4, 16-80mm f/4, DJI Mavic Air 2',
    },
  },
  {
    title: 'X Package🏹 (Go All-In)',
    image: 'b1.jpg',
    description: '25 Photos, 6 Drone Photos, Cinematic Video + Drone Video, Twilight Shoot, $1095',
    details: {
      photos: 25,
      dronePhotos: 6,
      video: 'Cinematic Video + Drone Video',
      floorPlan: '2D',
      twilight: 'Twilight Video + Photo shoot',
      price: '$1095',
      timeOnSite: '3 hrs + 20 min at twilight',
      photographer: 'Michael Brown',
      cameraGear: 'Canon EOS R6, 70-200mm f/2.8, DJI Mavic Pro 2',
    },
  },
];

export default function Package() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-gray-900 to-black relative min-h-screen">
      <h2 className="text-lg text-white uppercase tracking-wide">Our Packages</h2>
      <h1 className="text-3xl font-bold text-white mt-2 mb-6">Choose the Best Plan for You</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition hover:scale-105"
            onClick={() => handlePackageClick(pkg)}
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="absolute inset-0 z-50 flex justify-center items-center backdrop-blur-md bg-white/10 px-4">
        <div className="relative bg-white p-8 rounded-lg max-w-lg w-full shadow-lg overflow-y-auto max-h-screen">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedPackage.title}</h2>
          <img
            src={selectedPackage.image}
            alt={selectedPackage.title}
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <ul className="text-left space-y-2 text-gray-700 text-lg">
            <li><strong>Price:</strong> {selectedPackage.details.price}</li>
            <li><strong>Time on Site:</strong> {selectedPackage.details.timeOnSite}</li>
            <li><strong>Photographer:</strong> {selectedPackage.details.photographer}</li>
            <li><strong>Camera Gear:</strong> {selectedPackage.details.cameraGear}</li>
            <li><strong>Photos:</strong> {selectedPackage.details.photos}</li>
            <li><strong>Drone Photos:</strong> {selectedPackage.details.dronePhotos}</li>
            <li><strong>Floor Plan:</strong> {selectedPackage.details.floorPlan}</li>
            <li><strong>Video:</strong> {selectedPackage.details.video}</li>
            {selectedPackage.details.twilight && (
              <li><strong>Twilight:</strong> {selectedPackage.details.twilight}</li>
            )}
          </ul>
        </div>
      </div>
      
      )}
    </div>
  );
}
