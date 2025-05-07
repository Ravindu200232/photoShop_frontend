import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import blog1 from "/blog1.png";
import blog2 from "/blog2.png";
import blog3 from "/blog3.png";

export function Blog() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  return (
    <div className="bg-black py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Titles */}
        <div className="mb-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div data-aos="fade-down" className="text-left">
              <h3 className="text-warning text-lg font-light ml-14 relative before:absolute before:left-0 before:top-2.5 before:w-24 before:h-[2px] before:bg-orange-600">
                Our Blogs
              </h3>
              <h1 className="text-3xl md:text-5xl text-white font-bold mt-2">
                BLOGS & ARTICLE
              </h1>
            </div>
            <div className="text-right hidden">
              {/* Optional: Blog Filter Button */}
              {/* <button className="bg-orange-600 text-white px-6 py-3 rounded text-lg mt-4">
                All Blogs
              </button> */}
            </div>
          </div>
        </div>

        {/* Blog Articles */}
        <div className="grid md:grid-cols-7 gap-6">
          {/* Large Main Blog */}
          <div className="md:col-span-4" data-aos="fade-down">
            <div className="mb-6">
              <img src={blog1} alt="Blog 1" className="w-full h-auto rounded" />
              <div className="text-white mt-4 text-left">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-300">
                10 Tips for Capturing Stunning Property Photos on a Budget
                </h1>
                <small className="block text-gray-400 mt-3 mb-3">
                May 1, 2025
                </small>
                <p className="text-gray-400 leading-relaxed text-sm">
                You don’t need a massive budget to make your listing stand out. From choosing the right time of day to preparing each space properly, these tips will help you get the most out of your shoot without overspending...
                </p>
                <button disabled className="text-orange-600 mt-4 text-sm">
                  read more
                </button>
              </div>
            </div>
          </div>

          {/* Smaller Blogs */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Blog 2 */}
            <div data-aos="fade-down">
              <img
                src={blog2}
                alt="Blog 2"
                className="w-full h-44 object-cover rounded"
              />
              <div className="text-white mt-3 text-left">
                <h1 className="text-lg font-medium text-gray-300">
                How to Get the Best Results From Your Photographer
                </h1>
                <small className="block text-gray-400 mt-2">April 20, 2025</small>
                <p className="text-gray-400 text-sm leading-relaxed">
                Real estate photography is a team effort. Learn how agents, homeowners, and photographers can work together before and during the shoot to ensure the best visual outcome...
                </p>
                <button disabled className="text-orange-600 mt-2 text-sm">
                  read more
                </button>
              </div>
            </div>

            {/* Blog 3 */}
            <div data-aos="fade-down">
              <img
                src={blog3}
                alt="Blog 3"
                className="w-full h-44 object-cover rounded"
              />
              <div className="text-white mt-3 text-left">
                <h1 className="text-lg font-medium text-gray-300">
                Maximizing the Value of Your Property Shoot
                </h1>
                <small className="block text-gray-400 mt-2">April 5, 2025</small>
                <p className="text-gray-400 text-sm leading-relaxed">
                As a seasoned real estate photographer, my job is to showcase your space in the best light. Here’s how you can prepare and what to expect to ensure top-notch results from your shoot...
                </p>
                <button disabled className="text-orange-600 mt-2 text-sm">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
