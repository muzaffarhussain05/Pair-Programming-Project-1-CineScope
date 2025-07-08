import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaBars, FaTimes,FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
     
      <nav className="bg-[#1d0f0f] text-white fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
           
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="logo" className="w-6 h-6" />
              <span className="text-lg font-bold">CineScope</span>
            </div>

            <div className="hidden md:flex space-x-6 text-sm">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/Movies" className="hover:text-gray-300">Movies</Link>
              <Link to="/TvShow" className="hover:text-gray-300">TV Shows</Link>
              <Link to="/People" className="hover:text-gray-300">People</Link>
            </div>

           
            <div className=" flex flex-row  items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#441f1f] text-white max-sm:w-20 text-sm rounded-md pl-8 pr-4 py-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <span className="absolute left-2 top-1.5 text-sm text-gray-400"><FaSearch className="w-4 h-4"/></span>
              </div>
              <FaBookmark className="text-white text-xl cursor-pointer" />
              <img
                src=""
                alt="profile"
                className="w-8 h-8 max-sm:hidden rounded-full object-cover"
              />
            </div>

            
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} className="text-2xl">
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>

    
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

     
      <div
        className={`fixed top-0 right-0 w-64 h-full text-white bg-[#1d0f0f] z-50 transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <button onClick={closeSidebar} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col space-y-4 p-4 text-sm">
          <Link to="/" className="hover:text-gray-300" onClick={closeSidebar}>Home</Link>
          <Link to="/Movies" className="hover:text-gray-300" onClick={closeSidebar}>Movies</Link>
          <Link to="/TvShow" className="hover:text-gray-300" onClick={closeSidebar}>TV Shows</Link>
          <Link to="/People" className="hover:text-gray-300" onClick={closeSidebar}>People</Link>

       <img
                src=""
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />

        </div>
      </div>
    </>
  );
}
