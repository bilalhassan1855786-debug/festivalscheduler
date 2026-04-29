import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import Button from '@/app/components/common/Button';
import EventCard from '@/app/components/ui/EventCard';
import { Event } from '@/app/lib/types';

const sampleEvent: Event = {
  id: '1',
  title: 'Summer Music Festival',
  date: '2025-06-20',
  location: 'Central Park',
  lineup: [
    { id: 'a1', name: 'DJ Khaled', genre: 'EDM', image: '/artist1.jpg', slug: 'dj-khaled' }
  ],
  slug: 'summer-music-festival'
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <section className="text-center my-10">
          <h2 className="text-4xl font-bold mb-4">Upcoming Music Festival</h2>
          <p className="mb-4">Don’t miss out! Buy your tickets now.</p>
          <Button>Buy Tickets</Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard event={sampleEvent} />
        </section>
      </main>
      <Footer />
    </>
  );
}
