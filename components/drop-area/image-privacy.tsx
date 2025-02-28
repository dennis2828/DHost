"use client"
import { Switch } from "@/components/ui/switch"
import { Dispatch, SetStateAction, useState } from "react"

interface ImagePrivacyProps {
  privacy: boolean;
  setPrivacy: Dispatch<SetStateAction<boolean>>;
}

const ImagePrivacy = ({privacy, setPrivacy}: ImagePrivacyProps) => {

  return (
    <div>
        <div className="flex items-center gap-2">
            <p className="text-sm font-bold">Enable url privacy</p>
            <Switch checked={privacy} onCheckedChange={setPrivacy}/>
        </div>
    </div>
  )
}

export default ImagePrivacy