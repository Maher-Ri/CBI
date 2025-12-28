"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getImageUrl } from "@/app/utils/getImageUrl";
export default function Navbar({ data }) {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // const isHome = pathname === "/";

  useEffect(() => {
    // if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const showSolidBackground = scrolled;

  const navbarBackground = showSolidBackground
    ? "bg-mainBlue shadow-yellow/20 shadow-md fade-in"
    : "bg-transparent";

  const borderBottom = showSolidBackground ? "" : "border-b-2 border-yellow";
  return (
    <nav
      className={`fixed top-[-1px] left-0 w-full z-50 transition-all duration-500 ${navbarBackground}`}
    >
      <div
        className={`mx-[5%] py-4 flex justify-between items-center h-[70px] ${
          showSolidBackground ? `md:h-[90px]` : `md:h-[120px]`
        } ${borderBottom}`}
      >
        <Link href="/">
          <Image
            src={getImageUrl(data?.logo?.url)}
            alt="CBI Logo"
            width={161}
            height={3465}
            className="w-[123px] md:w-[161px] h-auto"
          />
        </Link>
        <DesktopNav pathname={pathname} data={data} />
        <MobileToggle setOpen={setOpen} />
      </div>
      <MobileMenu
        open={open}
        setOpen={setOpen}
        pathname={pathname}
        data={data}
      />
    </nav>
  );
}

// ---------------------------------------------------------
// SUB-COMPONENT: Desktop Navigation
// ---------------------------------------------------------
function DesktopNav({ pathname, data }) {
  return (
    <>
      <ul className="hidden lg:flex items-center space-x-4 lg:space-x-8 text-white">
        {data?.links?.map((link) => {
          const isActive = pathname === link.url;
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                className={`text-lg font-medium uppercase transition-colors duration-300 relative pl-[20px]  ${
                  isActive
                    ? "active-link" // Ensure this class is defined in your CSS
                    : "text-white hover:text-yellow"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={data?.contact?.url}
        className="hidden lg:flex lg:items-center lg:justify-center w-[40px] h-[40px] border-2 border-white rounded-md hover:bg-gradient-to-tr hover:from-white/0 hover:via-yellow/20 hover:to-white/25 transition-all duration-300"
      >
        <Image
          src={getImageUrl(data?.contact?.icon?.url)}
          width={12}
          height={18}
          alt="contact icon"
          className="w-[12px] h-auto"
        />
      </Link>
    </>
  );
}

// ---------------------------------------------------------
// SUB-COMPONENT: Mobile Toggle Button
// ---------------------------------------------------------

function MobileToggle({ setOpen }) {
  return (
    <button onClick={() => setOpen(true)} className="lg:hidden w-8 h-8">
      <svg
        width="35px"
        height="35px"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(180)"
      >
        <path
          d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
          fill="#ffffff"
        />
        <path
          d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
          fill="#ffffff"
        />
        <path
          d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
          fill="#ffffff"
        />
      </svg>
    </button>
  );
}

// ---------------------------------------------------------
// SUB-COMPONENT: Mobile Sidebar Menu
// ---------------------------------------------------------
function MobileMenu({ open, setOpen, pathname, data }) {
  return (
    <div
      className={`fixed top-[0px] right-0 h-screen w-[100%] bg-mainBlue transform transition-transform duration-500 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-8 border-b-2 border-yellow h-[70px]">
        <Link href="/">
          <Image
            src={getImageUrl(data?.logo?.url)}
            alt="CBI Logo"
            width={123}
            height={35}
            className="w-[123px] h-auto"
          />
        </Link>

        <button onClick={() => setOpen(false)}>
          <Image src="/assets/close-icon.png" width={18} height={18} alt="X" className="w-[18px] h-auto" />
        </button>
      </div>

      <ul className="flex flex-col items-center justify-center mt-20 space-y-8 px-6 text-white">
        {data.links.map((link) => {
          const isActive = pathname === link.url;
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                onClick={() => setOpen(false)}
                className={`block text-lg uppercase transition-colors duration-300 relative px-[20px] ${
                  isActive ? "active-link" : "text-white hover:text-yellow"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={data?.contact?.url}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-[40px] h-[40px] border-2 border-white rounded-md hover:bg-gradient-to-tr hover:from-white/0 hover:via-yellow/20 hover:to-white/25 transition-all duration-300"
          >
            <Image
              src={getImageUrl(data?.contact?.icon?.url)}
              alt="contact icon"
              width={12}
              height={18}
              className="inline-block"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
