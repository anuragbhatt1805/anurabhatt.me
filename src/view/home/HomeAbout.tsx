import { HomeTitle } from "../../components/HomeTitle";

export const HomeAbout = () => {
  return (
    <>
      <div className="w-full">
        <HomeTitle title="ABOUT" link="/about" linkText="Explore More" />
      </div>
      <div className="md:grid flex flex-col md:grid-cols-[30%_70%]  items-center mx-10 gap-2 mt-10 max-md:gap-y-10 bg-gradient-to-b dark:from-[#231F31] from-white to-gray-400  dark:to-[#1D1B25] rounded-b-3xl px-5">
        <div className="flex flex-wrap flex-col items-center justify-center max-md:items-start">
          <img
            src="https://res.cloudinary.com/dhwszoeej/image/upload/v1719345860/portfolio_cobfbt.png"
            alt="Anurag Bhatt"
            className="md:w-80 md:h-80 w-60 h-60"
          />
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center mx-10 ">
          <div className="text-2xl dark:text-white text-black font-bold">
            About Me
          </div>
          <div className="text-xl dark:text-white text-black mt-5 text-justify overflow-hidden">
            Hello there! I'm Anurag Bhatt, a dedicated software engineer and
            full-stack developer with a deep passion for crafting innovative
            solutions through code. With a strong foundation in software
            development, I thrive on embracing new technologies and tackling
            complex challenges head-on. My journey in this dynamic field has
            been driven by a relentless curiosity and a commitment to continuous
            learning. Whether it's mastering the latest frameworks or refining
            algorithms, I approach each opportunity as a chance to expand my
            skill set and contribute meaningfully to projects. I am known for my
            adaptability, quick learning abilities, and enthusiasm for exploring
            cutting-edge advancements in the tech industry. Let's connect and
            explore how we can shape the future of software development
            together!
          </div>
        </div>
      </div>
    </>
  );
};
