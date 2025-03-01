"use client"
import { Switch } from "@/components/ui/switch"
import { Dispatch, SetStateAction, useState } from "react"

interface ImagePrivacyProps {
  privacy: boolean;
  privacyKey: undefined | string;
  setPrivacy: Dispatch<SetStateAction<boolean>>;
}

const ImagePrivacy = ({privacy, privacyKey, setPrivacy}: ImagePrivacyProps) => {

  return (
    <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
            <p className="text-sm font-bold">Enable url privacy</p>
            <Switch checked={privacy} onCheckedChange={setPrivacy}/>
        </div>
        {privacy && (
          <p className="text-sm font-bold bg-[#161515] p-1 rounded-md">{privacyKey}</p>
        )}
    </div>
  )
}

export default ImagePrivacy