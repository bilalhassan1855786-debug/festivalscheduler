import React from 'react';
import { Artist } from '@/app/lib/types';
import Link from 'next/link';

interface ArtistTileProps {
  artist: Artist;
}

const ArtistTile: React.FC<ArtistTileProps> = ({ artist }) => {
  return (
    <Link href={`/artists/${artist.slug}`} className="block bg-white rounded shadow p-4 text-center">
      <img src={artist.image} alt={artist.name} className="w-32 h-32 mx-auto rounded-full object-cover"/>
      <h4 className="mt-2 font-bold">{artist.name}</h4>
      <p className="text-gray-500">{artist.genre}</p>
    </Link>
  );
};

export default ArtistTile;
