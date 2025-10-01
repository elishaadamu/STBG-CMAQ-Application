import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="bg-gray-800 text-white p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          STBG/CMAQ Application
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/table" className="hover:text-gray-300">
                View Submissions
              </Link>
              <button onClick={onLogout} className="hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-gray-300">
              Admin Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
