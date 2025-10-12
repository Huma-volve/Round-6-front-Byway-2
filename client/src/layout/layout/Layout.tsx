import { Navbar, Footer } from "@/layout";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen pt-7">
      <Navbar />

      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
