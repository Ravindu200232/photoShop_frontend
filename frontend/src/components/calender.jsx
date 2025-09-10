import * as React from 'react';
import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function AddWeekNumber() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: '#',
        calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
      }}
    >
      <div className="relative overflow-hidden">
        {/* Animated Background Container */}
        <div className={`bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white rounded-xl p-6 max-w-md mx-auto shadow-2xl relative overflow-hidden transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}>
          
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}

            {/* Gradient Orbs */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-xl animate-pulse-slow" style={{top: '10%', right: '10%'}} />
            <div className="absolute w-24 h-24 bg-gradient-to-br from-orange-600/15 to-red-600/15 rounded-full blur-lg animate-pulse-slow delay-1000" style={{bottom: '20%', left: '15%'}} />
            
            {/* Geometric Shapes */}
            <div className="absolute w-16 h-16 border border-white/5 rounded-full animate-spin-very-slow" style={{top: '30%', left: '5%'}} />
            <div className="absolute w-8 h-8 border border-orange-600/20 rotate-45 animate-ping-slow" style={{bottom: '40%', right: '20%'}} />
          </div>

          {/* Enhanced Header */}
          <div className={`text-center mb-6 relative z-10 transition-all duration-800 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="relative inline-block">
              <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
                <span className="text-3xl animate-bounce-slow"></span>
                <span className="relative">
                  Available Dates
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000 delay-800 ${
                    isVisible ? 'w-full' : 'w-0'
                  }`} />
                </span>
              </h2>
              
              {/* Floating availability indicator */}
              <div className="absolute -top-2 -right-6 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1" />
                <span className="text-xs text-green-400 animate-fade-in delay-1000">Open</span>
              </div>
            </div>

            {/* Subtitle with typing animation */}
            <p className={`text-sm text-gray-300 mt-2 transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Select your preferred date
            </p>
          </div>
          
          {/* Enhanced Calendar Container */}
          <div className={`relative transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Calendar glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg blur-sm" />
            
            <DateCalendar
              value={selectedDate}
              onChange={setSelectedDate}
              displayWeekNumber
              sx={{
                '& .MuiTypography-root': {
                  color: 'white',
                  transition: 'all 0.3s ease',
                },
                '& .MuiPickersDay-root': {
                  color: 'white',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover::before': {
                    opacity: 1,
                  }
                },
                '& .MuiPickersCalendarHeader-label': {
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'rgb(168, 162, 158)',
                  }
                },
                '& .MuiPickersDay-root.Mui-selected': {
                  backgroundColor: 'rgba(59, 130, 246, 0.6) !important',
                  color: 'white !important',
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.7) !important',
                    transform: 'scale(1.1)',
                  }
                },
                '& .MuiPickersArrowSwitcher-button': {
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.1)',
                  }
                },
                '& .MuiDayCalendar-weekDayLabel': {
                  color: 'rgb(156, 163, 175)',
                  fontWeight: 500,
                },
                '& .MuiPickersCalendarHeader-switchViewButton': {
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'rotate(180deg)',
                  }
                },
                // Week number styling
                '& .MuiTypography-root.MuiDayCalendar-weekNumber': {
                  color: 'rgb(156, 163, 175)',
                  fontWeight: 500,
                  fontSize: '0.8rem',
                }
              }}
            />
          </div>

          {/* Footer with booking hint */}
          <div className={`text-center mt-4 transition-all duration-800 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200" />
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-400" />
              </div>
              <span>Click to book your session</span>
            </div>
          </div>

          {/* Selected date indicator */}
          {selectedDate && (
            <div className="absolute top-4 right-4 bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm animate-slide-in">
              Selected: {selectedDate.format('MMM DD')}
            </div>
          )}

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/10 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/10 rounded-bl-xl" />
        </div>

        {/* Enhanced Custom CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }
          
          @keyframes ping-slow {
            75%, 100% {
              transform: scale(1.3) rotate(45deg);
              opacity: 0;
            }
          }
          
          @keyframes spin-very-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes fade-in {
            0% { opacity: 0; transform: translateX(10px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slide-in {
            0% { opacity: 0; transform: translateX(20px) scale(0.9); }
            100% { opacity: 1; transform: translateX(0) scale(1); }
          }
          
          .animate-float { animation: float 5s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
          .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
          .animate-spin-very-slow { animation: spin-very-slow 20s linear infinite; }
          .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
          .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
          .animate-slide-in { animation: slide-in 0.5s ease-out forwards; }
        `}</style>
      </div>
    </LocalizationProvider>
  );
}