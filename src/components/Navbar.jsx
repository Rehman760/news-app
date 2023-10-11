import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl ">Your Updater</div>

        {/* Search Bar */}
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
            onClick={handleSearch}
          >
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M15.293 13.293a6 6 0 1 1-2.828-2.828 6 6 0 0 1 2.828 2.828zM9.5 16a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
