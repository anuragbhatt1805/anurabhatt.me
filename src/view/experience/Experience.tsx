import { UpdatingSoon } from "../../components/UpdatingSoon"

export type ExperienceProp = {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    location: string | "Remote",
    description?: string,
    skills ?: string[],
    coordinates?: [number, number],
    website?: string
}

export const Experience = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Experience</h1>
            <UpdatingSoon />
        </div>
    )
}