import { Link } from "react-router-dom";
import { HomeTitle } from "../../components/HomeTitle";
import { MapView } from "../../components/map/MapView";

export const HomeEducation = () => {
  return (
    <>
      <div className="w-full">
        <HomeTitle title="EDUCATION" link="/education" linkText="See More" />
      </div>
      <div className="w-full md:grid flex flex-col md:grid-cols-[60%_40%]  items-center md:mx-10 max-md:mx-5 gap-2 mt-10 max-md:gap-y-0 bg-gradient-to-b dark:from-[#231F31] from-white to-gray-400  dark:to-[#1D1B25] rounded-b-3xl px-5">
        <div className="flex flex-col justify-start md:mx-10 mx-3 md:h-96 max-md:h-fit md:py-10 max-md:gap-y-5">
          <div className="md:text-center text-start text-3xl dark:text-white text-black font-bold ">
            Highest Qualification 🎓
          </div>
          <div className="flex flex-row gap-4 items-start md:px-16 md:my-7">
            <img
              src="https://res.cloudinary.com/dhwszoeej/image/upload/v1720903507/HKBK-College-Logo_gxdzp3.png"
              className="h-14 bg-white dark:bg-[#231F31] bg-opacity-40 rounded-full p-1"
            />
            <div className="flex flex-col justify-center gap-y-3">
              <div className=" hover:text-[#FE7C09] flex flex-col">
                <span className="text-4xl font-bold">
                  Bachelor of Engineering
                </span>
                <span className="text-xl font-semibold">
                  Computer Science & Engineering
                </span>
              </div>
              <span className="text-lg md:font-thin italic flex flex-col">
                <Link to="https://www.hkbk.edu.in/" target="_blank" className="hover:text-[#FE7C09]"><span className="font-semibold">HKBK College of Engineering</span>, aff. to VTU</Link>
                <span>
                    Bengaluru, Karnataka, India
                </span>
              </span>
              <span className="text-lg md:font-thin italic flex md:flex-row max-md:flex-col justify-between">
                <span>Oct 2020 - May 2024</span>
                <span className="hover:text-[#FE7C09]">
                  <b className="font-semibold">CGPA:</b> 8.3/10
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-md:hidden w-full h-full pr-10">
          <MapView
            position={[13.036, 77.6199]}
            popup="HKBK College of Engineering"
          />
        </div>
      </div>
    </>
  );
};
