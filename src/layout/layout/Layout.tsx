import { Navbar, Footer } from "@/layout";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-35 w-full max-w-[1240px] mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
