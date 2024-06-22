import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"

function App() {

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
