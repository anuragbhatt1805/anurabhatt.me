import { UpdatingSoon } from "../../components/UpdatingSoon"

export type ProjectProp = {
    name: string,
    description: string,
    technology: string[],
    date ?: string,
    image?: string[],
    link?: string,
    github?: string,
    docker?: string,
    status : string | "Completed"
}

export const Project = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Project</h1>
            <UpdatingSoon />
        </div>
    )
}