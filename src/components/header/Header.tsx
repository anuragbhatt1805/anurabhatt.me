import { NavLink, Link } from "react-router-dom";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { NavLinkItem, NavLinkProps } from "./NavLinkItem.tsx";
import { useState, useEffect } from "react";

const navLinks: NavLinkProps[] = [
  { to: "/about", label: "About", details: "About Me" },
  {
    to: "/education",
    label: "Education",
    details: "Education & Certification",
  },
  {
    to: "/experience",
    label: "Experience",
    details: "Experience & Achievement",
  },
  { to: "/project", label: "Project", details: "Project & Skills" },
  { to: "/blog", label: "Blog", details: "Blog Portfolio", new: true },
  { to: "/contact", label: "Contact", details: "Connect With Me" },
];

export const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setOpenNav(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative top-0">
      <div className="flex flex-row flex-wrap md:px-2 pl-2 md:h-14 h-10 justify-between max-md:items-start items-center font-serif top-0 bg-gray-400 dark:bg-[#1d1b25]">
        <div>
          <NavLink to="/">
            <h3 className="font-bold text-xl max-md:my-2 md:text-3xl md:mx-4 text-[#1d1b25] bg-white md:px-5 px-2 py-0.5 rounded-full">Anurag 👨🏻‍💼</h3>
          </NavLink>
        </div>
        <div className="absolute top-1 right-2 md:hidden">
          <button onClick={() => setOpenNav(!openNav)} className="text-3xl font-sans">
            {openNav ? "X" : "☰"}
          </button>
        </div>
          {openNav && (
        <div className={`flex flex-wrap flex-row justify-center max-md:items-start md:px-5 items-center max-md:flex-col ${openNav ? "max-md:dark:bg-[#231f31] max-md:bg-gray-400 max-md:pb-5 max-md:pt-2 max-md:rounded-bl-2xl duration-300 max-md:right-0":""} text-xl`}>
              <div className="md:mx-5 flex flex-wrap flex-row max-md:flex-col">
                {navLinks.map((navLink, index) => (
                  <NavLinkItem key={index} {...navLink} />
                ))}
              </div>
              <div className="max-md:m-2 flex flex-wrap flex-row items-center">
              <ThemeSwitcher />
              </div>

              <Link
                to="/login"
                className="max-md:mx-2 px-5 border-2 dark:border-white rounded-full font-semibold dark:hover:bg-white dark:hover:text-[#231F31] border-[#231F31] hover:bg-[#231F31] hover:text-white"
              >
                Download CV
              </Link>
        </div>
          )}
      </div>
    </header>
  );
};
