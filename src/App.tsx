import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    const html = document.querySelector("html");
      html?.classList.remove("light");
      html?.classList.remove("dark");
      html?.classList.add(theme);
  }, []);

  return (
    <>
    <div className="dark:bg-[#231F31] dark:text-white text-black bg-white w-full">
      <Header />
        <Outlet/>
      <Footer />
    </div>
    </>
  )
}

export default App
