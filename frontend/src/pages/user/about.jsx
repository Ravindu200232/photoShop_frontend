import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 px-8 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: "spring" },
        }}
      >
        <h3 className="text-lg text-neutral">Something About Myself</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md">
          About <span className="text-primary">Me</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
        >
          <img
            src="/profile.jpg" // Ensure this path is correct
            alt="Rohitha Prabath"
            className="w-full h-auto max-w-xs mx-auto object-cover rounded-lg shadow-lg"
            title="Rohitha Prabath"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center sm:text-2xl md:text-left">
            Rohitha Prabath
          </h2>
          <div className="my-6">
            <TypeAnimation
              className="text-2xl text-primary font-bold text-center sm:text-xl md:text-left"
              cursor={true}
              sequence={[
                "A Photographer",
                2000,
                "A Designer",
                2000,
                "A Creator",
                2000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />
          </div>
          <p className="text-neutral font-medium text-center sm:mb-2 md:text-left">
            I am a passionate photographer based in New Zealand, dedicated to
            capturing the essence of moments through my lens. My work spans
            various genres, including portrait, landscape, and event
            photography, aiming to tell compelling stories with each shot.
          </p>

          <p className="text-neutral font-medium text-center sm:mb-2 md:text-left">
            With a keen eye for detail and a love for natural light, I strive to
            create images that resonate emotionally and artistically. Whether
            it's a wedding, a family gathering, or the serene landscapes of New
            Zealand, my goal is to immortalize the beauty of life as it unfolds.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-6 text-center sm:mb-2 md:text-left">
            <h3 className="font-medium">
              <span className="mr-2 text-primary">Name : </span>Rohitha Prabath
            </h3>
            <h3 className="font-medium">
              <span className="mr-2 text-primary">Phone : </span>+64 21 234 5678
            </h3>
            <h3 className="font-medium">
              <span className="mr-2 text-primary">Email : </span>
              rohitha@example.com
            </h3>
            <h3 className="font-medium">
              <span className="mr-2 text-primary">Location : </span>Auckland,
              New Zealand
            </h3>
            <a
              href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center md:justify-start">
                <button className="primary-button">
                  <span>My Portfolio</span>
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
