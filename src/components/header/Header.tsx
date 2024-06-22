import { Link } from "react-router-dom";
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
    <>
      <div className="flex flex-row flex-wrap md:px-2 pl-2 h-10 justify-between max-md:items-start items-center font-serif">
        <div>
          <Link to="/" className="text-2xl font-bold md:px-5 ">
            Anurag
          </Link>
        </div>
        <div className="absolute top-1 right-2 md:hidden">
          <button onClick={() => setOpenNav(!openNav)} className="text-2xl font-sans">
            {openNav ? "X" : "☰"}
          </button>
        </div>
          {openNav && (
        <div className={`flex flex-wrap flex-row justify-center max-md:items-start md:px-5 items-center max-md:flex-col ${openNav ? "dark:bg-[#231f31] py-5 rounded-bl-2xl bg-white duration-300":""}`}>

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
    </>
  );
};
