import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- Layouts ---
import PublicLayout from '@/components/layout/PublicLayout';
import DashboardLayout from '@/components/layout/DashboardLayout';

// --- Public Pages ---
import Home from '@/pages/public/Home';
import Innovations from '@/pages/public/Innovations';
import Calls from '@/pages/public/Calls';
import Training from '@/pages/public/Training';
import About from '@/pages/public/About';
import Contact from '@/pages/public/Contact';
// --- Auth Pages ---
// REMOVED: Login and Register imports (since we use the Modal now)
import AdminLogin from '@/pages/auth/AdminLogin'; // KEEP THIS!

// --- Innovator Pages ---
import InnovatorDashboard from '@/pages/innovator/Dashboard';
import AddProject from '@/pages/innovator/AddProject';
import MyProjects from '@/pages/innovator/MyProjects';
import Settings from '@/pages/innovator/Settings';

// --- Institution Pages ---
import InstitutionDashboard from '@/pages/institution/Dashboard';
import PostCall from '@/pages/institution/PostCall';

// --- Admin Pages ---
import AdminDashboard from '@/pages/admin/AdminDashboard';
import ProjectManagement from '@/pages/admin/ProjectManagement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 1. PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* OPTIONAL: Redirect old /login links to Home so the user can click the button */}
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
        </Route>

        {/* 2. HIDDEN ADMIN LOGIN (Keep this!) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 3. INNOVATOR DASHBOARD */}
        <Route path="/innovator" element={<DashboardLayout role="innovator" />}>
          <Route index element={<InnovatorDashboard />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="applications" element={<div className="p-10">My Applications</div>} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 4. INSTITUTION DASHBOARD */}
        <Route path="/institution" element={<DashboardLayout role="institution" />}>
          <Route index element={<InstitutionDashboard />} />
          <Route path="post-call" element={<PostCall />} />
          <Route path="applicants" element={<div className="p-10">Review Applicants</div>} />
          <Route path="settings" element={<div className="p-10">Institution Settings</div>} />
        </Route>

        {/* 5. ADMIN DASHBOARD */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
           <Route index element={<AdminDashboard />} />
           <Route path="projects" element={<ProjectManagement />} />
           <Route path="users" element={<div className="p-10">User Management (Coming Soon)</div>} />
           <Route path="reports" element={<div className="p-10">Analytics (Coming Soon)</div>} />
        </Route>

        {/* 6. CATCH ALL */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;