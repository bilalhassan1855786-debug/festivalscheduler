import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import EventCard from '@/app/components/ui/EventCard';
import { Event } from '@/app/lib/types';

const events: Event[] = [
  { id: '1', title: 'Summer Music Festival', date: '2025-06-20', location: 'Central Park', lineup: [], slug: 'summer-music-festival' },
  { id: '2', title: 'Rock Night', date: '2025-07-10', location: 'Downtown Arena', lineup: [], slug: 'rock-night' }
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">All Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => <EventCard key={event.id} event={event} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
