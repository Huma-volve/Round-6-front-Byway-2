import { useEffect, useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollYRef = useRef(0);

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

  function toggleNavHandler() {
    setIsNavOpen((prev) => !prev);
  }

  // Toggle scroll lock when menu opens/closes
  useEffect(() => {
    const body = document.body;
    const docEl = document.documentElement;
    if (isNavOpen) {
      // Save current scroll position
      scrollYRef.current = window.scrollY || window.pageYOffset;

      // Lock scroll by fixing body position
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";

      // Also hide overflow on root (safe-guard)
      docEl.style.overflow = "hidden";
    } else {
      // Restore styles
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      docEl.style.overflow = "";

      // Restore scroll position
      window.scrollTo(0, scrollYRef.current);
      // enable scroll again
    }
    // Cleanup when component unmounts
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      docEl.style.overflow = "";
    };
  }, [isNavOpen]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsNavOpen(false);
      }
    }

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <header className="relative">
      <nav className="border-b border-gray-200 bg-white w-full fixed top-0 left-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* logo */}
            <Link
              to="/"
              className="flex items-center space-x-1 text-lg font-semibold text-gray-700 mr-7"
            >
              <img src="/logo.svg" alt="Byway Logo" className="h-9 w-9" />
              Byway
            </Link>

            {/* search bar */}
            <div className="hidden md:flex flex-1 max-w-lg mr-10">
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
            {/* language and fav, cart, notification buttons */}
            <div className="flex items-center space-x-3">
              {isHome && (
                <>
                  {/* Language */}
                  <div className="hidden lg:flex gap-4">
                    <Button
                      variant="outline"
                      className="border border-gray-700"
                    >
                      English
                    </Button>
                    <Button
                      variant="outline"
                      className="border border-gray-700"
                    >
                      Arabic
                    </Button>
                  </div>
                  <Select>
                    <SelectTrigger className="hidden md:flex w-fit !h-fit lg:hidden border cursor-pointer border-gray-700 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground">
                      <SelectValue placeholder="En" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english" title="English">
                        En
                      </SelectItem>
                      <SelectItem value="arabic" title="Arabic">
                        Ar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}
              {/* Icons buttons */}
              <div className="hidden md:flex space-x-2">
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
              {/* Auth buttons */}
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
              <Button
                ref={buttonRef}
                variant="outline"
                className="block md:hidden"
                onClick={toggleNavHandler}
              >
                {isNavOpen ? <X /> : <Menu />}
              </Button>
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

      {/* mobile navigation */}
      <nav
        ref={navRef}
        className={`md:hidden absolute right-0 top-0 h-lvh z-20 flex flex-col gap-6 items-center justify-center pt-17 px-3 backdrop-blur-2xl bg-white/70 border border-l-gray-40 transform transition-transform duration-300 ease-in translate-x-full ${
          isNavOpen && "!translate-x-0"
        }`}
      >
        <div className="w-full">
          <Input
            type="text"
            placeholder="Search"
            className="h-10 pr-10 w-full border border-gray-600 focus-visible:ring-0 focus-visible:border"
          />
        </div>

        {isHome && (
          <>
            {/* Language */}
            <div className="flex gap-4">
              <Button variant="outline" className="border border-gray-700">
                English
              </Button>
              <Button variant="outline" className="border border-gray-700">
                Arabic
              </Button>
            </div>
            <Select>
              <SelectTrigger className="hidden md:flex w-fit !h-fit lg:hidden border cursor-pointer border-gray-700 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground">
                <SelectValue placeholder="En" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english" title="English">
                  En
                </SelectItem>
                <SelectItem value="arabic" title="Arabic">
                  Ar
                </SelectItem>
              </SelectContent>
            </Select>
          </>
        )}
        {/* Icons buttons */}
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
        {/* Auth buttons */}
        {!isAuthenticated ? (
          <>
            {!isLogin && (
              <Link to="/login">
                <Button variant="outline" className="border border-gray-700 ">
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
      </nav>
    </header>
  );
}
