import { Link } from "react-router-dom";
import { HomeTitle } from "../../components/HomeTitle";
import { MapView } from "../../components/map/MapView";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const HomeExperience = () => {
  return (
    <>
      <div className="w-full">
        <HomeTitle title="EXPERIENCE" link="/experience" linkText="View Past" />
      </div>
      <div className="w-full md:grid flex flex-col md:grid-cols-[60%_40%]  items-center md:mx-10 max-md:mx-5 gap-2 mt-10 max-md:gap-y-0 bg-gradient-to-b dark:from-[#231F31] from-white to-gray-400  dark:to-[#1D1B25] rounded-b-3xl px-5">
        <div className="flex flex-col justify-start md:mx-10 mx-3 md:h-96 max-md:h-fit md:py-5 max-md:pb-10 max-md:gap-y-5">
          <div className="md:text-center text-start text-3xl dark:text-white text-black font-bold ">
            Last/Current Position 🏛️
          </div>
          <div className="flex flex-col gap-4 mx-auto md:px-16 md:my-7">
            <div>
            <img
              src="https://res.cloudinary.com/dhwszoeej/image/upload/v1720907582/assets_2Fimage_2Flogo_2Fwhiteboardtec-logo_ahfydo.png"
              className="h-16 bg-white rounded-lg p-1 items-start"
            />
            </div>
            <div className="flex flex-col justify-center gap-y-3">
              <div className=" hover:text-[#6adb45] flex flex-col">
                <span className="text-4xl font-bold">
                  Freelance Software Engineer
                </span>
              </div>
              <span className="text-lg md:font-thin italic flex flex-col">
                <Link to="https://www.whiteboardtec.com/" target="_blank" className="hover:text-[#6adb45]"><span className="font-semibold">Whiteboard Technologies Pvt. Ltd.</span></Link>
                <span>
                    Bengaluru, Karnataka, India
                </span>
              </span>
              <span className="text-lg md:font-thin italic flex md:flex-row max-md:flex-col justify-between">
                <span >On - Site</span>
                <span className="hover:text-[#FE7C09]">Feb 2024 - July 2024</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-md:hidden w-full h-full pr-10">
          <MapView
            position={[13.034853411519276, 77.575235434185]}
            popup="Whiteboard Technologies Pvt. Ltd."
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-end md:px-10 px-7 md:py-4 py-2">
        <Link to='/experience' className="flex flex-row items-center gap-3 text-xl  text-blue-500 hover:text-blue-900">Past Experiences <FaRegArrowAltCircleRight /></Link>
      </div>
    </>
  );
};
