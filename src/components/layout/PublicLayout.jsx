// src/components/layout/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Public top navigation */}
      <Navbar />

      {/* Main content area – grows to fill available space */}
      <main className="flex-grow">
        <Outlet /> {/* Renders Home, Innovations, Calls, etc. */}
      </main>

      {/* Public footer */}
      <Footer />
    </div>
  );
}