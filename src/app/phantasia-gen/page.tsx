"use client";
import React, { useState } from "react";
import { Menu, FolderPlus } from "lucide-react";
export default function Home() {
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-5">
          <Menu className="w-7 h-7 text-gray-600" />
          <FolderPlus className="w-7 h-7 text-gray-600" />
          <h1 className=" text-3xl  text-[#4A4A4A] font-Gentona">Phantasia</h1>
        </div>
        <button className="px-5 mx-4 my-2 py-2 rounded-full bg-white shadow-md border font-Barlow border-gray-600 hover:bg-gray-100 transition-colors text-black">
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Loading Circles */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-8">
            {loading ? (
              <>
                <div className="w-[140px] h-[140px] rounded-full border border-black bg-white shadow-lg animate-circle"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-black bg-white shadow-lg animate-circle animation-delay-1"></div>
                <div className="w-[40px] h-[40px] rounded-full border border-black bg-white shadow-lg animate-circle animation-delay-2"></div>
              </>
            ) : (
              <>
                <div className="w-[140px] h-[140px] rounded-full border border-black bg-white shadow-lg "></div>
                <div className="w-[100px] h-[100px] rounded-full border border-black bg-white shadow-lg "></div>
                <div className="w-[40px] h-[40px] rounded-full border border-black bg-white shadow-lg "></div>
              </>
            )}
          </div>
        </div>
        {/* Input Field */}
        <div className="w-full px-4 py-10 ">
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Type your story here.."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="w-full caret-black px-6 py-4 shadow-md font-Barlow  rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 pr-32 bg-white"
            />
            <button className="absolute font-Barlow  right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Generate
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
