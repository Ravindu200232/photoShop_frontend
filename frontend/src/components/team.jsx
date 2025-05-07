import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
                src={"./t3.jpg"}
                alt="Photographer 1"
                className="w-[600px] h-[400px] md:h-[600px] object-cover  rounded-[80px] brightness-75 contrast-115 saturate-100"
              />
            </div>
            <div
              className="absolute w-[48%] -bottom-8 md:-right-12 right-0"
              data-aos="fade-up"
            >
              <img
                src={"./t1.jpg"}
                alt="Photographer 2"
                className="w-[300px] h-[200px] md:h-[300px] object-cover   rounded-[50px] brightness-75 contrast-115 saturate-100"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="text-white" data-aos="fade-right">
            <div className="pt-10">
              <h4 className="text-yellow-400 text-4xl font-semibold mb-3">
                Our Photographer
              </h4>
              <h1 className="text-3xl md:text-3xl font-poppins text-[#e8e4e4bf] leading-tight mb-6">
              The trusted, professional photography team preferred by agents, developers, and business owners
              </h1>
            </div>
            <div className="border-b border-white/20 pb-9">
              <p className="text-gray-400 text-justify">
                At ROYFILMS, our photographer brings passion, a fresh
                perspective, and a sharp eye for detail to every project. As a
                dedicated newcomer in the field, we combine creativity with the
                latest techniques to deliver stunning visuals that highlight
                what makes your property unique. We don’t just take pictures we
                capture stories, moods, and moments that help buyers connect.
                Professional, approachable, and committed to quality, our goal
                is simple: to make your property look its absolute best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
