
const DropContainer = () => {
  return (
    <div className="border-2 border-transparent hover:border-lightCyan bg-[#161515] w-[250px] h-[250px] rounded-md flex items-center justify-center cursor-pointer duration-100">
        <div className="space-y-3">
            <p className="text-sm text-center text-softGrayitalic">Drag or drop image here</p>
            <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>            
            </div>
        </div>
        
    </div>
  )
}

export default DropContainer