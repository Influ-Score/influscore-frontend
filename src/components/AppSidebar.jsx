import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import { LayoutDashboard, Inbox, Settings, Layers } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function AppSidebar() {
  const location = useLocation()

  const menuItems = [
    
    { name: "Influence Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Platforms", icon: Layers, path: "/platforms" },
    { name: "Inbox", icon: Inbox, path: "/inbox" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ]

  return (
    <Sidebar className="bg-sidebar border-r border-sidebar-border shadow-sm">

  <SidebarHeader>
    <div className="flex items-center gap-3 px-3 py-4">
      <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow">
        I
      </div>
      <span className="font-semibold text-base tracking-wide">
        InfluScore
      </span>
    </div>
  </SidebarHeader>

  {/* Menu */}
  <SidebarContent>
    <SidebarMenu className="px-2">

      {menuItems.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton
            asChild
            isActive={location.pathname === item.path}
            className="rounded-lg hover:bg-sidebar-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground transition-all"
          >
            <Link to={item.path} className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.name}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}

    </SidebarMenu>
  </SidebarContent>

  {/* Footer */}
  <SidebarFooter>
    <div className="text-xs text-muted-foreground px-3 py-3 border-t border-sidebar-border">
      © 2026 InfluScore
    </div>
  </SidebarFooter>

</Sidebar>
  )
}