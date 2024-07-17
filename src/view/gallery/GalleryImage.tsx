import { useState } from "react";

export type ImageProp = {
    id : string;
    image : string;
    name: string;
    description ?: string;
    landscape ?: boolean;
    date : string;
}


export const GalleryImage = (props: ImageProp) => {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleVisible(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setVisible((prev) => !prev);
    }

    async function handleDownload(e: { preventDefault: () => void; }) {
        e.preventDefault();

        try {
            const response = await fetch(props.image);
            const blob = await response.blob();

            // Create a temporary URL for the Blob
            const blobUrl = window.URL.createObjectURL(blob);

            // Create a link element
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = props.name;

            // Programmatically click the link to trigger the download
            document.body.appendChild(link);
            link.click();

            // Clean up: remove the temporary URL and the link element
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    }

  return (
    <>
        <div className="flex md:h-64 md:w-80 max-md:w-full border-2 dark:border-white border-black rounded-2xl shadow-xl drop-shadow-xl overflow-hidden flex-row items-center justify-center">
            <img key={props?.id} src={props?.image} alt={props?.name} className="object-cover rounded-2xl cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            onClick={toggleVisible}/>
        </div>

        <div className={`${visible? 'absolute':'hidden'} bg-black bg-opacity-90 w-full h-screen top-0 left-0 max-lg:hidden`}>
            <div className="flex flex-row items-center justify-center h-full">
                <div className="border-2 w-[80%] h-fit dark:bg-[#9092DA] bg-white rounded-2xl p-5"
                onDoubleClick={toggleVisible}>
                    <div className="flex flex-row justify-between mx-5">
                        <h1 className="text-4xl font-bold text-black space-x-5">
                            <span>{props?.name}</span>
                        </h1>
                        <button className="bg-gray-700 px-5 py-1 rounded-2xl text-lg text-white"
                        onClick={toggleVisible}>Close</button>
                    </div>

                    <div className="flex flex-row mx-4 my-6 gap-x-5">
                        <img src={props?.image} alt={props?.name} className={`object-contain rounded-2xl ${props?.landscape ? 'w-[60%]' : 'h-[60%]'}`}/>
                        <div className="flex flex-col justify-between text-xl mx-2 my-8">
                            <div className=" text-black font-medium gap-y-2 flex flex-col">
                                <span>Image Details</span>
                                <p className="text-lg font-normal">{props?.description}</p>
                            </div>
                            <div className=" text-black font-medium gap-x-2 flex flex-row">
                                <span>Added On: </span>
                                <p className="text-lg font-normal"> {new Date(props?.date).toDateString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <button className="w-1/2 bg-green-600 py-2 rounded-2xl text-white text-2xl hover:bg-green-700 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
                        onClick={handleDownload}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
