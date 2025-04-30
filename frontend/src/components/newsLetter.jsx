import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function NewsLetter() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage:
          `linear-gradient(180deg, rgba(0,0,0,0.43) 60%, #020202), url(https://i.ibb.co/zSS31yY/groom-black-tuxedo-hugs-tender-stunning-bride-while-they-stand-8353-8050.jpg)`
      }}
    >
      <div className="w-full px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" className="text-white">
            <h3 className="text-warning text-lg font-light relative pl-32 mb-2 before:absolute before:left-0 before:top-2.5 before:w-24 before:h-[2px] before:bg-orange-600">
              Our Newsletter
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SUBSCRIBE & GET 10% OFF
            </h1>
            <p className="text-gray-300 text-sm">
              Get updated on every new offer on your packages. We would be happy to help you coordinate the perfect photographer with the perfect package for your big day. We are available to talk — just email anytime!
            </p>
            <div className="mt-8">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-6 py-3 w-full sm:w-auto flex-1 text-black rounded"
                />
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div></div> {/* Right side left intentionally empty like your original */}
        </div>
      </div>
    </div>
  );
}
