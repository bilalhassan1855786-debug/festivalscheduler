import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import { Event } from '@/app/lib/types';

const event: Event = {
  id: '1',
  title: 'Summer Music Festival',
  date: '2025-06-20',
  location: 'Central Park',
  lineup: [
    { id: 'a1', name: 'DJ Khaled', genre: 'EDM', image: '/artist1.jpg', slug: 'dj-khaled' }
  ],
  slug: 'summer-music-festival'
};

export default function EventDetailPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold">{event.title}</h2>
        <p className="mb-4">{event.date} | {event.location}</p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Lineup</h3>
        <ul className="list-disc pl-6">
          {event.lineup.map(artist => <li key={artist.id}>{artist.name} ({artist.genre})</li>)}
        </ul>
      </main>
      <Footer />
    </>
  );
}
