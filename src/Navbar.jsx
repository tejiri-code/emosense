// Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-secondary-100  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-500">ES</div>
        <ul className="space-x-4">
          <li className="inline-block">
            <a href="/" className="text-primary-500 hover:underline">
              Home
            </a>
          </li>
          <li className="inline-block">
            <a href="/history" className="text-primary-500 hover:underline">
              History
            </a>
          </li>
          <li className="inline-block">
            <a href="/stats" className="text-primary-500 hover:underline">
              Stats
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
