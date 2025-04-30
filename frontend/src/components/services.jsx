import React from 'react';

export function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10" data-aos="fade-right" data-aos-duration="1700">
      <div className="text-center mb-12" data-aos="fade-right" data-aos-duration="1900">
        <h2 className="text-2xl font-satisfy text-yellow-500">Enjoy Our</h2>
        <h1 className="text-5xl font-bold text-white">Quality Services</h1>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          ? specialises in event photography with the natural reportage documentation of special occasions and celebrations,
          producing the highest quality imagery that showcase your wedding and event in its best possible light. Whatever and
          whenever your occasion happens, our multi-talented event photographers will cover your occasion to your exact requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-left" data-aos-duration="1900">
        {/* Service Card 1 */}
        <div className="bg-white rounded-lg text-center shadow-md p-6 transition-transform hover:-translate-y-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5848/5848821.png"
            alt="Photographer"
            className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h5 className="text-lg font-semibold mb-2">Expert Photographer</h5>
          <p className="text-sm text-gray-600">All of our photographers have over 10 years of experience for 200+ clients of all types.</p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white rounded-lg text-center shadow-md p-6 transition-transform hover:-translate-y-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3175/3175170.png"
            alt="Shooting Locations"
            className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h5 className="text-lg font-semibold mb-2">Shooting Locations</h5>
          <p className="text-sm text-gray-600">Exotic photo shooting locations for the beautiful wedding that you always wanted!</p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white rounded-lg text-center shadow-md p-6 transition-transform hover:-translate-y-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1005/1005735.png"
            alt="Makeup Artist"
            className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h5 className="text-lg font-semibold mb-2">Makeup Artist</h5>
          <p className="text-sm text-gray-600">You will be accompanied by our expert makeup artist so that you look gorgeous.</p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-white rounded-lg text-center shadow-md p-6 transition-transform hover:-translate-y-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2706/2706861.png"
            alt="Support"
            className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h5 className="text-lg font-semibold mb-2">24h Support</h5>
          <p className="text-sm text-gray-600">Get 24/7 customer support. If you have any query, call or email us anytime.</p>
        </div>
      </div>
    </div>
  );
}
