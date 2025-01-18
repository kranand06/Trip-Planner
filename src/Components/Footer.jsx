import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h2 className="text-xl font-bold">Tripper</h2>
            <p className="text-sm text-gray-400">
              Your smart travel companion for seamless trip planning.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center sm:text-left mt-4 sm:mt-0">
            <NavLink to="/createtrip" className="hover:text-gray-300">
              Create Trip
            </NavLink>
            <NavLink to="/mytrips" className="hover:text-gray-300">
              My Trips
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-300">
              Contact
            </NavLink>
            <NavLink to="/terms" className="hover:text-gray-300">
              Terms of Service
            </NavLink>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-6">
          © 2025 Tripper. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;