import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-screen bg-black text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between px-6 md:px-12 gap-8">
        {/* About Section */}
        <div className="w-full sm:w-[45%] md:w-1/4 text-center md:text-left">
          <h1 className="text-xl font-semibold mb-4">About Roy</h1>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/about" className="hover:text-white">
                My Story
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:text-white">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full sm:w-[45%] md:w-1/4 text-center md:text-left">
          <h1 className="text-xl font-semibold mb-4">Photography Services</h1>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/services/real-estate" className="hover:text-white">
                Real Estate Photography
              </a>
            </li>
            <li>
              <a href="/services/commercial" className="hover:text-white">
                Commercial Projects
              </a>
            </li>
            <li>
              <a href="/services/events" className="hover:text-white">
                Event Coverage
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-[45%] md:w-1/4 text-center md:text-left">
          <h1 className="text-xl font-semibold mb-4">Get in Touch</h1>
          <p className="text-gray-400">Email: rohitha.me94@gmail.com</p>
          <p className="text-gray-400">Phone: +64 204166 3202</p>
          <p className="text-gray-400">Location: Auckland, New Zealand</p>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-[45%] md:w-1/4 text-center md:text-left">
          <h1 className="text-xl font-semibold mb-4">Follow Me</h1>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} ROYFILMS. All rights reserved.
      </div>
    </footer>
  );
}
