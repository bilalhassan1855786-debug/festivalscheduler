import React from 'react';
import { Event } from '@/app/lib/types';
import Link from 'next/link';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-xl font-bold">{event.title}</h3>
      <p>{event.date} | {event.location}</p>
      <p>Lineup: {event.lineup.map(a => a.name).join(', ')}</p>
      <Link href={`/events/${event.slug}`} className="text-blue-600 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
