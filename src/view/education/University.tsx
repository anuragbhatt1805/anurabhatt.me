import { Link } from "react-router-dom";
import { MapView } from "../../components/map/MapView";
import { Tag } from "../../components/Tag"
import { EducationProp } from "./Education"

export const University = ( data: EducationProp ) => {
  return (
    <>
      <div className="w-full md:w-[90%] md:grid flex flex-col md:grid-cols-[60%_40%] justify-center  items-center md:mx-10 max-md:mx-5 gap-2 my-5 h-fit max-md:gap-y-0 bg-gray-400  dark:bg-[#1D1B25] rounded-3xl px-5">
        <div className="flex flex-col justify-start md:mx-10 mx-3 h-fit md:py-10 max-md:pb-10 max-md:gap-y-5 max-md:pt-8">
          <div className="flex flex-row gap-4 items-start md:px-16 md:my-7">
            <img
              src={data?.logo}
              className="w-14 bg-white rounded-full p-1 h-14 text-black"
              alt="N/A"
            />
            <div className="flex flex-col justify-center gap-y-3">
              <div className=" hover:dark:text-[#FE7C09] hover:text-blue-800 flex flex-col">
                <span className="text-4xl font-bold">
                  {data?.degree}
                </span>
                <span className="text-xl font-semibold">
                  {data?.major}
                </span>
              </div>
              <span className="text-lg md:font-thin italic flex flex-col">
                <Link to={data?.website || "#"} target="_blank" className="hover:dark:text-[#FE7C09] hover:text-blue-800"><span className="font-semibold">{data?.university}</span></Link>
                <span>
                    {data?.location}
                </span>
              </span>
              <span className="text-lg md:font-thin italic flex md:flex-row max-md:flex-col justify-between">

                <span className="hover:dark:text-[#FE7C09] hover:text-blue-800">
                  <b className="font-semibold">Passing Year:</b> {data?.passingYear}
                </span>
                <span className="hover:dark:text-[#FE7C09] hover:text-blue-800">
                  <b className="font-semibold">Grade: </b> {data?.grade} {data?.grading}
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 md:gap-y-3">
            {
                data?.hardskills && (
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-semibold hover:dark:text-[#FE7C09] hover:text-blue-800 w-fit">Core Skills</span>
                        <div className="flex flex-row flex-wrap gap-2">
                            {
                                data?.hardskills.map((item, index) => (
                                    <Tag key={index} name={item} />
                                ))
                            }
                        </div>
                    </div>
                )
            }
            {
                data?.softskills && (
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-semibold hover:dark:text-[#FE7C09] hover:text-blue-800 w-fit">Soft Skills</span>
                        <div className="flex flex-wrap gap-2">
                            {
                                data?.softskills.map((item, index) => (
                                    <Tag key={index} name={item} />
                                ))
                            }
                        </div>
                    </div>
                )
            }
          </div>
        </div>
        {
            data?.coordinates && (
                <div className="flex flex-col items-center justify-center max-md:hidden w-full h-full pr-10">
                    <MapView
                        position={data?.coordinates}
                        popup={data?.university}
                    />
                </div>
            )
        }
      </div>
    </>
  );
};
