import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import TopNavbar from "@/components/TopNavbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider>
<div className="flex h-screen w-full bg-background text-foreground">

  <div className="w-64 border-r border-border bg-sidebar">
    <AppSidebar />
  </div>

  <div className="flex flex-col flex-1">

    <TopNavbar />

    <main className="flex-1 p-6 bg-background overflow-auto">
      <Outlet />
    </main>

  </div>
</div>
    </SidebarProvider>
  )
}