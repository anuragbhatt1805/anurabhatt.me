import { useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<String>(
    localStorage.getItem("theme") || "dark"
  );
  const [hoverTheme, setHoverTheme] = useState<Boolean>(false);

  const switchTheme = () => {
    const html = document.querySelector("html");
    if (theme === "light") {
      html?.classList.remove("light");
      html?.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      html?.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <>
      <label
        className="inline-flex items-center me-3 cursor-pointer"
        onMouseOver={() => {
          setHoverTheme(true);
        }}
        onMouseOut={() => {
          setHoverTheme(false);
        }}
      >
        <input
          type="checkbox"
          className="sr-only peer duration-300"
          checked={theme === "dark"}
          onClick={switchTheme}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#231F31] dark:peer-focus:ring-gray-300 dark:bg-gray-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
        <span
          className={`${
            hoverTheme ? "" : "hidden"
          } max-md:flex ms-3 text-sm font-medium text-gray-300 dark:text-gray-800 md:absolute md:top-10 bg-gray-800 dark:bg-white px-2 md:py-1 md:rounded-lg rounded-full`}
        >
          Switch to {theme === "dark" ? "light" : "dark"}
        </span>
      </label>
    </>
  );
}
