import { Navbar, Footer } from "@/layout";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="m-auto w-full max-w-[1240px] px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
