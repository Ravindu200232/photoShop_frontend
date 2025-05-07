import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: "spring" },
        }}
      >
        <h3 className="text-lg text-gray-400 tracking-wide mb-2">
          <FaUser className="inline-block mr-2 text-primary" />
          Something About Myself
        </h3>
        <h1 className="text-4xl font-bold drop-shadow-sm">
          About <span className="text-primary">Me</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <img
            src="/profile.jpg"
            alt="Rohitha Prabath"
            className="w-full h-auto max-w-sm mx-auto rounded-xl shadow-2xl"
            title="Rohitha Prabath"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <h2 className="text-3xl font-semibold mb-2 text-center md:text-left">
          Roy Dissanayake
          </h2>

          <div className="mb-6">
            <TypeAnimation
              className="text-xl sm:text-2xl font-bold text-primary text-center md:text-left"
              cursor
              sequence={[
                "A Photographer",
                2000,
                "A Designer",
                2000,
                "A Creator",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 text-justify leading-relaxed">
          Hi, I’m Roy Dissanayake, the founder of ROYFILMS, based in Hamilton. I started this journey with a passion for photography and a strong interest in real estate and commercial spaces. With a creative eye and a commitment to quality, I aim to provide clean, professional, and engaging visual content that helps clients market their properties with confidence. Whether you're selling a home, showcasing a business, or promoting a new development, I’m here to capture the details that make your space stand out. As a growing business, I value every client and always strive to deliver results that exceed expectations.  
          </p>
          

          {/* Contact Info + Portfolio Button */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-sm">
            <div className="flex items-center gap-2">
              <FaUser className="text-primary" />
              <span>Roy Dissanayake</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-primary" />
              <span>+64 21 234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <span>rohitha@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Auckland, New Zealand</span>
            </div>
          </div>

          {/* Portfolio Button */}
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-semibold hover:bg-opacity-90 transition-all"
            >
              <FaDownload />
              <span>View My Portfolio</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
