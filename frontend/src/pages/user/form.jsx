import React, { useState, useEffect } from 'react';

export default function HamiltonHomeForm() {
  // ⚠️ REPLACE THESE WITH YOUR EMAILJS CREDENTIALS ⚠️
  const EMAILJS_PUBLIC_KEY = '-YRQaQFHvRDjBGE8I';
  const EMAILJS_TEMPLATE_ID = 'template_knwk2wg';
  const EMAILJS_SERVICE_ID = 'service_1cpy2rj';
  const TO_EMAIL = 'marketing.me94@gmail.com';
  
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        setEmailJSLoaded(true);
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    lookingTo: '',
    contactMethod: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.lookingTo) {
      alert('Please fill in all required fields');
      return;
    }

    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE') {
      alert('❌ EmailJS is not configured yet!\n\nPlease add your:\n1. Public Key\n2. Template ID\n\nSee the blue banner above for instructions.');
      return;
    }

    if (!emailJSLoaded) {
      alert('Email service is still loading. Please try again in a moment.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_email: TO_EMAIL,
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        looking_to: formData.lookingTo,
        contact_method: formData.contactMethod || 'Not specified',
        message: `New Property Inquiry from Hamilton Real Estate Form

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Looking To: ${formData.lookingTo}
Preferred Contact Method: ${formData.contactMethod || 'Not specified'}

Please contact this prospect as soon as possible.`
      };

      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        lookingTo: '',
        contactMethod: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      if (error.text) {
        alert('Error: ' + error.text);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/IMG_0774.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 w-full max-w-5xl">
        {/* Main Glass Container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Column - Form */}
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Welcome! Let's Find Your Perfect Home in Hamilton
                </h1>
                <p className="text-blue-100 text-lg">
                  Fill out this short form so we can understand what you're looking for.
                </p>
              </div>

              {/* Privacy Notice */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 mb-8">
                <p className="text-white text-sm">
                  <span className="font-semibold text-blue-200">Your Privacy Matters:</span> Your information will be kept confidential and used only to help you find the right property.
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 mb-6">
                  <p className="text-green-100 font-semibold">✓ Thank you! Your inquiry has been sent successfully.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-4 mb-6">
                  <p className="text-red-100 font-semibold">✗ There was an error. Please try again.</p>
                </div>
              )}

              {/* Form */}
              <div className="space-y-6">
                {/* Full Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/* Looking To */}
                <div>
                  <label className="block text-white font-medium mb-3 text-sm uppercase tracking-wider">
                    Are you looking to <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Buy', 'Sell', 'Invest'].map((option) => (
                      <label key={option} className="relative">
                        <input
                          type="radio"
                          name="lookingTo"
                          value={option}
                          checked={formData.lookingTo === option}
                          onChange={handleChange}
                          className="absolute opacity-0"
                        />
                        <div className={`flex flex-col items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-200 ${formData.lookingTo === option ? 'bg-blue-500/30 border-blue-400' : 'bg-white/5 border-white/20 hover:bg-white/10'}`}>
                          <span className="text-white font-medium">{option}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contact Method */}
                <div>
                  <label className="block text-white font-medium mb-3 text-sm uppercase tracking-wider">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Phone', 'Email', 'WhatsApp'].map((method) => (
                      <label key={method} className="relative">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleChange}
                          className="absolute opacity-0"
                        />
                        <div className={`flex flex-col items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-200 ${formData.contactMethod === method ? 'bg-blue-500/30 border-blue-400' : 'bg-white/5 border-white/20 hover:bg-white/10'}`}>
                          <span className="text-white font-medium">{method}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !emailJSLoaded}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                >
                  {isSubmitting ? 'Sending...' : emailJSLoaded ? 'Submit Inquiry' : 'Loading...'}
                </button>
              </div>
            </div>

            {/* Right Column - Agent Info */}
            <div className="bg-gradient-to-b from-blue-900/40 to-blue-800/30 p-8 md:p-10 flex flex-col justify-center backdrop-blur-xl border-l border-white/10">
              {/* Agent Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                  <img
                    src="/IMG_0574.PNG"
                    alt="Roy Dissanayake"
                    className="relative w-48 h-48 object-cover rounded-full border-4 border-white/30 shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{display: 'none'}} className="relative w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white/30 shadow-2xl items-center justify-center">
                    <div className="text-white text-5xl">👨‍💼</div>
                  </div>
                </div>
              </div>

              {/* Agent Info */}
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Roy Dissanayake</h2>
                <p className="text-blue-200 text-sm font-medium tracking-wider uppercase mb-1">
                  Harcourts Sales Consultant
                </p>
                <p className="text-blue-200 text-sm font-medium tracking-wider uppercase mb-8">
                  Licensed REAA 2008
                </p>
                
                {/* Bullet Points */}
                <div className="space-y-4 text-left mb-10">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-base">Helping families find their dream homes</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-base">Free appraisal</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-white/90 text-base">Honest and trusted advice</p>
                  </div>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <img
                    src="/IMG_0573.PNG"
                    alt="Roy Dissanayake Logo"
                    className="w-40 h-auto opacity-90"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Tagline */}
                <div className="border-t border-white/10 pt-8">
                  <p className="text-white/80 italic text-base">
                    "Whether you're buying, selling, or investing, we'll match you with properties that fit your needs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 text-white/60 text-sm">
          <p>© 2024 Roy Dissanayake Real Estate Services | Hamilton, ON</p>
        </div>
      </div>
    </div>
  );
}