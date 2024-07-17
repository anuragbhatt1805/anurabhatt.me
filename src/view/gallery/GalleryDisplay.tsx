import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import { ImageProp, GalleryImage } from './GalleryImage';

export const GalleryDisplay = () => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState<ImageProp[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request({
                    method: 'GET',
                    maxBodyLength: Infinity,
                    url: 'https://gallery-860g.onrender.com/images/',
                    headers: {}
                });
                setImages(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <div className='h-fit py-10 max-md:px-8'>
                        <Loading />
                    </div>
                </>
            ) : (
                <div className='flex flex-row max-md:flex-col md:px-20 py-10 max-md:px-8 lg:gap-x-4 gap-y-4'>
                    {images?.map((image) => (
                        <GalleryImage key={image.id} {...image} />
                    ))}
                </div>
            )}
        </>
    );
};
