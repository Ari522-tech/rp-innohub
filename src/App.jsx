// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from '@/components/layout/PublicLayout';
import DashboardLayout from '@/components/layout/DashboardLayout';

// Public Pages
import Home from '@/pages/public/Home';
import Innovations from '@/pages/public/Innovations';
import Calls from '@/pages/public/Calls';
import Training from '@/pages/public/Training';
import About from '@/pages/public/About';
import Contact from '@/pages/public/Contact';

// Auth (modal is triggered from Navbar, but keep hidden admin login)
import AdminLogin from '@/pages/auth/AdminLogin';

// Innovator Pages
import InnovatorDashboard from '@/pages/innovator/Dashboard';
import AddProject from '@/pages/innovator/AddProject';
import MyProjects from '@/pages/innovator/MyProjects';
import Settings from '@/pages/innovator/Settings';

// Institution Pages
import InstitutionDashboard from '@/pages/institution/Dashboard';
import PostCall from '@/pages/institution/PostCall';

// Admin Pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import ProjectManagement from '@/pages/admin/ProjectManagement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. PUBLIC ROUTES – wrapped in PublicLayout (Navbar + Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Redirect old login/register to home (modal opens via Navbar button) */}
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
        </Route>

        {/* 2. HIDDEN ADMIN LOGIN (kept separate – no modal for admin) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 3. INNOVATOR PROTECTED ROUTES */}
        <Route path="/innovator" element={<DashboardLayout role="innovator" />}>
          <Route index element={<InnovatorDashboard />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="settings" element={<Settings />} />
          {/* Placeholder for applications */}
          <Route path="applications" element={<div className="p-10 text-slate-600">My Applications – Coming soon</div>} />
        </Route>

        {/* 4. INSTITUTION PROTECTED ROUTES */}
        <Route path="/institution" element={<DashboardLayout role="institution" />}>
          <Route index element={<InstitutionDashboard />} />
          <Route path="post-call" element={<PostCall />} />
          {/* Placeholder */}
          <Route path="applicants" element={<div className="p-10 text-slate-600">Review Applicants – Coming soon</div>} />
        </Route>

        {/* 5. ADMIN PROTECTED ROUTES */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<ProjectManagement />} />
          {/* Placeholders */}
          <Route path="users" element={<div className="p-10 text-slate-600">User Management – Coming soon</div>} />
          <Route path="reports" element={<div className="p-10 text-slate-600">Analytics & Reports – Coming soon</div>} />
        </Route>

        {/* 6. Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;