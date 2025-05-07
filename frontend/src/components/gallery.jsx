import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import wedding1 from "/g1.jpg";
import wedding2 from "/g2.jpg";
import wedding3 from "/g3.jpg";
import wedding4 from "/g4.jpg";
import wedding6 from "/g6.jpg";
import wedding8 from "/g9.jpg";

export function SmallGallery() {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);

  const images = [
    { src: wedding1, anim: "fade-right" },
    { src: wedding4, anim: "fade-right" },
    { src: wedding3, anim: "fade-up" },
    { src: wedding2, anim: "fade-down" },
    { src: wedding6, anim: "fade-up" },
    { src: wedding8, anim: "fade-down" },
  ];

  return (
    <div className="w-full px-4 py-10 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* First vertical stack */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded" data-aos={images[0].anim}>
            <img
              src={images[0].src}
              alt=""
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded" data-aos={images[1].anim}>
            <img
              src={images[1].src}
              alt=""
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>

        {/* Second column */}
        <div className="overflow-hidden rounded" data-aos={images[2].anim}>
          <img
            src={images[2].src}
            alt=""
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Third vertical stack */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded" data-aos={images[3].anim}>
            <img
              src={images[3].src}
              alt=""
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded" data-aos={images[4].anim}>
            <img
              src={images[4].src}
              alt=""
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>

        {/* Fourth column */}
        <div className="overflow-hidden rounded" data-aos={images[5].anim}>
          <img
            src={images[5].src}
            alt=""
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
