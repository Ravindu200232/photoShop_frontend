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

import React, { useState, useEffect } from "react";

// Mock icons
const FaWhatsapp = () => <span className="text-2xl">📱</span>;
const FaEnvelope = () => <span className="text-2xl">✉️</span>;
const FaPhone = () => <span className="text-2xl">📞</span>;
const FaGlobe = () => <span className="text-2xl"></span>;
const FaMapMarkerAlt = () => <span className="text-2xl"></span>;
const FaPlus = () => <span className="text-xl font-bold">＋</span>;
const FaTimes = () => <span className="text-xl font-bold">✖</span>;

export function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contacts = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/+642041663202",
      title: "WhatsApp Chat",
      subtitle: "Instant messaging worldwide",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      textColor: "text-green-400",
    },
    {
      id: "email",
      icon: <FaEnvelope />,
      href: "mailto:rohitha.me94@gmail.com",
      title: "Email Us",
      subtitle: "Professional correspondence",
      color: "from-yellow-500 to-orange-500",
      hoverColor: "hover:from-yellow-400 hover:to-orange-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      textColor: "text-yellow-400",
    },
    {
      id: "phone",
      icon: <FaPhone />,
      href: "tel:+642041663202",
      title: "Call Direct",
      subtitle: "Immediate assistance",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-400 hover:to-cyan-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
    },
  ];

  return (
    <div className="relative">
      <div style={{ marginTop: "60px" }} className="bg-black">
        <Banner />
        <Team />
        <FeatureCards />
        <Services />
        <SmallGallery />
        <NewsLetter />
        <Blog />
        <AddWeekNumber />
        <Reviews />
      </div>

      {/* Floating Button + Collapsible Contact Section */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-xl hover:scale-110 transition-transform"
        >
          {isOpen ? <FaTimes /> : <FaPlus />}
        </button>

        {/* Contact Widget */}
        {isOpen && (
          <div className="mt-4 relative">
            <div className="relative bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-yellow-500/20">
              {/* World-wide Header */}
              <div className="text-center mb-4 relative">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaGlobe />
                  <span className="text-yellow-500 text-sm font-bold uppercase tracking-wider">
                    Worldwide Service
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 text-white/60 text-xs">
                  <FaMapMarkerAlt />
                  <span>Available 24/7 Globally</span>
                </div>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mt-2 animate-pulse"></div>
              </div>

              {/* Contact Methods */}
              <div className="flex flex-col gap-3">
                {contacts.map((contact, index) => (
                  <div
                    key={contact.id}
                    className="relative group"
                    onMouseEnter={() => setActiveContact(contact.id)}
                    onMouseLeave={() => setActiveContact(null)}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <a
                      href={contact.href}
                      target={contact.id !== "phone" ? "_blank" : ""}
                      rel="noopener noreferrer"
                      className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 ${contact.borderColor} ${contact.bgColor} backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-current/25`}
                      title={contact.title}
                    >
                      {/* Icon */}
                      <div
                        className={`relative flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${contact.color} ${contact.hoverColor} flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg`}
                      >
                        <div className="relative z-10">{contact.icon}</div>
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                      </div>

                      {/* Info */}
                      <div className="flex-grow min-w-0">
                        <div
                          className={`font-semibold ${contact.textColor} text-sm transition-colors duration-300 group-hover:text-white`}
                        >
                          {contact.title}
                        </div>
                        <div className="text-white/60 text-xs mt-0.5 group-hover:text-white/80 transition-colors duration-300">
                          {contact.subtitle}
                        </div>
                      </div>

                      {/* Indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div
                          className={`w-2 h-2 rounded-full ${contact.color.replace(
                            "from-",
                            "bg-"
                          ).split(" ")[0]} animate-pulse`}
                        ></div>
                      </div>

                      {/* Glow */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                      ></div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="text-center mt-4 pt-3 border-t border-white/10">
                <div className="text-white/40 text-xs flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Ready to serve you anywhere</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
