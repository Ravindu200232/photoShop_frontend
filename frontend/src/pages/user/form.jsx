import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const anon_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGh0c2dlenJnb2JkeWxvbGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NTUzMzAsImV4cCI6MjA1NTUzMTMzMH0.NbKShjJ6vuO_1kaZ2nOYa1t1R3dUeN5msPpqKe2vRSE";

const supabase_url = "https://vithtsgezrgobdyloldb.supabase.co";

const supabase = createClient(supabase_url, anon_key);

export default function HamiltonHomeForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    lookingTo: "",
    contactMethod: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.lookingTo
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          looking_to: formData.lookingTo,
          contact_method: formData.contactMethod || null,
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        lookingTo: "",
        contactMethod: "",
      });
    } catch (error) {
      console.error("Supabase insert error:", error);
      setSubmitStatus("error");
      alert(error.message || "There was an error saving your inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/IMG_0774.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Welcome! Let's Find Your Perfect Home in Hamilton
                </h1>
                <p className="text-blue-100 text-lg">
                  Fill out this short form so we can understand what you're
                  looking for.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 mb-8">
                <p className="text-white text-sm">
                  <span className="font-semibold text-blue-200">
                    Your Privacy Matters:
                  </span>{" "}
                  Your information will be kept confidential and used only to
                  help you find the right property.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 mb-6">
                  <p className="text-green-100 font-semibold">
                    ✓ Thank you! Your inquiry has been saved successfully.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-4 mb-6">
                  <p className="text-red-100 font-semibold">
                    ✗ There was an error. Please try again.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all outline-none text-white placeholder-white/60"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all outline-none text-white placeholder-white/60"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all outline-none text-white placeholder-white/60"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-3 text-sm uppercase tracking-wider">
                    Are you looking to <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Buy", "Sell", "Invest"].map((option) => (
                      <label key={option} className="relative">
                        <input
                          type="radio"
                          name="lookingTo"
                          value={option}
                          checked={formData.lookingTo === option}
                          onChange={handleChange}
                          className="absolute opacity-0"
                        />
                        <div
                          className={`flex flex-col items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            formData.lookingTo === option
                              ? "bg-blue-500/30 border-blue-400"
                              : "bg-white/5 border-white/20 hover:bg-white/10"
                          }`}
                        >
                          <span className="text-white font-medium">
                            {option}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3 text-sm uppercase tracking-wider">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Phone", "Email", "WhatsApp"].map((method) => (
                      <label key={method} className="relative">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleChange}
                          className="absolute opacity-0"
                        />
                        <div
                          className={`flex flex-col items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            formData.contactMethod === method
                              ? "bg-blue-500/30 border-blue-400"
                              : "bg-white/5 border-white/20 hover:bg-white/10"
                          }`}
                        >
                          <span className="text-white font-medium">
                            {method}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                >
                  {isSubmitting ? "Saving..." : "Submit Inquiry"}
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-900/40 to-blue-800/30 p-8 md:p-10 flex flex-col justify-center backdrop-blur-xl border-l border-white/10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                  <img
                    src="/IMG_0574.PNG"
                    alt="Roy Dissanayake"
                    className="relative w-48 h-48 object-cover rounded-full border-4 border-white/30 shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{ display: "none" }}
                    className="relative w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white/30 shadow-2xl items-center justify-center"
                  >
                    <div className="text-white text-5xl">👨‍💼</div>
                  </div>
                </div>
              </div>

              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Roy Dissanayake</h2>
                <p className="text-blue-200 text-sm font-medium tracking-wider uppercase mb-1">
                  Harcourts Sales Consultant
                </p>
                <p className="text-blue-200 text-sm font-medium tracking-wider uppercase mb-8">
                  Licensed REAA 2008
                </p>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm font-medium">
                      Free Market Appraisal
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm font-medium">
                      Trustworthy & Reliable Service
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm font-medium">
                      Honest, Straightforward Advice
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm font-medium">
                      Professional & Friendly
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm font-medium">
                      Stress-Free Selling Experience
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm font-medium">
                      Strong Negotiation Skills
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm font-medium">
                      Committed to Getting You the Best Price
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mb-8">
                  <img
                    src="/IMG_0573.PNG"
                    alt="Roy Dissanayake Logo"
                    className="w-40 h-auto opacity-90"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>

                <div className="border-t border-white/10 pt-8">
                  <p className="text-white/80 italic text-sm">
                    "Whether you're buying, selling, or investing, we'll match
                    you with properties that fit your needs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-white/60 text-xs">
          <p>© 2024 Roy Dissanayake Real Estate Services | Hamilton, ON</p>
        </div>
      </div>
    </div>
  );
}
