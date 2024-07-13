import { HomeTitle } from "../../components/HomeTitle";
import { MapView } from "../../components/map/MapView";

export const HomeEducation = () => {
  return (
    <>
      <div className="w-full">
        <HomeTitle title="EDUCATION" link="/education" linkText="See More" />
      </div>
      <div className="w-full md:grid flex flex-col md:grid-cols-[60%_40%]  items-center md:mx-10 max-md:mx-5 gap-2 mt-10 max-md:gap-y-0 bg-gradient-to-b dark:from-[#231F31] from-white to-gray-400  dark:to-[#1D1B25] rounded-b-3xl px-5">
        <div className="flex flex-col items-center justify-start md:mx-10 mx-3 h-96 md:py-10">
          <div className="text-3xl dark:text-white text-black font-bold ">
            Highest Qualification 🎓
          </div>
          <div className="text-xl dark:text-white text-black mt-5 text-justify overflow-hidden text-clip md:mb-6 mb-3 max-md:hidden">
            about
          </div>
        </div>
          <div className="flex flex-col items-center justify-center max-md:items-start w-full h-full pr-10">
              <MapView
                position={[13.0360, 77.6199]}
                popup="HKBK College of Engineering"
              />
          </div>
      </div>
    </>
  );
};
