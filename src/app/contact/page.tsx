"use client";

import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import { useState } from 'react';
import Button from '@/app/components/common/Button';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent from ${email}: ${message}`);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-white p-6 rounded shadow">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <Button>Send Message</Button>
        </form>
      </main>
      <Footer />
    </>
  );
}
