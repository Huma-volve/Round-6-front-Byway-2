import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { AppSidebar } from "../AppSidebar/AppSidebar";

function LayoutDashboard() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="bg-black/10 w-full">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}

export default LayoutDashboard;
