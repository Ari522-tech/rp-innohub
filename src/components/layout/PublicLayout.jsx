import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer'; // Import the new responsive Footer

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Outlet renders the child route (Home, About, etc.) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* The new responsive Footer component */}
      <Footer />
    </div>
  );
};

export default PublicLayout;