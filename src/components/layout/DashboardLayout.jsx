// src/components/layout/DashboardLayout.jsx
"use client"

import { Outlet } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"

export default function DashboardLayout({ role, user }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-dvh bg-slate-50">
        {/* Sidebar – shared across all roles */}
        <AppSidebar role={role} user={user} />

        {/* Main content area */}
        <SidebarInset className="flex flex-col">
          {/* Top header */}
          <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 lg:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="-ml-1 text-slate-600 hover:text-slate-900" />
              <Separator orientation="vertical" className="h-4" />
              <Breadcrumb>
                <BreadcrumbList className="text-sm">
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/${role}`}>
                      {role.charAt(0).toUpperCase() + role.slice(1)} Portal
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          {/* Page content – scrollable */}
          <div className="flex-1 overflow-auto">
            <main className="p-4 md:p-6 lg:p-8">
              <Outlet />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}