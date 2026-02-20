// src/components/layout/NavMain.jsx
"use client"

import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({ items }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Navigation
      </SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive} // can be passed from parent if needed
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`
                    transition-colors
                    ${item.isActive 
                      ? "bg-slate-800 text-white data-[active=true]:bg-slate-800" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                    }
                  `}
                  isActive={item.isActive}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span className="font-medium">{item.title}</span>

                  {/* Chevron shown only if there would be sub-items in future */}
                  {/* For now we keep it for visual consistency with shadcn pattern */}
                  <ChevronRight 
                    className={`
                      ml-auto h-4 w-4 transition-transform duration-200 
                      group-data-[state=open]/collapsible:rotate-90
                      ${item.isActive ? "text-white" : "text-slate-500"}
                    `}
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              {/* 
                CollapsibleContent is kept for future extensibility 
                (e.g. sub-navigation under "My Projects" → individual projects)
                Right now it's empty for your flat structure 
              */}
              <CollapsibleContent>
                <SidebarMenuSub>
                  {/* Example placeholder — remove or keep commented */}
                  {/* {item.subItems?.map((sub) => (
                    <SidebarMenuSubItem key={sub.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={sub.url}>
                          <span>{sub.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))} */}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}