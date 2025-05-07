import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [];
for (let i = 1; i <= 26; i++) {
  images.push({
    original: `v${i}.jpg`,
    thumbnail: `v${i}.jpg`,
    description: `MYCAM ${i}`,
  });
}

export function Gallery() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-gray-900 to-black relative">
      <h2 className="text-lg text-white uppercase tracking-wide">
        Our Gallery
      </h2>
      <h1 className="text-3xl font-bold text-white mt-2 mb-6">
        Explore Our Work
      </h1>
      <div className="max-w-4xl mx-auto">
        <ImageGallery items={images} />
      </div>
      {/* Separate Gallery */}
      <div className="w-full px-4 py-10 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded"
              data-aos={image.anim}
            >
              <img
                src={image.original}
                alt={image.description}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
