import { useEffect, useRef } from "react";
import { FaEnvelopeSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Typed from "typed.js";
// import { DownloadButton } from "../../components/header/DownloadCV";

export const Introduction = () => {
  const el = useRef(null);

  const roles = [
    " Software Developer",
    " Full Stack Developer",
    " Server Administrator",
    " Photographer",
    " Traveller",
  ];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: roles,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      shuffle: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="font-serif">
      <div className="my-5 flex flex-wrap flex-col gap-2">
        <h2 className="text-4xl dark:text-white text-[#1d1b25] font-semibold pl-1">
          Hello, I'm
        </h2>
        <h1 className="text-6xl text-[#FE7C09] font-bold">Anurag Bhatt</h1>
        <h3
          className="text-3xl h-9 font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FE7C09] via-[#9A489A] via-20% to-[#5D29F2] to-60% text-nowrap overflow-y-auto"
          ref={el}
        ></h3>
      </div>
      <div className="flex flex-wrap flex-row max-md:flex-col gap-2">
        <Link
          to="mailto:hire@anurag-bhatt.me?subject=Hiring&body=Hello%20Anurag,%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project."
          target="_blank"
          className="text-lg font-semibold rounded-full py-0.5 w-36 text-center border-2 dark:text-[#1d1b25] dark:bg-white dark:hover:bg-[#1d1b25] dark:border-white dark:hover:text-white bg-[#1d1b25] text-white hover:bg-white hover:text-[#1d1b25]"
        >
          Hire Me
        </Link>
        <Link
          to="https://shorturl.at/1S8yA"
          target="_blank"
          className="text-lg font-semibold rounded-full py-0.5 w-36 text-center border-2 dark:hover:text-[#1d1b25] dark:hover:bg-white dark:bg-[#1d1b25] dark:hover:border-white dark:text-white hover:bg-[#1d1b25] hover:text-white bg-white text-[#1d1b25]"
        >
          Download CV
        </Link>
        {/* <DownloadButton /> */}
      </div>
      <div className="flex flex-wrap flex-row md:gap-3 gap-2 my-5 md:mx-2">
      <Link to='https://www.linkedin.com/in/anurag-bhatt-846a241b8/' target="_blank"><FaLinkedin size="2rem"/></Link>
      <Link to='https://x.com/anuragbhatt1805' target="_blank"><FaSquareXTwitter size="2rem"/></Link>
      <Link to='https://facebook.com/anurag.bhatt.52459/' target="_blank"><FaFacebookSquare size="2rem"/></Link>
      <Link to='https://instagram.com/galaxy.click_capture/' target="_blank"><FaInstagramSquare size="2rem"/></Link>
      <Link to='https://github.com/anuragbhatt1805/' target="_blank"><FaGithubSquare size="2rem"/></Link>
      <Link to='mailto:connect@anurag-bhatt.me' target="_blank"><FaEnvelopeSquare size="2rem"/></Link>
      </div>
    </div>
  );
};
