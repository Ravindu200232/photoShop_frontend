import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "t1.jpg",
    thumbnail: "t1.jpg",
    description: "Image 1",
  },
  {
    original: "t2.jpg",
    thumbnail: "t2.jpg",
    description: "Image 2",
  },
  {
    original: "t3.jpg",
    thumbnail: "t3.jpg",
    description: "Image 3",
  },
  {
    original: "t4.jpg",
    thumbnail: "t4.jpg",
    description: "Image 4",
  },
  {
    original: "b1.jpg",
    thumbnail: "b1_thumb.jpg",
    description: "Image 5",
  },
  {
    original: "b2.jpg",
    thumbnail: "b2.jpg",
    description: "Image 6",
  },
  {
    original: "b3.jpg",
    thumbnail: "b3.jpg",
    description: "Image 7",
  },
  {
    original: "g4.jpg",
    thumbnail: "g4.jpg",
    description: "Image 8",
  },
  {
    original: "g5.jpg",
    thumbnail: "g5.jpg",
    description: "Image 9",
  },
];

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
      <ImageGallery  items={images} />
      </div>
     
    </div>
  );
}
