import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="mt-2 flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/artists">Artists</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
