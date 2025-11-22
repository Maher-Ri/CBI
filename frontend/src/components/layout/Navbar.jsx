import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import contact from "../../assets/contact-us.svg";
import close from "../../assets/close-icon.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/"; // TRUE only on Home

  // SCROLL listener only on Home page
  useEffect(() => {
    if (!isHome) {
      setScrolled(true); // FORCE solid navbar on other pages
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Prevent scrolling when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navbarBackground = isHome
    ? scrolled
      ? "bg-mainBlue shadow-white/10 shadow-md" // Home scrolled
      : "bg-transparent" // Home top
    : "bg-mainBlue shadow-white/10 shadow-md"; // Other pages ALWAYS solid

  const borderBottom = scrolled ? "" : "border-b-2 border-white";
  return (
    <nav
      className={`
        fixed top-[-1px] left-0 w-full z-50 
        transition-all duration-500 
        ${navbarBackground}
      `}
    >
      <div
        className={`mx-[5%] py-4 flex justify-between items-center h-[70px] md:h-[90px] ${borderBottom}`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className={`text-2xl font-bold flex-shrink-0 tracking-widest transition-colors duration-500 `}>
          <img src={logo} alt="CBI Logo" className="w-[52px]" />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center space-x-10 text-white">
          {["ACCUEIL", "À PROPOS", "SERVICES", "PROJETS", "CARRIÈRES"].map(
            (item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`transition-colors duration-300 hover:text-babyBlue text-lg font-medium uppercase`}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
        <Link
          to="/contact"
          className="hidden md:block text-2xl font-bold tracking-widest transition-colors duration-500 flex-shrink-0 "
        >
          <img src={contact} alt="contact icon" className="w-[40px]" />
        </Link>
        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(true)} className="md:hidden w-8 h-8">
          <svg width="35px" height="35px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#ffffff"></path><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#ffffff"></path><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#ffffff"></path></g></svg>
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`
        fixed top-[-1px] right-0 h-full w-[100%] bg-mainBlue
        transform transition-transform duration-500 
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-between items-center px-8 border-b border-white h-[70px]">
          <Link
          to="/"
          className={`text-2xl font-bold flex-shrink-0 tracking-widest transition-colors duration-500 `}
        >
          <img src={logo} alt="CBI Logo" className="w-[52px]" />
        </Link>

          <button onClick={() => setOpen(false)}>
            <img src={close} alt="X" className="w-[18px]" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-center justify-center mt-20 space-y-8 px-6 text-white ">
          {["ACCUEIL", "À PROPOS", "SERVICES", "PROJETS", "CARRIÈRES"].map(
            (item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block text-lg text-gray-800 hover:text-babyBlue transition-colors uppercase duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              to="/"
              className="text-2xl font-bold tracking-widest transition-colors duration-500 text-center">
              <img src={contact} alt="contact icon" className="w-[40px] inline-block" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
