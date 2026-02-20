// src/components/layout/NavUser.jsx
"use client"

import { LogOut, Settings, UserCircle, ChevronUp } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NavUser({ user }) {
  const { isMobile } = useSidebar()

  const displayName = user?.name || "User"
  const displayRole = user?.role 
    ? user.role.charAt(0).toUpperCase() + user.role.slice(1) 
    : "Account"

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-slate-800 data-[state=open]:text-white hover:bg-slate-800/80 transition-colors"
            >
              <Avatar className="h-8 w-8 rounded-full border border-slate-700">
                <AvatarImage src={user?.avatar} alt={displayName} />
                <AvatarFallback className="bg-slate-700 text-slate-200 text-xs font-medium">
                  {displayName.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium text-slate-100">
                  {displayName}
                </span>
                <span className="truncate text-xs text-slate-400 capitalize">
                  {displayRole}
                </span>
              </div>

              <ChevronUp className="ml-auto h-4 w-4 text-slate-500 data-[state=open]:rotate-180 transition-transform" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56 rounded-lg border border-slate-700 bg-slate-900 text-slate-200"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-3 py-3.5">
                <Avatar className="h-10 w-10 rounded-full border border-slate-700">
                  <AvatarImage src={user?.avatar} alt={displayName} />
                  <AvatarFallback className="bg-slate-700 text-slate-200">
                    {displayName.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{displayName}</span>
                  <span className="truncate text-xs text-slate-400">
                    {user?.email || "No email"}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="bg-slate-800" />

            <DropdownMenuItem className="gap-2.5 px-3 py-2.5 text-slate-300 focus:bg-slate-800 focus:text-slate-100">
              <UserCircle className="h-4 w-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem className="gap-2.5 px-3 py-2.5 text-slate-300 focus:bg-slate-800 focus:text-slate-100">
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-slate-800" />

            <DropdownMenuItem 
              className="gap-2.5 px-3 py-2.5 text-red-400 focus:bg-red-950/40 focus:text-red-300"
              onClick={() => {
                // TODO: real logout logic (clear token, redirect)
                window.location.href = "/login"
              }}
            >
              <LogOut className="h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}