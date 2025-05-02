import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export function Team() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Image Section */}
          <div className="relative" data-aos="fade-left">
            <div className="w-full">
              <img
                src={"./t1.jpg"}
                alt="Photographer 1"
                className="w-full rounded-[80px] brightness-75 contrast-115 saturate-100"
              />
            </div>
            <div className="absolute w-[48%] -bottom-8 md:-right-12 right-0" data-aos="fade-up">
              <img
                src={"./t3.jpg"}
                alt="Photographer 2"
                className="w-full rounded-[50px] brightness-75 contrast-115 saturate-100"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="text-white" data-aos="fade-right">
            <div className="pt-10">
              <h4 className="text-yellow-400 text-lg font-semibold mb-3">Our Photographer</h4>
              <h1 className="text-3xl md:text-4xl font-poppins text-[#e8e4e4bf] leading-tight mb-6">
                The trusted, professional wedding photography team loved by couples
              </h1>
            </div>
            <div className="border-b border-white/20 pb-9">
              <p className="text-gray-400 text-justify">
                Your photographer will get in touch closer to your wedding to go over all of your
                on-day details. You can contact our team at any time to update your details and
                provide us with more information on your wedding. After your wedding your images are
                all provided to our team of professional photo editors who will edit them in style
                - beautiful, bright and colourful. You will receive all of your images as high
                resolution jpegs ready to print and share.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
