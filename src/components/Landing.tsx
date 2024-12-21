import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronsDown } from "lucide-react";
import IconBackground from "./IconBackground";

const Landing = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#ebebeb] flex items-center justify-center">
        
        <div className="flex flex-col justify-center items-center gap-5 bg-[#ebebeb] z-10 rounded-md p-10">
          <h1 className="font-Gentona text-[#4a4a4a] text-7xl">
            Introducing Phantasia
          </h1>
          <Link
            href="/phantasia-gen"
            className=" font-sans text-lg text-black rounded-full px-8 py-2 bg-white border-gray-600 border top-3 right-3 flex flex-row items-center justify-center gap-2"
          >
            Try Phantasia
            <ArrowUpRight className="text-[#4a4a4a]" />
          </Link>
        </div>
        <Link
          href="/login"
          className="fixed font-sans text-lg text-black rounded-full px-8 py-2 bg-white border-gray-600 border top-3 right-3"
        >
          Login
        </Link>
        {/* <ChevronsDown className="absolute bottom-5 w-[5rem] text-black" /> */}
      </div>
    </>
  );
};

export default Landing;
