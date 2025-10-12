import {
  Book,
  Gauge,
  UserRound,
  Settings,
  ShieldAlert,
  Star,
  CircleDollarSign,
} from "lucide-react";
import Logo from "../../../assets/images/logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";

const items = [
  {
    title: "Dashboard",
    url: "/adminDashboard",
    icon: Gauge,
  },
  {
    title: "User Management",
    url: "/userManagement",
    icon: UserRound,
  },
  {
    title: "Course Management",
    url: "/courseManagement",
    icon: Book,
  },
  {
    title: "Payments & Revenue",
    url: "/paymentsRevenue",
    icon: CircleDollarSign,
  },
  {
    title: "Reviews & Ratings",
    url: "/reviewsRatings",
    icon: Star,
  },
  {
    title: "Platform Settings",
    url: "/platformSettings",
    icon: Settings,
  },
  {
    title: "Reports & Analytics",
    url: "/reportsAnalytics",
    icon: ShieldAlert,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar className="bg-gray-900">
    <SidebarHeader className="bg-gray-900 px-4 py-2">
      {/* نلف العناصر جوا div flex */}
      <div className="flex items-center justify-between w-full">
        {/* اللوجو + الاسم */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo ByWay" className="h-8 w-8" />
          {state === "expanded" && (
            <h2 className="text-lg font-medium text-gray-200">ByWay</h2>
          )}
        </div>

      </div>
    </SidebarHeader>
  
    <SidebarContent className="bg-gray-900">
      <SidebarGroup>
        <SidebarGroupLabel></SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="flex gap-6">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-4 text-blue-600"
                        : "flex items-center gap-3 text-gray-300 hover:text-white"
                    }
                  >
                    <item.icon />
                    <span className="text-base font-medium">{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  
  );
}
