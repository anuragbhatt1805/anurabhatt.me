import { useEffect, useState } from "react"
import { UpdatingSoon } from "../../components/UpdatingSoon"
import { PageTitle } from "../../components/PageTitle"
import { calculate } from "../../util/ExpCalculator"
import { RollNumber } from "../../components/RollNumber"

export type ExperienceProp = {
    company: string,
    position: string,
    startDate: Date, // in MM-DD-YYYY
    endDate: Date | "Present",
    location: string | "Remote" | "Hybrid",
    description?: string,
    softskills ?: string[],
    hardskills ?: string[],
    coordinates?: [number, number],
    website?: string
}

export const data: ExperienceProp[] = [
    {
        company: "Whiteboard Technologies Pvt. Ltd",
        position: "Software Engineer",
        startDate: new Date('02-20-2024'),
        endDate: "Present",
        location: "Bengaluru, Karnataka, India",
        description: "Software Engineer at Whiteboard Technologies Pvt. Ltd, working on various projects in the tech industry.",
        website: "https://whiteboardtec.com",
        coordinates: [13.034853411519276, 77.575235434185],
        softskills: ['Time Management', "Effective Communication", "Problem Solving", "TeamWork", 'Analytical Thinking'],
        hardskills: ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Redux-Toolkit', 'Nodejs', 'Express.js', 'Cloudinary', 'Django', 'Redis', 'PostgreSQL', 'MongoDB', 'Nginx']
    },
    {
        company: "Algobucks",
        position: "Python Developer Intern",
        startDate: new Date('10-11-2023'),
        endDate: new Date('11-23-2023'),
        location: "Remote",
        description: "Python Developer Intern at Algobucks, working on various projects in the tech industry.",
        softskills: ["Effective Communication", "Problem Solving", 'Analytical Thinking'],
        hardskills: ['Python', 'Flask', 'MongoDB', 'Pandas', 'MatPlotLib']
    },
    {
        company: "HKBK College of Engineering",
        position: "ELAB Administrator",
        startDate: new Date('02-14-2022'),
        endDate: new Date('12-20-2022'),
        location: "Bengaluru, Karnataka, India",
        description: "ELAB Administrator at HKBK College of Engineering, working on ELAB Application developed by me and other seniors.",
        website: "https://hkbk.edu.in/",
        coordinates: [13.036, 77.6199],
        softskills: ['Time Management', "TeamWork"],
        hardskills: ['HTML', 'CSS', 'JavaScript', 'Pug', 'Node.js', 'Express.js', 'MongoDB', 'Nginx', 'Docker']
    }
]

export const Experience = () => {
    const [totalExperience, setTotalExperience] = useState<number>(0);

    useEffect(() => {
        const temp = calculate(
            data.map(exp => ({
                startDate: exp.startDate,
                endDate: exp.endDate
            })))
        setTotalExperience(temp)
        console.log(totalExperience)
        console.log(temp)
        return () => {}
    }, [])

    return (
        <>
            <PageTitle title="Experience" />
            <div className="flex flex-col items-center">
                <div className="h-fit w-full flex flex-row items-center justify-center dark:bg-[#1D1B25] bg-gray-400 md:mb-5 mb-2 md:mx-1 mx-10">
                    <div className="font-bold md:text-4xl text-xl md:my-3 my-1">
                        <span className="dark:text-red-600 text-orange-900">Total Experience:</span>
                        <span className="md:mx-5 mx-2 dark:text-green-600 text-violet-900">
                            <RollNumber value={Math.floor(totalExperience/12)} delay={50}/> Years {" "}
                            <RollNumber value={totalExperience%12} delay={100}/> Months
                        </span>
                    </div>
                </div>
            <UpdatingSoon />
            </div>
        </>
    )
}