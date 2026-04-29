import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-blue-600">MusicFest</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
