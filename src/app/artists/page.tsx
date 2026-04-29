"use client";

import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import { Artist } from '@/app/lib/types';

const artist: Artist = {
  id: 'a1',
  name: 'DJ Khaled',
  genre: 'EDM',
  image: '/artist1.jpg',
  slug: 'dj-khaled'
};

export default function ArtistPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6 text-center">
        <img src={artist.image} alt={artist.name} className="mx-auto w-48 h-48 rounded-full object-cover"/>
        <h2 className="text-3xl font-bold mt-4">{artist.name}</h2>
        <p className="text-gray-500">{artist.genre}</p>
      </main>
      <Footer />
    </>
  );
}
