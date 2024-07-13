import { Link } from "react-router-dom";
import { HomeTitle } from "../../components/HomeTitle";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const HomeAbout = () => {
  const about = "Hello there! I'm Anurag Bhatt, a dedicated software engineer and full-stack developer with a deep passion for crafting innovative solutions through code. With a strong foundation in software development, I thrive on embracing new technologies and tackling complex challenges head-on. My journey in this dynamic field has been driven by a relentless curiosity and a commitment to continuous learning. Whether it's mastering the latest frameworks or refining algorithms, I approach each opportunity as a chance to expand my skill set and contribute meaningfully to projects. I am known for my adaptability, quick learning abilities, and enthusiasm for exploring cutting-edge advancements in the tech industry. Let's connect and explore how we can shape the future of software development together!"
  const aboutMobile = "I am a software engineer and a full-stack developer. I have a passion for software development and I am always eager to learn new technologies. I am a quick learner and I am always looking for new challenges."

  return (
    <>
      <div className="w-full">
        <HomeTitle title="ABOUT" link="/about" linkText="Explore More" />
      </div>
      <div className="md:grid flex flex-col md:grid-cols-[25%_75%]  items-center md:mx-10 max-md:mx-5 gap-2 mt-10 max-md:gap-y-0 bg-gradient-to-b dark:from-[#231F31] from-white to-gray-400  dark:to-[#1D1B25] rounded-b-3xl px-5">
        <div className="flex flex-wrap flex-col items-center justify-center max-md:items-start">
          <img
            src="https://res.cloudinary.com/dhwszoeej/image/upload/v1719085772/t7gv2dllvimo0tevnv3f.jpg"
            alt="Anurag Bhatt"
            className="md:w-60 md:h-80 w-44 h-60 rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:mx-10 mx-3 h-96">
          <div className="text-3xl dark:text-white text-black font-bold">
            About Me 🙋
          </div>
          <div className="text-xl dark:text-white text-black mt-5 text-justify overflow-hidden text-clip md:mb-6 mb-3 max-md:hidden">
            {about}
          </div>
          <div className="text-xl dark:text-white text-black mt-5 text-justify overflow-hidden text-clip md:mb-6 mb-3 md:hidden">
            {aboutMobile}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-end md:px-10 px-7 md:py-4 py-2">
        <Link to='/about' className="flex flex-row items-center gap-3 text-xl">View More <FaRegArrowAltCircleRight /></Link>
      </div>
    </>
  );
};
