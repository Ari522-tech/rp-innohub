// src/layouts/DashboardLayout.jsx
"use client"

import { Outlet, useLocation } from "react-router-dom"
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

import { AppSidebar } from "@/components/layout/AppSidebar"

export default function DashboardLayout({ role, user }) {
  const location = useLocation()

  // Optional: you can derive current page title from path
  // or use a more sophisticated crumbs map later
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean)
    
    // Remove the role prefix from display
    const cleanedSegments = pathSegments.filter(seg => 
      !["innovator", "institution", "admin"].includes(seg)
    )

    return [
      { label: role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Portal` : "Dashboard", href: `/${role}` },
      ...cleanedSegments.map((seg, index) => {
        const isLast = index === cleanedSegments.length - 1
        const path = `/${role}/${cleanedSegments.slice(0, index + 1).join("/")}`
        return {
          label: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
          href: isLast ? undefined : path,
          isCurrent: isLast
        }
      })
    ]
  }

  const crumbs = getBreadcrumbItems()

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-dvh bg-slate-50">
        {/* Sidebar */}
        <AppSidebar 
          role={role}
          user={user}
        />

        {/* Main content area */}
        <SidebarInset className="flex flex-col">
          {/* Top header bar */}
          <header 
            className="
              flex h-14 shrink-0 items-center gap-2 
              border-b border-slate-200 bg-white
              transition-[width,height] duration-200 ease-linear
              group-data-[collapsible=icon]/sidebar-wrapper:h-12
            "
          >
            <div className="flex items-center gap-3 px-5">
              <SidebarTrigger className="-ml-1 text-slate-600 hover:text-slate-900" />
              <Separator 
                orientation="vertical" 
                className="h-5 bg-slate-200"
              />
              <Breadcrumb>
                <BreadcrumbList className="text-sm">
                  {crumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center">
                      <BreadcrumbItem>
                        {crumb.isCurrent ? (
                          <BreadcrumbPage className="font-medium text-slate-900">
                            {crumb.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink 
                            href={crumb.href}
                            className="text-slate-600 hover:text-slate-900"
                          >
                            {crumb.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {index < crumbs.length - 1 && (
                        <BreadcrumbSeparator className="text-slate-300 mx-2" />
                      )}
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          {/* Page content */}
          <div className="flex-1 overflow-auto">
            <main className="p-6 md:p-8">
              <div className="mx-auto w-full max-w-7xl">
                <Outlet />
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}