import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Briefcase, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Users,
  Shield,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DashboardLayout = ({ role }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const innovatorLinks = [
    { label: 'Dashboard', path: '/innovator', icon: LayoutDashboard },
    { label: 'My Projects', path: '/innovator/projects', icon: Briefcase },
    { label: 'Add Project', path: '/innovator/add-project', icon: PlusCircle },
    { label: 'Applications', path: '/innovator/applications', icon: FileText },
    { label: 'Settings', path: '/innovator/settings', icon: Settings },
  ];

  const institutionLinks = [
    { label: 'Dashboard', path: '/institution', icon: LayoutDashboard },
    { label: 'Post New Call', path: '/institution/post-call', icon: PlusCircle },
    { label: 'Applicants', path: '/institution/applicants', icon: Users },
    { label: 'Settings', path: '/institution/settings', icon: Settings },
  ];

  const adminLinks = [
    { label: 'Admin Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Project Mgmt', path: '/admin/projects', icon: Shield },
    { label: 'User Mgmt', path: '/admin/users', icon: Users },
    { label: 'Reports', path: '/admin/reports', icon: BarChart3 },
  ];

  let links = innovatorLinks;
  if (role === 'institution') links = institutionLinks;
  if (role === 'admin') links = adminLinks;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-50">
      
      {/* --- SIDEBAR --- */}
      {/* FIX: Explicitly set 'bg-slate-900' and 'text-white' to prevent the white-on-white bug */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 shadow-xl flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="bg-rp-blue p-1.5 rounded text-white border border-slate-600">RP</div>
            <span className="text-slate-100">InnoHub</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="p-4 space-y-2 flex-grow">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-4">
            {role === 'innovator' ? 'Innovator Menu' : 'Institution Menu'}
          </div>
          
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-rp-blue text-white shadow-md border-l-4 border-rp-gold' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <link.icon size={20} className={isActive ? 'text-rp-gold' : 'group-hover:text-rp-gold transition-colors'} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer User Info */}
        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-9 w-9 border border-slate-700">
              <AvatarFallback className="bg-rp-blue text-rp-gold text-xs font-bold">
                {role === 'innovator' ? 'JP' : 'RP'}
              </AvatarFallback>
            </Avatar>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-white truncate">
                {role === 'innovator' ? 'Jean Paul' : 'RP Admin'}
              </p>
              <p className="text-xs text-slate-500 truncate capitalize">{role} Account</p>
            </div>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="ghost" 
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
          >
            <LogOut size={16} className="mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden text-slate-600 hover:text-rp-blue">
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-bold text-slate-800 hidden md:block">
              {role === 'innovator' ? 'Innovator Portal' : 'Institution Portal'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 border-2 border-slate-100 hover:border-rp-gold transition-all">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback className="bg-rp-blue text-white">JP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate(`/${role}/settings`)}>
                   <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                   <LogOut className="mr-2 h-4 w-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="max-w-6xl mx-auto animate-slide-up">
            <Outlet />
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;