import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="sticky top-0 bg-blue-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <Link to = '/'>
            <div className="text-white text-2xl font-bold cursor-pointer">
              Singh.
            </div>
        </Link>
        <nav>
          <ul className="flex space-x-5 text-white">
            <li>
              <a href="#home" className="hover:text-gray-200 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200 transition duration-300">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-200 transition duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
