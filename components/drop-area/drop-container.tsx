"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import ImagePreview from "./image-preview";
import ImageDetails from "./image-details";
import ImagePrivacy from "./image-privacy";

const DropContainer = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string>("");
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [privacyKey, setPrivacyKey] = useState<undefined | string>(undefined);
  const [generatedLink, setGeneratedLink] = useState<string>("");

  // Handle file drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];

    if (droppedFile) {
      setFile(droppedFile);
      uploadFile(droppedFile);
    }
  };

  // Prevent default drag behaviors
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Handle file selection via input
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
      uploadFile(selectedFile);
    }
  };

  // Open file picker when div is clicked
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // Upload file to Express server
  const uploadFile = async (imageFile: File) => {
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post(
        "https://dhost-backend.onrender.com",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("File uploaded:", response.data);
      setImageUrl(response.data.discordResponse.url);
      setPrivacyKey(response.data.discordResponse.privacyKey);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("erroare aici", error);
        toast(
          error.response?.data.error ||
            error.response?.statusText ||
            "Something went wrong. Please try again later."
        );
      } else toast("Something went wrong. Please try again later.");
    }
  };

  const generateLink = () => {
    const currentUrl = window.location.origin; // Gets the current base URL

    if (privacy) {
      setGeneratedLink(`${currentUrl}/privacy`);
    } else {
      const proxyImage = `/api/proxy?url=${encodeURIComponent(imageUrl)}`;
      setGeneratedLink(`${currentUrl}${proxyImage}`);
    }
  };

  useEffect(()=>{
    generateLink();
  },[privacy]);

  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div
          className="border-2 border-transparent hover:border-lightCyan bg-[#161515] w-[250px] h-[250px] rounded-l-md flex items-center justify-center cursor-pointer duration-100"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="space-y-3">
            <p className="text-sm text-center text-softGray italic">
              {file ? file.name : "Drag or drop image here"}
            </p>
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cloud-upload"
              >
                <path d="M12 13v8" />
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="m8 17 4-4 4 4" />
              </svg>
            </div>
          </div>
        </div>
        {imageUrl && imageUrl.trim() != "" && (
          <div>
            <ImagePreview imageSrc={imageUrl} />
          </div>
        )}
      </div>
      {imageUrl && imageUrl.trim() != "" && (
        <>
        
        <ImageDetails generatedLink={generatedLink} generateLink={generateLink} />
        <div className="mt-3">
          <ImagePrivacy privacy={privacy} privacyKey={privacyKey} setPrivacy={setPrivacy} />
        </div>
        </>
      )}
    </div>
  );
};

export default DropContainer;
