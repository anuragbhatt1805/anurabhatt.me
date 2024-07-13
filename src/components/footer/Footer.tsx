import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="dark:bg-[#1D1B25] bg-gray-400 bottom-0 w-full">
      <div
        id="main"
        className="md:mx-20 py-10 grid grid-cols-10 max-md:grid-cols-1 max-md:gap-5 items-start h-fit"
      >
        <div
          id="left"
          className="flex flex-col gap-2 md:col-span-4 md:pr-10 items-center"
        >
          <h3 className="font-bold text-4xl mt-3 mb-6 text-[#1d1b25] bg-white px-8 py-2 rounded-full">
            Anurag 👨🏻‍💼
          </h3>
          <div className="flex flex-wrap flex-col gap-5">
            <Link
              to="mailto:anuragbhatt1805@gmail.com?subject=Hiring&body=Hello%20Anurag,%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project."
              target="_blank"
              className="text-xl font-semibold rounded-full py-0.5 w-40 text-center border-2 dark:text-[#1d1b25] dark:bg-white dark:hover:bg-[#1d1b25] dark:border-white dark:hover:text-white bg-gray-400 text-white hover:bg-white hover:text-[#1d1b25]"
            >
              Hire Me
            </Link>
            <Link
              to="https://shorturl.at/1S8yA"
              target="_blank"
              className="text-xl font-semibold rounded-full py-0.5 w-40 text-center border-2 dark:hover:text-[#1d1b25] dark:hover:bg-white dark:bg-[#1d1b25] dark:hover:border-white dark:text-white hover:bg-gray-400 hover:text-white bg-white text-[#1d1b25]"
            >
              Download CV
            </Link>
          </div>
        </div>
        <div
          id="middle"
          className="flex flex-col gap-2 md:col-span-3 md:pr-6 items-end text-lg max-md:items-center"
        >
          <h3 className="text-3xl font-semibold my-3">Links</h3>
          <span>Experience</span>
          <span>Projects</span>
          <span>Blogs</span>
          <span>Connect With Me</span>
        </div>
        <div
          id="right"
          className="flex flex-col gap-2 md:col-span-3 md:pr-3 items-end text-lg max-md:items-center"
        >
          <h3 className="text-3xl font-semibold my-3">Follow</h3>
          <span>LinkedIn</span>
          <span>Twitter (X)</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>
      <div
        id="foot"
        className="flex flex-row flex-wrap justify-around text-md max-md:flex-col max-md:gap-2 max-md:items-center pb-2"
      >
        <span>Copyright @ 2024</span>
        <span>Made with 🧠</span>
        <span>🇮🇳 India</span>
      </div>
    </footer>
  );
};
