import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { AppSidebar } from "../AppSidebar/AppSidebar";

function LayoutDashboard() {
  return (
    <>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <SidebarTrigger />
        <main className="w-full max-w-[1240px] mx-auto px-4">
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}

export default LayoutDashboard;
