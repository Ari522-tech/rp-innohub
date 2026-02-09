import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- Layouts ---
import PublicLayout from '@/components/layout/PublicLayout';
import DashboardLayout from '@/components/layout/DashboardLayout';

// --- Public Pages ---
import Home from '@/pages/public/Home';

// --- Auth Pages ---
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

// --- Innovator Pages ---
import InnovatorDashboard from '@/pages/innovator/Dashboard';
import AddProject from '@/pages/innovator/AddProject';

// --- Institution Pages ---
import InstitutionDashboard from '@/pages/institution/Dashboard';

//--- calls ----

import Calls from '@/pages/public/Calls';
// --- Innovations ---
import Innovations from '@/pages/public/Innovations';

// --- About ---

import About from '@/pages/public/About';

// --- Training ----
import Training from '@/pages/public/Training';

// --- Postcall ---
import PostCall from '@/pages/institution/PostCall';

// --- MyProjects
import MyProjects from '@/pages/innovator/MyProjects';

// --- innov settings ---

import Settings from '@/pages/innovator/Settings';

// --- Admin Pages ---
const AdminDashboard = () => <div className="p-10 text-center"><h1>Admin Panel (Coming Soon)</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 1. PUBLIC ROUTES (Includes Login/Register now) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          
          {/* MOVED HERE: Now they get Navbar & Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 2. INNOVATOR DASHBOARD (Protected) */}
        <Route path="/innovator" element={<DashboardLayout role="innovator" />}>
          <Route index element={<InnovatorDashboard />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="applications" element={<div className="p-10">My Applications</div>} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 3. INSTITUTION DASHBOARD (Protected) */}
        <Route path="/institution" element={<DashboardLayout role="institution" />}>
          <Route index element={<InstitutionDashboard />} />
          <Route path="post-call" element={<PostCall />} />
          <Route path="applicants" element={<div className="p-10">Review Applicants</div>} />
          <Route path="settings" element={<div className="p-10">Institution Settings</div>} />
        </Route>

        {/* 4. ADMIN ROUTES */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
           <Route index element={<AdminDashboard />} />
        </Route>

        {/* 5. CATCH ALL */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;