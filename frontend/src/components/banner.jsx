import React from "react";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <div className="banner h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
        <div className="hidden md:block"></div>

        <div
          className="text-white text-center md:text-left px-4"
          data-aos="fade-down"
          data-aos-duration="1700"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-satisfy leading-snug mb-6">
            Capturing the emotions of your special day
          </h1>

          <div className="text-sm sm:text-base font-medium text-white mb-8">
            <span className="text-red-600 text-2xl font-bold block">
              Welcome to ROYFILMS
            </span>
            <p className="text-base sm:text-lg font-bold mt-2">
              At ROYFILMS, we capture real estate and commercial spaces with
              stunning photography and videography. Whether you're a realtor or
              business owner, we deliver clean, standout visuals with creativity
              and care.
            </p>
          </div>

          <Link to="/package">
            <button className="relative inline-block w-full sm:w-auto px-6 py-3 border-4 border-orange-600 text-orange-600 font-semibold uppercase tracking-wider overflow-hidden group hover:text-black transition">
              <span className="absolute w-0 h-full bg-orange-600  top-0 left-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
              <span className="relative z-10 font-bold">All Packages</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
