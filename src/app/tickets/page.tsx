"use client";





import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import Button from '@/app/components/common/Button';
import { useState } from 'react';

export default function TicketsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Ticket booked for ${name} (${email})`);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Book Your Tickets</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-white p-6 rounded shadow">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <Button>Book Now</Button>
        </form>
      </main>
      <Footer />
    </>
  );
}
