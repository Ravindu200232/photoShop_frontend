

import { Banner } from "../../components/banner";
import { Blog } from "../../components/blog";
import AddWeekNumber from "../../components/calender";
import FeatureCards from "../../components/fetaureCard";
import Footer from "../../components/footer";
import { SmallGallery } from "../../components/gallery";
import { Navbar } from "../../components/navbar";
import { NewsLetter } from "../../components/newsLetter";
import Reviews from "../../components/reviews";
import { Services } from "../../components/services";
import { Team } from "../../components/team";

import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export function Home() {
  return (
    <div>
      <div style={{ marginTop: "60px" }} className="bg-black">
        <Banner />
        <Team />
        <FeatureCards />
        <Services/>
        <SmallGallery />
        <NewsLetter />
        <Blog />
       <AddWeekNumber/>
        <Reviews />
      </div>

      {/* Floating Contact Me Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-primary p-4 rounded-full shadow-lg flex flex-col gap-3 items-center">
          <a
            href="https://wa.me/+642041663202" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-green-300"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:rohitha.me94@gmail.com" // Replace with your email
            target=""
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-yellow-300"
            title="Send Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+642041663202" // Replace with your phone number
            className="text-white text-2xl hover:text-blue-300"
            title="Call Now"
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
}
