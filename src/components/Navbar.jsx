import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold text-pink-500 whitespace-nowrap">
          Supriya Dua
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li><a href="#about" className="hover:text-pink-500">About</a></li>
          <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-pink-500">Experience</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
          <li>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Supriya-Dua-Resume.pdf"
                className="hover:text-pink-500"
              >
                Resume
              </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex-shrink-0 ml-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <li>
            <a
              href="#about"
              className="block py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="block py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
