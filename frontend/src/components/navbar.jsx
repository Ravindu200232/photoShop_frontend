import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa"; // Close icon
import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full h-[80px] shadow-xl flex justify-between items-center px-4 md:px-8 bg-gradient-to-r from-gray-900 to-black relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-white">
        <Link to="/" className="text-[18px] hover:text-gray-400">
          Home
        </Link>
        <Link to="/contact" className="text-[18px] hover:text-gray-400">
          About
        </Link>
        <Link to="/gallery" className="text-[18px] hover:text-gray-400">
          Gallery
        </Link>
        <Link to="/package" className="text-[18px] hover:text-gray-400">
          Package
        </Link>
      </div>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-4 text-white">
        {/* Mobile Menu Button */}
        <HiMenu
          className="text-[30px] md:hidden cursor-pointer hover:text-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-white md:hidden">
          {/* Close Button */}
          <FaTimes
            className="absolute top-6 right-6 text-[30px] cursor-pointer hover:text-gray-400"
            onClick={handleMenuClose}
          />

          <Link
            to="/"
            className="text-[24px] hover:text-gray-400"
            onClick={handleMenuClose}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-[24px] hover:text-gray-400"
            onClick={handleMenuClose}
          >
            Contact
          </Link>
          <Link
            to="/gallery"
            className="text-[24px] hover:text-gray-400"
            onClick={handleMenuClose}
          >
            Gallery
          </Link>
          <Link
            to="/package"
            className="text-[24px] hover:text-gray-400"
            onClick={handleMenuClose}
          >
            Packages
          </Link>
        </div>
      )}
    </header>
  );
}
