import { Link } from "react-router-dom";
import { CertificateProp } from "./Education"

export const Certificate = (prop: CertificateProp) => {
    return (
        <div className="dark:bg-[#1D1B25] bg-gray-400 text-black shadow-md p-4 m-4 dark:text-white border-2 dark:border-white border-black hover:text-white hover:bg-[#424242] hover:dark:text-black hover:dark:bg-slate-200 md:w-96 w-80 rounded-2xl">
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col text-lg">
                    <p className="text-black dark:text-orange-600 font-bold mb-2 text-sm">Credential ID: {prop.credentialId}</p>

                    <h3 className="text-2xl font-bold flex flex-wrap my-2">{prop.title}</h3>
                    <p>{prop.issuedBy}</p>
                    <p><strong>Issued:</strong> {prop.issueDate.toLocaleDateString(undefined, {
                        month: "short",
                        year: "numeric",
                    })}</p>
                    {prop.expiryDate && <p><strong>Expires:</strong> {prop?.expiryDate.toLocaleDateString(undefined, {
                        month: "short",
                        year: "numeric",
                    })}</p>}
                </div>
                <div className="flex flex-col">
                    <Link to={prop.link} target="_blank" className="text-blue-500 font-semibold hover:underline">View Credential</Link>
                </div>
            </div>
        </div>
    )
}