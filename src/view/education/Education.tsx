import { PageTitle } from "../../components/PageTitle"
import { University } from "./University"

export type EducationProp = {
    logo: string,
    university: string,
    degree: string,
    major: string,
    passingYear: string,
    location: string | "Remote" | "Hybrid",
    grading: "CGPA" | "%",
    grade: number,
    softskills ?: string[],
    hardskills ?: string[],
    coordinates?: [number, number],
    website?: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const data : EducationProp[] = [
    {
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1720903507/HKBK-College-Logo_gxdzp3.png",
        university: "HKBK College of Engineering",
        degree: "Bachelor of Engineering",
        major: "Computer Science and Engineering",
        passingYear: "2024",
        location: "Bengaluru, Karnataka, India",
        grading: "CGPA",
        grade: 8.3,
        website: "https://hkbk.edu.in/",
        coordinates: [13.036, 77.6199],
        hardskills: ["Python", "JAVA", "C", "Javascript", "MySQL", "MongoDB", "Android Studio", "Data Structures & Algorithm", "Raspberry Pi"],
        softskills: ["Teamwork", "Time Management", "Leadership", "Adaptability", "Problem-Solving"]
    },
    {
        logo: "",
        university: "Tomar Children School",
        degree: "Intermediate (10+2)",
        major: "PCM + Computer Science",
        passingYear: "2020",
        location: "Varanasi, Uttar Pradesh, India",
        grading: "%",
        grade: 80,
        coordinates: [25.360168922136772, 82.95606388928671],
        website: "https://www.tomarchildrenschool.in/",
        hardskills: ["Python", "MySQL", "Mathematics"],
        softskills: ["Analytical Thinking", "Time Management", "Communication"]
    },
    {
        logo: "https://res.cloudinary.com/dhwszoeej/image/upload/v1723292610/sara_cppyjx.png",
        university: "Sant Atulanand Residential Academy",
        degree: "High School (10)",
        major: "Science + IT",
        passingYear: "2018",
        location: "Varanasi, Uttar Pradesh, India",
        grading: "%",
        grade: 89,
        coordinates: [25.372009565559623, 82.95586204167955],
        website: "https://saravns.ac.in/",
        hardskills: ["HTML", "CSS", "JavaScript", "Mathematics"],
        softskills: ["Teamwork", "Communication"]
    }
]

export const Education = () => {
    return (
        <>
            <PageTitle title="Education"/>
            <div className="flex flex-col w-full px-5 items-center">
                {
                    data.map((item, index) => (
                        <University key={index} {...item} />
                    ))
                }
            </div>
        </>
    )
}