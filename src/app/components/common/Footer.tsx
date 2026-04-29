import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-6 mt-12">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} MusicFest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
