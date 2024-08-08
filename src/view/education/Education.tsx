import { UpdatingSoon } from "../../components/UpdatingSoon"

export type EducationProp = {
    university: string,
    degree: string,
    major: string,
    passingYear: string,
    location: string | "Remote",
    grading: "CGPA" | "Percentage",
    grade: number,
    skills ?: string[],
    coordinates?: [number, number],
    website?: string
}

export const Education = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Education</h1>
            <UpdatingSoon />
        </div>
    )
}