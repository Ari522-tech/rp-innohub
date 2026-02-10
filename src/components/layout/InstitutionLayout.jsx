import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Building2, FilePlus, LogOut } from 'lucide-react';

const InstitutionLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Dark Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="font-bold text-xl text-white">Institution Portal</h2>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link to="/institution" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
            <Building2 size={20} /> Dashboard
          </Link>
          <Link to="/institution/post-call" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
            <FilePlus size={20} /> Post Call
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
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

export default InstitutionLayout;