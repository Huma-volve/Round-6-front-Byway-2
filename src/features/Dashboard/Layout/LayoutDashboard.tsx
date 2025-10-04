import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { AppSidebar } from "../AppSidebar/AppSidebar";

function LayoutDashboard() {
  return (
    <>
      <SidebarProvider defaultOpen>
        <AppSidebar />
          <SidebarTrigger className="" />
        <main className="w-full max-w-[1300px] px-4 mx-auto mt-6">
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}

export default LayoutDashboard;
