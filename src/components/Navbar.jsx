import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBookmark, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  const handleSearchClick = () => setShowOverlay((prev) => !prev);
  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      const trimmed = searchValue.trim();
      if (trimmed) {
        navigate(`/search/${encodeURIComponent(trimmed)}`);
        setShowOverlay(false);
        setSearchValue("");
      }
    }
  };

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
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/Movies" className="hover:text-gray-300">
                Movies
              </Link>
              <Link to="/TvShow" className="hover:text-gray-300">
                TV Shows
              </Link>
              <Link to="/People" className="hover:text-gray-300">
                People
              </Link>
            </div>

            <div className="flex flex-row items-center space-x-4">
              <div className="relative z-10">
                <div className="p-4 bg-[#1d0f0f] z-20 flex flex-row">
                  <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleSearchKey}
                    onClick={handleSearchClick}
                    type="text"
                    placeholder="Search"
                    className="bg-[#441f1f] text-white max-sm:w-20 w-30 text-sm rounded-md pl-8 pr-4 py-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <span className="absolute left-6 top-5 text-sm text-gray-400">
                    <FaSearch className="w-4 h-4" />
                  </span>
                </div>
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

      {showOverlay && (
        <div className="fixed inset-0 flex-row flex justify-center items-start pt-16 transition-all duration-300">
          <div className="p-4  z-20 flex flex-row">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#441f1f] text-white max-md:w-[500px] max-sm:w-[300px] w-[800px] text-sm rounded-md pl-8 pr-4  py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute ml-2 mt-4 text-sm text-gray-400">
              <FaSearch className="w-4 h-4" />
            </span>
          </div>
        </div>
      )}

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

        <div className="flex flex-col space-y-4 p-4 text-sm">
          <Link to="/" className="hover:text-gray-300" onClick={closeSidebar}>
            Home
          </Link>
          <Link
            to="/Movies"
            className="hover:text-gray-300"
            onClick={closeSidebar}
          >
            Movies
          </Link>
          <Link
            to="/TvShow"
            className="hover:text-gray-300"
            onClick={closeSidebar}
          >
            TV Shows
          </Link>
          <Link
            to="/People"
            className="hover:text-gray-300"
            onClick={closeSidebar}
          >
            People
          </Link>
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
