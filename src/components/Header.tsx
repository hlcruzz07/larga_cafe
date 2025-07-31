import logo from "../assets/img/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`py-5 fixed z-100 top-0 transition-all ease-in-out duration-300 w-full ${
        scrollY > 0 ? "bg-zinc-950 shadow-md" : "border-b border-gray-100/30"
      }`}
    >
      <div className="flex items-center justify-between mx-6 md:mx-10 lg:mx-30 xl:mx-45">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Larga Café"
            className="h-10 w-10 rounded-full object-cover bg-white p-1"
          />
          <h1 className="text-lg lg:text-2xl font-bold text-white">
            Larga Café
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-white font-medium">
          <Link
            to="/"
            className="hover:text-amber-300 px-3 before:absolute before:left-0 before:rounded-full relative before:border-t-4 before:bottom-[-5px] before:w-0 hover:before:w-full before:transition-all  transition-all before:ease-in-out before:duration-300 text-base"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-amber-300 px-3 before:absolute before:left-0 before:rounded-full relative before:border-t-4 before:bottom-[-5px] before:w-0 hover:before:w-full before:transition-all  transition-all before:ease-in-out before:duration-300 text-base"
          >
            About
          </Link>
          <Link
            to="#"
            className="hover:text-amber-300 px-3 before:absolute before:left-0 before:rounded-full relative before:border-t-4 before:bottom-[-5px] before:w-0 hover:before:w-full before:transition-all  transition-all before:ease-in-out before:duration-300 text-base"
          >
            Services
          </Link>
          <Link
            to="#"
            className="hover:text-amber-300 px-3 before:absolute before:left-0 before:rounded-full relative before:border-t-4 before:bottom-[-5px] before:w-0 hover:before:w-full before:transition-all  transition-all before:ease-in-out before:duration-300 text-base"
          >
            Menu
          </Link>
          <div className="group">
            <button className="hover:text-stone-300 transition-all ease-in-out duration-300 text-base p-2 flex items-center cursor-pointer">
              Pages
              <FontAwesomeIcon icon={faChevronDown} className="ms-2 text-xs" />
            </button>
            <div className="flex-col max-h-0 rounded-2xl group-hover:bg-stone-600 group-hover:max-h-screen overflow-hidden p-3 w-3xs py-1 transition-all duration-300 ease-in-out flex absolute shadow-sm">
              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Blog
              </Link>
              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Testimonials
              </Link>
              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Gallery
              </Link>
              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Our Team
              </Link>
              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                FAQ's
              </Link>
            </div>
          </div>
          <Link
            to="#"
            className="hover:text-amber-300 px-3 before:absolute before:left-0 before:rounded-full relative before:border-t-4 before:bottom-[-5px] before:w-0 hover:before:w-full before:transition-all  transition-all before:ease-in-out before:duration-300 text-base"
          >
            Contact Us
          </Link>
        </div>
        <Link
          to="#"
          className={`hover:text-stone-300 hidden lg:block text-white border-2 p-2 px-8 rounded-2xl transition-all ease-in-out duration-300 text-base ${
            scrollY > 0 ? "bg-stone-600" : ""
          }`}
        >
          Get Started
        </Link>

        <div className="lg:hidden">
          <button className="text-white focus:outline-none text-2xl cursor-pointer">
            <FontAwesomeIcon
              icon={isOpen ? faX : faBars}
              className="transition-all duration-600 ease-in-out"
              onClick={toggleNav}
            />
          </button>

          <div
            className={`absolute top-20 text-white bg-stone-600 w-full right-0 transition-all duration-300 ease-in-out overflow-hidden shadow-sm ${
              isOpen ? "max-h-screen" : "max-h-[0px]"
            }`}
          >
            <div className="flex flex-col px-3 pb-3">
              <Link
                to="/"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                About
              </Link>
              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Services
              </Link>
              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Menu
              </Link>

              <div className="group" tabIndex={0}>
                <button className="text-base ms-2 py-2 flex items-center cursor-pointer hover:text-amber-300 transition-all ease-in-out duration-300 hover:translate-x-2 group-focus-within:translate-x-2">
                  Pages
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ms-2 text-xs"
                  />
                </button>
                <div className="ms-3 flex-col max-h-0 group-focus-within:max-h-screen group-focus-within:translate-x-2 overflow-hidden transition-all duration-300 ease-in-out flex ">
                  <Link
                    to="#"
                    className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
                  >
                    Blog
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
                  >
                    Gallery
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
                  >
                    FAQ's
                  </Link>
                </div>
              </div>

              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Contact Us
              </Link>

              <Link
                to="#"
                className="hover:text-amber-300 hover:translate-x-2 transition-all ease-in-out duration-300 text-base p-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
