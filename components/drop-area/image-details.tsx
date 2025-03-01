"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface ImageDetailsProps {
  imageUrl: string;
  privacy: boolean;
}

const ImageDetails = ({ imageUrl, privacy }: ImageDetailsProps) => {
  const [copied, setCopied] = useState(false);
  const [generatedLink, setGeneratedLink] = useState<string>("");

  const generateLink = () => {
    const currentUrl = window.location.origin; // Gets the current base URL

    if (privacy) {
      setGeneratedLink("");
    } else {
      const proxyImage = `/api/proxy?url=${encodeURIComponent(imageUrl)}`;
      setGeneratedLink(`${currentUrl}${proxyImage}`);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(generatedLink);
    setTimeout(()=>{
      setCopied(false);
    },2000);
  };

  return (
    <div className="flex flex-col items-center justify-center border-b border-lightCyan cursor-pointer group pb-1 relative">
      <Button
        onClick={generateLink}
        className="bg-lightCyan hover:bg-lightCyan/80 my-3"
      >
        Generate Link
      </Button>
      {generatedLink &&
        generatedLink.trim() != "" &&
        generatedLink.length > 0 && (
          <div className="flex items-center">
            <p
              onClick={handleCopy}
              className="text-sm mx-auto text-softGray max-w-[400px] truncate group-hover:text-softGray/90 duration-100"
            >
              {generatedLink}
            </p>
            {!copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5c5a5a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy group-hover:text-softGray/90 duration-100 ml-2"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            ) : (
              <>
                <span className="absolute bottom-full right-0 mb-1 text-xs text-white bg-lightCyan px-2 py-1 rounded-lg">
                  Copied!
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5c5a5a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy-check group-hover:text-softGray/90 duration-100 ml-2"
                >
                  <path d="m12 15 2 2 4-4" />
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </>
            )}
          </div>
        )}
    </div>
  );
};

export default ImageDetails;
