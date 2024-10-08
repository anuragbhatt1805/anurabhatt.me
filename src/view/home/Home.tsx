import { Link } from "react-router-dom";
import { HomeTitle } from "../../components/HomeTitle";
import { HomeAbout } from "./HomeAbout";
import { HomeEducation } from "./HomeEducation";
import { HomeExperience } from "./HomeExperience";
import { Introduction } from "./Introduction";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export function Home() {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:mx-10 max-md:mx-5 gap-2 mt-10 max-md:gap-y-10 bg-gradient-to-b dark:from-[#231F31] from-white to-gray-400  dark:to-[#1D1B25] rounded-b-3xl px-5">
        <div className="flex flex-wrap flex-col items-center justify-center">
          <Introduction />
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center max-md:items-start">
          <div className="md:mr-40 dark:text-white text-black">
            <img src="https://res.cloudinary.com/dhwszoeej/image/upload/v1719345860/portfolio_cobfbt.png" alt="Anurag Bhatt" className="md:w-80 md:h-80 w-60 h-60" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row items-center my-10">
        <HomeAbout/>
      </div>
      <div className="flex flex-wrap flex-row items-center my-10">
        <HomeEducation />
      </div>
      <div className="flex flex-wrap flex-row items-center my-10">
        <HomeExperience />
      </div>
      <div className="flex flex-wrap flex-row items-center my-10">
        <div className="w-full">
          <HomeTitle title="PROJECTS & SKILLS" link="/project" linkText="All Projects"/>
        </div>
        <div className="w-full flex md:flex-row max-md:flex-col justify-center gap-3 text-xl md:px-10 px-7 md:pt-4 pt-5">
          To View Projects & Skills, Please Navigate To Project Tab
          <Link to='/project' className="text-blue-500 flex flex-row items-center gap-3 hover:text-blue-900">Project Tab <FaRegArrowAltCircleRight /></Link>
        </div>
      </div>
    </div>
  );
}