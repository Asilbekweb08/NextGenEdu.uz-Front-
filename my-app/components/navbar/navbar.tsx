"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
            NextGenEdu<span className="text-gray-900">.uz</span>
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-indigo-600 transition">Home</a>
            <a href="#" className="hover:text-indigo-600 transition">Courses</a>
            <a href="#" className="hover:text-indigo-600 transition">About</a>
            <a href="#" className="hover:text-indigo-600 transition">Contact</a>
          </div> */}

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition shadow-lg">
              Ro'yxatdan o'tish
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600">Courses</a>
            <a href="#" className="hover:text-indigo-600">About</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}