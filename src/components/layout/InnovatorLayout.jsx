import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, FolderPlus, List, LogOut, User } from 'lucide-react';

const InnovatorLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-bold text-xl text-blue-900">Innovator Portal</h2>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link to="/innovator" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/innovator/projects" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
            <List size={20} /> My Projects
          </Link>
          <Link to="/innovator/add-project" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
            <FolderPlus size={20} /> Add Project
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
             <LogOut size={20} /> Logout
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default InnovatorLayout;