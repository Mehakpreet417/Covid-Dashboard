import React from 'react';
import '../styles.css';
import "tailwindcss/tailwind.css"

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-4xl font-bold text-center">Contact Page</h1>
      </div>
    </header>
  );
}

export default Header;
