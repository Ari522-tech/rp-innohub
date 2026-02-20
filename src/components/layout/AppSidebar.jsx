// src/components/layout/AppSidebar.jsx
"use client"

import { useMemo } from "react"
import { 
  LayoutDashboard, PlusCircle, Briefcase, FileText, Settings, 
  Users, BarChart3, ShieldCheck, Building2 
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { NavMain } from "./NavMain"
import { NavUser } from "./NavUser"

export function AppSidebar({ role, user, ...props }) {
  const navItems = useMemo(() => {
    const common = [
      {
        title: "Dashboard",
        url: `/${role}`,
        icon: LayoutDashboard,
      },
    ]

    if (role === "innovator") {
      return [
        ...common,
        { title: "My Projects", url: `/${role}/projects`, icon: Briefcase },
        { title: "Add Project",  url: `/${role}/add-project`, icon: PlusCircle },
        { title: "Applications", url: `/${role}/applications`, icon: FileText },
        { title: "Settings",     url: `/${role}/settings`,    icon: Settings },
      ]
    }

    if (role === "institution") {
      return [
        ...common,
        { title: "Post New Call", url: `/${role}/post-call`, icon: PlusCircle },
        { title: "Applicants",    url: `/${role}/applicants`, icon: Users },
        { title: "Settings",      url: `/${role}/settings`,   icon: Settings },
      ]
    }

    if (role === "admin") {
      return [
        ...common,
        { title: "Project Mgmt", url: `/${role}/projects`, icon: ShieldCheck },
        { title: "User Mgmt",    url: `/${role}/users`,    icon: Users },
        { title: "Reports",      url: `/${role}/reports`,  icon: BarChart3 },
        { title: "Settings",     url: `/${role}/settings`, icon: Settings },
      ]
    }

    return common
  }, [role])

  const headerLabel = {
    innovator:   "Innovator Portal",
    institution: "Institution Portal",
    admin:       "Admin Center",
  }[role] || "Dashboard"

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200" {...props}>
      <SidebarHeader className="border-b border-slate-200">
        <div className="flex items-center gap-2.5 px-4 py-3.5">
          <div className="flex size-8 items-center justify-center rounded-md bg-slate-800 text-white border border-slate-700 text-sm font-semibold">
            RP
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold tracking-tight text-slate-900 text-base">
              InnoHub
            </span>
            <span className="text-xs text-slate-500">{headerLabel}</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
  <NavMain 
    items={navItems.map(item => ({
      ...item,
      isActive: false, // ← you'll set this dynamically later (useLocation)
    }))}
  />
</SidebarContent>

      <SidebarFooter className="border-t border-slate-200">
        {user ? (
          <NavUser user={user} role={role} />
        ) : (
          <div className="p-4 text-sm text-slate-500">Not signed in</div>
        )}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}