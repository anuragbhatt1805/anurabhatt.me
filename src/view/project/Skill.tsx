import { useEffect, useState } from "react";
import { SkillProp } from "./Project";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Image({ src, percentage }: { src: string; percentage: number }) {
  return (
    <>
      <img
        src={src}
        className="relative top-0 left-0 p-2 duration-300 ease-in-out group-hover:opacity-10 md:w-24 md:h-24 w-14 h-14 object-cover"
      />
      <span className="font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-center text-2xl duration-300">
        {percentage} %
      </span>
    </>
  );
}

export const Skill = (props: SkillProp) => {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < props.percentage) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-40 h-40 max-md:w-28 max-md:h-28 group m-2 md:mx-4">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: props.color,
            trailColor: "#bdbdbd",
          })}
        >
          <div className="p-5 rounded-full bg-white dark:bg-violet-100 overflow-clip group-hover:bg-gray-900 duration-500 relative">
            <Image src={props.logo} percentage={percentage} />
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};
