import { useState, useEffect, useCallback } from "react";
import { ProjectProp } from "./Project";
import { Tag } from "../../components/Tag";
import { Link } from "react-router-dom";
import { GrDocker, GrGithub, GrPrevious, GrNext  } from "react-icons/gr";
import { FaLink } from "react-icons/fa";

export const ProjectDetail = (props: ProjectProp) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handlePrevImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => {
            if (props.image){
                if (prevIndex === 0) {
                    return props.image?.length - 1;
                } else {
                    return prevIndex - 1;
                }
            }
            return 0;
        });
    }, [props.image]);

    const handleNextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => {
            if (props.image){
                if (prevIndex === props.image?.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            }
            return 0;
        });
    }, [props.image]);


    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 3000);
    
        return () => {
            clearInterval(interval);
        };
    }, [handleNextImage, props.image]);

  return (
    <div className="w-full md:w-[90%] md:grid flex flex-col md:grid-cols-[60%_40%] justify-center items-center md:mx-10 max-md:mx-5 gap-2 my-5 h-fit max-md:pb-6 max-md:gap-y-0 bg-gray-400 dark:bg-[#1D1B25] rounded-3xl px-5">
      <div className="flex flex-col justify-start items-start md:mx-10 mx-3 h-fit md:py-10 max-md:pb-5 max-md:gap-y-5 max-md:pt-8">
        <div className="flex flex-col gap-4 max-md:mx-auto md:px-16 md:my-7">
          <div className="flex flex-col justify-center gap-y-3">
            <div className="hover:text-[#6adb45] flex flex-col">
              {props.link ? (
                <Link to={props.link} target="_blank">
                  <span className="text-4xl font-bold flex flex-row items-center gap-2">{props.name} <FaLink size={"2rem"}/></span>
                </Link>
              ) : (
                <span className="text-4xl font-bold">{props.name}</span>
              )}
            </div>
            {props.description && (
              <span className="text-lg italic">{props.description}</span>
            )}
            {props.date && (
              <span className="text-lg md:font-thin italic flex flex-row justify-start gap-x-2 hover:text-orange-600">
                <span className="font-semibold">
                  {props.status === "Completed"
                    ? "Completed By :"
                    : "Started On :"}
                </span>
                <span>
                  {new Date(props.date).toLocaleDateString(undefined, {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </span>
            )}
            <span className="text-lg md:font-thin italic flex flex-row justify-start gap-x-2 hover:text-orange-600">
              <span className="font-semibold">Status :</span>
              <span>{props.status}</span>
            </span>
            <div className="text-lg md:font-thin italic flex flex-row gap-3 mx-3">
              {props.github && (
                <Link
                  to={props.github}
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  <GrGithub size={"2.5rem"} />
                </Link>
              )}
              {props.docker && (
                <Link
                  to={props.docker}
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  <GrDocker size={"2.5rem"} />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 md:gap-y-3 md:mx-10">
          {props.technology && (
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold hover:dark:text-[#6adb45] hover:text-blue-800 w-fit">
                Technologies Used
              </span>
              <div className="flex flex-row flex-wrap gap-2">
                {props.technology.map((tech, index) => (
                  <Tag key={index} name={tech} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {props.image && (
            <div className="w-full h-full flex flex-col items-center justify-center md:pr-10">
                <div
                    id="image-carousel"
                    className="relative w-full bg-white rounded-xl"
                    data-carousel="static"
                >
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-full">
                        {props.image.map((imgSrc, index) => (
                            <div
                                key={index}
                                className={`${
                                    index === currentImageIndex ? "block" : "hidden"
                                } duration-700 ease-in-out`}
                                data-carousel-item
                            >
                                <img
                                    src={imgSrc}
                                    alt={`${props.name} screenshot ${index + 1}`}
                                    className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-scale-down p-10 bg-white"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="absolute top-[40%] md:top-[45%] left-1 z-30 flex items-center justify-center h-fit max-md:p-2 p-4 cursor-pointer group focus:outline-none text-black bg-gray-300 rounded-full"
                        data-carousel-prev
                        onClick={handlePrevImage}
                    >
                        <GrPrevious />
                    </button>
                    <button
                        type="button"
                        className="absolute top-[40%] md:top-[45%] right-1 z-30 flex items-center justify-center h-fit max-md:p-2 p-4 cursor-pointer group focus:outline-none text-black bg-gray-300 rounded-full"
                        data-carousel-next
                        onClick={handleNextImage}
                    >
                        <GrNext />
                    </button>
                </div>
            </div>
        )}
    </div>
  );
};
