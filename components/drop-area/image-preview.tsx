"use client"

import Image from "next/image";

const ImagePreview = ({imageSrc}: {imageSrc: string}) => {
  return (
    <div>
      <Image src={imageSrc} width={250} height={250} className="w-[250px] h-[250px] rounded-r-md object-cover" priority quality={100} alt="uploaded image" />
    </div>
  )
}

export default ImagePreview;
