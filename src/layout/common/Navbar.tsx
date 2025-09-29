import { useState } from "react";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoNotificationsOutline,
  IoEllipseOutline,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "@/store/AuthSlice";

import type { RootState } from "@/store/Store";
import { Link, useLocation, useNavigate } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/welcome";
  const menu = [
    { name: "Profile", path: "/profile" },
    { name: "My Courses", path: "/courses" },
    { name: "Close account", path: "/close-account" },
    { name: "Payment History", path: "/payments" },
    { name: "Settings", path: "/settings" },
    { name: "Sign out", path: "/logout", isLogout: true },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white py-3 w-full fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-1">
            <img src="/logo.svg" alt="Byway Logo" className="h-9 w-9" />
            <Link to="/" className="text-lg font-semibold text-gray-700">
              Byway
            </Link>
          </div>

          <div className="flex flex-1 max-w-lg mr-10">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search"
                className="h-10 pr-10 w-full border border-gray-600 focus-visible:ring-0 focus-visible:border"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IoSearchOutline className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isHome && (
              <>
                <Button variant="outline" className="border border-gray-700">
                  English
                </Button>
                <Button variant="outline" className="border border-gray-700">
                  Arabic
                </Button>
              </>
            )}

            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <IoCartOutline />
              </Button>

              {!(isLogin || isSignup) && (
                <>
                  <Button variant="ghost" size="icon">
                    <IoHeartOutline />
                  </Button>
                  <Link to="/instructors/NotificationsEmptyIns">
                    <Button variant="ghost" size="icon">
                      <IoNotificationsOutline />
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {!isAuthenticated ? (
              <>
                {!isLogin && (
                  <Link to="/login">
                    <Button
                      variant="outline"
                      className="border border-gray-700 "
                    >
                      Log In
                    </Button>
                  </Link>
                )}
                {!isSignup && (
                  <Link to="/welcome">
                    <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                      Sign Up
                    </Button>
                  </Link>
                )}
              </>
            ) : (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(!open)}
                  className="bg-gray-200 rounded-2xl"
                >
                  <IoEllipseOutline />
                </Button>

                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded space-y-2 p-2">
                    {menu.map((item) =>
                      item.isLogout ? (
                        <button
                          key={item.name}
                          onClick={() => {
                            dispatch(logout());
                            navigate("/");
                            setOpen(false);
                          }}
                          className="block w-full text-left px-2 py-1 hover:bg-gray-200 rounded-md"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block w-full text-left px-2 py-1 hover:bg-gray-200 rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/*debug*/}
        {/* <div className="mt-2 flex space-x-2">
          <Button
            onClick={() => dispatch(loginSuccess())}
            className="bg-gray-600 text-white"
          >
            Debug Login
          </Button>
          <Button
            onClick={() => dispatch(logout())}
            className="bg-gray-600 text-white"
          >
            Debug Logout
          </Button>{" "}
        </div> */}
      </div>
    </nav>
  );
}
