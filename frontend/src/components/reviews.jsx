import React, { useState, useEffect } from "react";
import Review from "./review";
import { CircularProgress, Container } from "@mui/material";
import Slider from "react-slick";
import LeftArrow from "/left-arrow.svg";
import RightArrow from "/right-arrow.svg";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch("https://radiant-stream-13822.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setData(data));
    
    setIsVisible(true);
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div className="slick-arrow-container group" {...props}>
      <div className="relative">
        <img src={LeftArrow} alt="prevArrow" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 blur-md" />
      </div>
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div className="slick-arrow-container group" {...props}>
      <div className="relative">
        <img src={RightArrow} alt="nextArrow" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 blur-md" />
      </div>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3200,
    cssEase: "linear",
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="reviews bg-gray-950 py-10 relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl animate-float-large" style={{top: '10%', left: '5%'}} />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-amber-500/7 to-orange-500/7 rounded-full blur-2xl animate-float-large delay-5000" style={{bottom: '10%', right: '5%'}} />
        
        {/* Medium floating elements */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/4 to-amber-400/4 rounded-full blur-xl animate-pulse-slow" style={{top: '40%', right: '20%'}} />
        <div className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/6 to-red-400/6 rounded-full blur-lg animate-pulse-slow delay-3000" style={{bottom: '30%', left: '15%'}} />

        {/* Geometric shapes */}
        <div className="absolute w-40 h-40 border border-yellow-400/6 rounded-full animate-spin-very-slow" style={{top: '25%', right: '15%'}} />
        <div className="absolute w-32 h-32 border border-amber-400/8 rotate-45 animate-ping-slow" style={{bottom: '35%', left: '20%'}} />
        <div className="absolute w-28 h-28 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full animate-bounce-slow" style={{top: '65%', right: '25%'}} />
        <div className="absolute w-24 h-24 border-2 border-amber-300/6 rounded-lg rotate-12 animate-spin-slow" style={{top: '50%', left: '10%'}} />

        {/* Review-themed floating icons */}
        <div className="absolute text-5xl text-yellow-400/8 animate-float-gentle" style={{top: '20%', right: '30%'}}>⭐</div>
        <div className="absolute text-4xl text-amber-400/6 animate-float-gentle delay-2000" style={{bottom: '25%', left: '12%'}}>💬</div>
        <div className="absolute text-3xl text-yellow-300/5 animate-twinkle delay-3000" style={{top: '70%', left: '8%'}}>✨</div>
        <div className="absolute text-3xl text-amber-300/8 animate-bounce-slow delay-1500" style={{bottom: '15%', right: '22%'}}>👍</div>
        <div className="absolute text-2xl text-yellow-400/10 animate-twinkle" style={{top: '80%', right: '15%'}}>❤️</div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/15 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${5 + Math.random() * 7}s`
            }}
          />
        ))}

        {/* Gradient mesh overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/2 via-transparent to-amber-900/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-800/1 to-transparent" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient opacity-15" />
      </div>

      <Container className="relative z-10">
        
        {/* Enhanced Title Section */}
        <div className={`reviews-title text-center mb-10 relative transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Decorative elements around title */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-500 animate-expand-line" />
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse-slow relative">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1" />
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-500 animate-expand-line delay-500" />
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className="relative inline-block mb-4">
            <h4 className="text-warning font-semibold text-white text-lg relative group font-satisfy">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Our Client's Review
              </span>
              
              {/* Text glow effect */}
              <div className="absolute inset-0 text-yellow-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Floating star */}
              <div className="absolute -right-8 -top-2 text-2xl text-yellow-400 animate-twinkle">⭐</div>
            </h4>
            
            {/* Animated underline */}
            <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 delay-800 ${
              isVisible ? 'w-full' : 'w-0'
            }`} />
          </div>

          {/* Enhanced Main Title */}
          <h2 className="text-3xl text-gray-200 relative font-bold leading-relaxed">
            <span className="relative inline-block">
              Here's what our 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 mx-2">clients think</span>
              about our services
            </span>
            
            {/* Title shadow effect */}
            <div className="absolute inset-0 text-3xl text-gray-200 blur-sm opacity-20 -z-10">
              Here's what our clients think about our services
            </div>
            
            {/* Floating testimonial badges */}
            <div className="absolute -top-6 -right-8 text-lg text-yellow-400 animate-bounce-slow">
              💬
            </div>
            <div className="absolute -bottom-4 -left-6 text-lg text-amber-400 animate-bounce-slow delay-1000">
              👍
            </div>
          </h2>

          {/* Review statistics */}
          <div className={`flex justify-center space-x-8 mt-6 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center group">
              <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
              <div className="text-xs text-gray-500">Average Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">{data.length}+</div>
              <div className="text-xs text-gray-500">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-yellow-300 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-xs text-gray-500">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Loading/Slider Section */}
        <div className={`relative transition-all duration-1200 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {data.length === 0 ? (
            /* Enhanced Loading State */
            <div className="text-center py-16 relative">
              <div className="relative inline-block">
                <CircularProgress 
                  sx={{ 
                    margin: "auto", 
                    display: "block",
                    color: '#f59e0b', // yellow-500
                    '& .MuiCircularProgress-circle': {
                      strokeLinecap: 'round',
                    }
                  }} 
                  size={60}
                  thickness={4}
                />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
              </div>
              
              <p className="text-gray-400 mt-4 animate-pulse">Loading amazing reviews...</p>
              
              {/* Loading animation dots */}
              <div className="flex justify-center space-x-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                    style={{animationDelay: `${i * 0.2}s`}}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Enhanced Slider Container */
            <div className="relative">
              {/* Slider background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/3 to-amber-500/3 rounded-3xl blur-2xl -m-8 opacity-50" />
              
              <Slider {...settings} className="reviews-slider">
                {data.map((review) => (
                  <Review key={review._id} review={review} />
                ))}
              </Slider>
              
              {/* Slider side gradients for depth */}
              <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-950 to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-950 to-transparent pointer-events-none z-10" />
            </div>
          )}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 px-8 py-4 rounded-full border border-yellow-500/20 backdrop-blur-sm">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 font-semibold text-lg">Ready to join our happy clients?</span>
            <div className="text-3xl animate-bounce-slow">😊</div>
          </div>
        </div>

        {/* Floating review highlights */}
        <div className="absolute top-20 left-8 opacity-40 hidden xl:block">
          <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-xl px-3 py-2 animate-float-gentle">
            <div className="flex items-center space-x-2 text-yellow-300 text-xs">
              <span>⭐⭐⭐⭐⭐</span>
              <span>"Professional & Creative"</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-8 opacity-40 hidden xl:block">
          <div className="bg-black/30 backdrop-blur-sm border border-amber-400/20 rounded-xl px-3 py-2 animate-float-gentle delay-2000">
            <div className="flex items-center space-x-2 text-amber-300 text-xs">
              <span>💫</span>
              <span>"Exceeded Expectations"</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Enhanced CSS Animations & Slider Styling */}
      <style jsx>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -40px) rotate(3deg); }
          50% { transform: translate(-25px, -50px) rotate(-3deg); }
          75% { transform: translate(-35px, -30px) rotate(2deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(6deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.5) rotate(90deg); }
          50% { opacity: 0.7; transform: scale(0.8) rotate(180deg); }
          75% { opacity: 1; transform: scale(1.4) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 3rem; }
        }
        
        .animate-float-large { animation: float-large 20s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 7s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 8s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 35s linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-expand-line { animation: expand-line 2s ease-out forwards; }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.05) 0%, transparent 70%);
        }
        
        /* Enhanced Slider Styling */
        .reviews-slider .slick-dots {
          bottom: -50px;
        }
        
        .reviews-slider .slick-dots li button:before {
          color: #f59e0b;
          font-size: 12px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .reviews-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #fbbf24;
          transform: scale(1.2);
        }
        
        .reviews-slider .slick-dots li:hover button:before {
          opacity: 0.8;
          transform: scale(1.1);
        }
        
        .slick-arrow-container {
          z-index: 20;
          cursor: pointer;
          display: flex !important;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .slick-arrow-container:hover {
          background: rgba(245, 158, 11, 0.1);
          border-color: rgba(245, 158, 11, 0.5);
          transform: scale(1.1);
        }
        
        .slick-arrow-container:before {
          content: '';
        }
      `}</style>
    </div>
  );
};

export default Reviews;