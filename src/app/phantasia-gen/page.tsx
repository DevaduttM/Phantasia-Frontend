import React from "react";
import { Menu, FolderPlus } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-5">
          <Menu className="w-7 h-7 text-gray-600" />
          <FolderPlus className="w-7 h-7 text-gray-600" />
          <h1 className=" text-3xl  text-[#4A4A4A] font-rene">Phantasia</h1>
        </div>
        <button className="px-5 mx-4 my-2 py-2 rounded-full bg-white shadow-md border font-barlow border-black hover:bg-gray-100 transition-colors text-black">
          Login
        </button>
      </header>
    </div>
  );
}
