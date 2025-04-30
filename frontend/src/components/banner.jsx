import React from "react";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(150, 40, 40, 0) 70%, rgba(2,2,2,0.7) 92%, black), url('./banner.jpg')",
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Empty space on left side for larger screens */}
        <div className="hidden md:block"></div>

        {/* Content Section */}
        <div
          className="text-white text-center md:text-left px-4"
          data-aos="fade-down"
          data-aos-duration="1700"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-satisfy bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-snug mb-6">
            Capturing the emotions of your special day
          </h1>

          <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-8">
            <i className="text-base sm:text-lg">
              ? takes the work out of finding a photographer with a team of
              hand-picked professionals ready to be matched to your wedding
              based on your wants and needs.
            </i>
          </p>

          <Link to="/addPackage">
            <button className="relative inline-block w-full sm:w-auto px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold uppercase tracking-wider overflow-hidden group hover:text-black transition">
              <span className="absolute w-0 h-full bg-orange-600 top-0 left-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
              <span className="relative z-10">All Packages</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
