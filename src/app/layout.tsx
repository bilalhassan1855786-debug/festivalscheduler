// src/app/layout.tsx
import '../app/globals.css'
import { ReactNode } from 'react';
import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="min-h-screen container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
