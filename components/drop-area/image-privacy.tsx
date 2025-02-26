"use client"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

const ImagePrivacy = () => {

    const [privacy, setPrivacy] = useState<boolean>(false);

  return (
    <div>
        <div className="flex items-center gap-2">
            <p className="text-sm font-bold">Enable url privacy</p>
            <Switch checked={privacy} onCheckedChange={setPrivacy}/>
        </div>
        {privacy && (
            <input className="" />
        )}
        
    </div>
  )
}

export default ImagePrivacy