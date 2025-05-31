import React, { useEffect, useState } from "react";
import logo from "../../images/logonew.png";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menu, setMenu] = useState(false);
  const [More, setMore] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 30);
    setMore(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMenuBar = () => {
    setMenu(!menu);
  };

  const hideNavItems = () => {
    setMenu(false);
  };

  return (
    <div
      className={`head1 w-[100%] max-w-[2600px] h-[80px] responsive-header pl-6 pr-20 bg-white shadow-md ${menu ? "max-h-max" : ""} top-0 z-50`}
    >
      <header className="h-full w-full box-border flex justify-between items-center">
        <Link
          to="/"
          className="flex flex-row items-center gap-2" // Changed from flex-col to flex-row
        >
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer ${
              isMobile ? "w-[40px] h-[40px]" : "w-[68px] h-[68px] ml-5 logo-img"
            }`}
          />
          <span
            className={`${
              isMobile
                ? " ml-6 text-lg"
                : "ml-12 lg:text-4xl sm:text-lg"
            } font-extrabold text-blue-900`}
          >
          </span>
        </Link>
        {isMobile && menu && (
          <RxCross2
            cursor="pointer"
            size={25}
            onClick={toggleMenuBar}
          />
        )}
        {isMobile && !menu && (
          <RiMenu2Fill
            cursor="pointer"
            size={25}
            onClick={toggleMenuBar}
          />
        )}

        <ul
          onClick={hideNavItems}
          className={
            isMobile
              ? `text-blue-800 font-bold lg:2xl flex flex-col gap-2 nav-bg py-3 w-full  absolute h-max top-[50px] ${
                  !menu
                    ? "right-[100%] "
                    : "right-0 transition-all .5s ease-in"
                } items-center  text-lg cursor-pointer scrolled`
              : `text-blue-800 mr-20 font-bold lg:2xl flex justify-between items-center gap-20 nav-text`
          }
        >
          <Link
            to="/"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
          >
            Home
          </Link>

          <Link
            to="/catalogue"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
          >
            Catalogue
          </Link>
          <Link
            to="/aboutus"
            className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
          >
            About Us
          </Link>
          <Link
                  to="/contactUs"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"} `}
                >
                  Contact us
                </Link>
                {/* <li className="relative group">
            <li> */}
                <Link
                  to="/gallery"
                  className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}
                >
                  Gallery
                </Link>
              {/* </li> */}

            <ul
              className={`${
                isMobile
                  ? "flex flex-col text-black items-center gap-2"
                  : `absolute ${
                      More ? "block" : "hidden"
                    } max-w-max whitespace-nowrap    space-y-2 py-2  px-4 -right-14  rounded`
              }   ${
                !isScrolled && !isMobile
                  ? "no-scrolled"
                  : " bg-white text-black"
              }`}
              onClick={() => setMore(false)}
            >
  
            </ul>
          {/* </li> */}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
