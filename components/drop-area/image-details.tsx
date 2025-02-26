"use client";

import { useState } from "react";

const ImageDetails = ({ imageUrl }: { imageUrl: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(imageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div
      className="flex items-center border-b border-lightCyan cursor-pointer group pb-1 relative"
      onClick={handleCopy}
    >
      <p className="text-sm mx-auto text-softGray max-w-[400px] truncate group-hover:text-softGray/90 duration-100">
        {imageUrl}
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
      ):
      (
        <>
        <span className="absolute bottom-full right-0 mb-1 text-xs text-white bg-lightCyan px-2 py-1 rounded-lg">
          Copied!
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5c5a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-check group-hover:text-softGray/90 duration-100 ml-2"><path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </>
      )
      }
    </div>
  );
};

export default ImageDetails;
