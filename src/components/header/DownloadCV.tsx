import React from 'react';
import axios from 'axios';

export const DownloadButton = () => {
  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // Fetch the PDF file
      const response = await axios({
        url: 'https://shorturl.at/1S8yA',
        method: 'GET',
        responseType: 'blob', 
      });

      // Create a blob from the PDF file
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a temporary URL for the file
      const url = window.URL.createObjectURL(blob);

      // Create a link and click it to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Anurag_Bhatt_Resume';
      document.body.appendChild(link);
      link.click();

      // Clean up: remove the temporary URL
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file', error);
      // Handle error as needed
    }
  };

  return (
    <button onClick={handleDownload}
    className="max-md:mx-2 px-5 border-2 dark:border-white rounded-full font-semibold dark:hover:bg-white dark:hover:text-[#231F31] border-[#231F31] hover:bg-[#231F31] hover:text-white">
      Download CV
    </button>
  );
};
