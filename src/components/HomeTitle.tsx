import { SiNextra } from "react-icons/si";
import { IoNavigateCircleSharp } from "react-icons/io5";
import { LiaWpexplorer } from "react-icons/lia";
import { Link } from "react-router-dom";

export interface HomeTitleProps {
  title: string;
  link: string;
  linkText?: string;
}

export const HomeTitle = (props: HomeTitleProps) => {
  return (
    <>
      <h1 className="flex flex-row flex-wrap items-center justify-between bg-gray-400 dark:bg-[#1D1B25] py-4 md:px-16 px-10">
        <Link to={props?.link}>
          <span className="flex flex-row flex-wrap items-center gap-5 text-4xl font-semibold font-serif">
            <SiNextra />
            {props?.title?.toUpperCase()}
          </span>
        </Link>
        <Link to={props?.link}>
          <span className="max-md:hidden flex flex-row flex-wrap items-center gap-2 text-2xl font-light">
            {props?.linkText || "More"}
            <span className={props?.linkText ? `text-4xl` : `text-3xl`}>
              {props?.linkText ? <LiaWpexplorer /> : <IoNavigateCircleSharp />}
            </span>
          </span>
        </Link>
      </h1>
    </>
  );
};
