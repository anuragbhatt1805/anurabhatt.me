// import { useState } from "react";
import { NavLink } from "react-router-dom"

export type NavLinkProps = {
    to: string;
    label: string;
    details: string;
    new?: boolean;
}

export const NavLinkItem = (props: NavLinkProps) => {
    // const [hidden, setHidden] = useState<boolean>(true);
    return (
        <>
            <NavLink to={props.to} target={props.new ? "_blank" : "_self"}
            className={({isActive}) => `px-3 py-1 ${isActive ? "dark:text-[#FE7C09] md:font-semibold md:dark:bg-white max-md:text-white text-white md:bg-[#231F31] rounded-full" : "dark:text-white text-[#231F31]"} duration-300`}
            title={props.details}>{props.label}</NavLink>
            {/* onMouseOver={() => setHidden(false)}
            onMouseOut={() => setHidden(true)}>{props.label}<NavLink> */}
            {/* <span className={`${(hidden)? "hidden":""} -ml-10 text-sm text-gray-300 dark:text-gray-800 absolute top-8 bg-gray-800 dark:bg-white px-1 rounded-xl`}>{props.details}</span> */}
        </>
    )
}