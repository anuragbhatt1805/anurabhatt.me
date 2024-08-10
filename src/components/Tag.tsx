import { FaHashtag } from "react-icons/fa";

export const Tag = ({ name } : { name: string }) => {
    return (
        <div className="flex flex-row gap-1 w-fit items-center font-semibold text-center text-sm border-2 rounded-full px-3 py-0.5 m-1 dark:border-white dark:text-white text-black border-black hover:dark:bg-white hover:dark:text-[#231F31] hover:bg-gray-600 hover:text-white">
            <FaHashtag />
            {name}
        </div>
    )
}