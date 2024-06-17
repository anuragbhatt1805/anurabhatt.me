// import { Link } from "react-router-dom"

import { ThemeSwitcher } from "../ThemeSwitcher"

export const Header = () => {
  return (
    <>
        <div className="flex flex-row flex-wrap px-2 justify-between bg-slate-400 dark:bg-gray-950 h-[8vh] text-black dark:text-white items-center">
            <div>
                <a href="/" className="text-3xl font-bold p-5">Anurag</a>
                {/* <Link to="/" className="text-2xl font-bold p-5">Anurag</Link> */}
            </div>
            <div>
                <a href="/about" className="p-4" title="About Me">About</a>
                <a href="/education" className="p-4" title="Education & Certification">Education</a>
                <a href="/experience" className="p-4" title="Experience & Achievement">Experience</a>
                <a href="/project" className="p-4" title="Project & Skills">Project</a>
                <a href="/blog" className="p-4" title="Blog Portfolio">Blog</a>
                <a href="/contact" className="p-4" title="Connect With Me">Contact</a>
                {/*
                <Link href="/about" className="p-5">About</Link>
                <Link href="/contact" className="p-5">Contact</Link>
                 */}
            </div>
            <div className="flex flex-wrap flex-row justify-center px-5">
                <ThemeSwitcher />

                <a href="/login" className="px-5 flex flex-row flex-wrap items-center justify-center dark:bg-white bg-gray-800 rounded-full dark:text-black text-white text-lg font-semibold border-4 border-gray-800 dark:border-white hover:border-gray-800 hover:bg-slate-400 hover:text-gray-800 hover:shadow-lg hover:shadow-slate-200 hover:dark:shadow-gray-600 hover:dark:bg-gray-800 hover:dark:text-white">
                        Download CV
                </a>
                {/*
                <Link href="/login" className="p-5">Login</Link>
                <Link href="/register" className="p-5">Register</Link>
                 */}
            </div>
        </div>
    </>
  )
}