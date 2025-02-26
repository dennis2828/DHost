const Docs = () => {
  return (
    <div className="rounded-md bg-[#171717] p-2">
        <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-code"><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/></svg>
            <h2 className="font-bold text-lightCyan text-[1.5em]">How to use private mode?</h2>
        </div>
        <p className="text-sm">
        Want extra privacy? Enable private mode, which locks your image behind a secure key or password—only those with access can view it.
        </p>
    </div>
  )
}

export default Docs