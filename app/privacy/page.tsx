"use client";
import { Button } from "@/components/ui/button";
import { verifyKey } from "../actions/verifyKey";
import { useState } from "react";

const PrivacyPage = () => {
  const [inputKey, setInputKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setImageUrl(null);

    try {
      const result = await verifyKey(inputKey);

      if (result.success && inputKey.trim()!=="") {
        setMessage("✅ Private key is valid!");
        setImageUrl(result.imageUrl);
      } else {
        setMessage("❌ Invalid private key.");
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-darkGray w-[100vw] h-[100vh] flex items-center justify-center">
      <form
        className="bg-[#161515] p-4 rounded-md w-80 text-center"
        onSubmit={handleSubmit}
      >
        <p className="text-lightCyan font-bold mb-4">
          You are accessing a private resource
        </p>

        <div className="flex items-center justify-center my-3">
          <input
            onChange={(e) => setInputKey(e.target.value)}
            value={inputKey}
            name="privateKey"
            className="bg-transparent border-b-2 border-lightCyan text-sm px-2 py-1 outline-none text-center w-full"
            placeholder="Enter private key"
            disabled={loading}
          />
        </div>

        <Button
          size="sm"
          className="bg-lightCyan hover:bg-lightCyan/80 w-full flex justify-center items-center"
          disabled={loading}
        >
          {loading ? "Checking..." : "Access"}
          {!loading && (
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
              className="lucide lucide-arrow-right ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          )}
        </Button>

        {message && (
          <p
            className={`mt-4 text-sm ${
              message.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {imageUrl && (
          <div className="mt-4">
            <p className="text-xs text-gray-400">Matching Image:</p>
            <img
              src={imageUrl}
              alt="Matched Image"
              className="w-full h-auto mt-2 rounded-md"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default PrivacyPage;
