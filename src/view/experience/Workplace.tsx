import { Link } from "react-router-dom";
import { MapView } from "../../components/map/MapView";
import { Tag } from "../../components/Tag";
import { ExperienceProp } from "./Experience";

export const Workplace = (data: ExperienceProp) => {
  return (
    <>
      <div className="w-full md:w-[90%] md:grid flex flex-col md:grid-cols-[60%_40%] justify-center  items-center md:mx-10 max-md:mx-5 gap-2 my-5 h-fit max-md:gap-y-0 bg-gray-400  dark:bg-[#1D1B25] rounded-3xl px-5">
        <div className="flex flex-col justify-start items-start md:mx-10 mx-3 h-fit md:py-10 max-md:pb-10 max-md:gap-y-5 max-md:pt-8">
          <div className="flex flex-col gap-4 max-md:mx-auto md:px-16 md:my-7">
            <div>
              <img
                src={data?.logo}
                className="h-16 bg-white rounded-lg p-1 items-start"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-3">
              <div className=" hover:text-[#6adb45] flex flex-col">
                <span className="text-4xl font-bold">{data?.position}</span>
              </div>
              <span className="text-lg md:font-thin italic flex flex-col">
                <Link
                  to={data?.website || ""}
                  target="_blank"
                  className="hover:text-[#6adb45]"
                >
                  <span className="font-semibold">{data?.company}</span>
                </Link>
                <span>{data?.location}</span>
              </span>

              {data?.description && (
                <div className="flex flex-col items-center justify-center md:hidden w-full h-full rounded-lg border-2 border-black py-1 dark:text-[#6adb45] dark:border-[#6adb45] my-2">
                  <span className=" w-full h-full flex text-xl text-justify px-3 font-bold">
                    Description
                  </span>
                  <span className=" w-full h-full flex text-lg text-justify px-3">
                    {data?.description}
                  </span>
                </div>
              )}
              <span className="text-lg md:font-thin italic flex flex-row justify-start gap-x-2 hover:text-[#6adb45]">
                <span>
                  {data?.startDate.toLocaleDateString(undefined, {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span>-</span>
                <span>
                  {data?.endDate === "Present"
                    ? "Present"
                    : data?.endDate.toLocaleDateString(undefined, {
                        month: "short",
                        year: "numeric",
                      })}
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 md:gap-y-3 md:mx-10">
            {data?.hardskills && (
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold hover:dark:text-[#6adb45] hover:text-blue-800 w-fit">
                  Core Skills
                </span>
                <div className="flex flex-row flex-wrap gap-2">
                  {data?.hardskills.map((item, index) => (
                    <Tag key={index} name={item} />
                  ))}
                </div>
              </div>
            )}
            {data?.softskills && (
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold hover:dark:text-[#6adb45] hover:text-blue-800 w-fit">
                  Soft Skills
                </span>
                <div className="flex flex-wrap gap-2">
                  {data?.softskills.map((item, index) => (
                    <Tag key={index} name={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {data?.coordinates ? (
          <div className="flex flex-col items-center justify-center max-md:hidden w-full h-full pr-10">
            <MapView
              position={data?.coordinates}
              popup="Whiteboard Technologies Pvt. Ltd."
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center max-md:hidden w-full h-full pr-10">
              <span className="rounded-lg m-10 border-2 dark:border-white border-black w-full h-full flex items-center justify-center text-2xl">
                No Coordinates Added for the Workplace
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};
