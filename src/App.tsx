import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { useEffect, useRef } from "react";
import GoTo from "./components/goto/GoTo";
import { Analytics } from "@vercel/analytics/react"

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    const html = document.querySelector("html");
      html?.classList.remove("light");
      html?.classList.remove("dark");
      html?.classList.add(theme);
  }, []);

  const reference = useRef<HTMLDivElement>(null);

  return (
    <>
    <Analytics />
    <div ref={reference} className="absolute"></div>
    <div className="dark:bg-[#231F31] dark:text-white text-black bg-white w-full">
      <Header />
        <Outlet/>
        <GoTo props={reference}/>
      <Footer />
    </div>
    </>
  )
}

export default App
