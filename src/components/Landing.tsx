import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronsDown } from "lucide-react";
import IconBackground from "./IconBackground";
import './styles.css'
import Image from 'next/image'

const Landing = () => {
  return (
    <>
      {/* <div className="ripple-background">
      <div className="circle xxlarge shade1"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle large shade3"></div>
      <div className="circle mediun shade4"></div>
      <div className="circle small shade5"></div>
    </div> */}
      <div className="h-screen w-screen bg-[#ebebeb] flex items-center justify-center">
        
        <div className="flex flex-col justify-center items-center gap-5 bg-[#ebebeb] z-10 rounded-md p-10">
          <h1 className="font-Gentona text-[#4a4a4a] text-7xl">
            Introducing Phantasia
          </h1>
          <p className="text-[#4a4a4a] font-sans">Where your stories come to life and imagination knows no limits!</p>
          <Link
            href="/phantasia-gen"
            className=" font-sans text-lg text-black rounded-full px-8 py-2 bg-white border-gray-600 border top-3 right-3 flex flex-row items-center justify-center gap-2"
          >
            Try Phantasia
            <ArrowUpRight className="text-[#4a4a4a]" />
          </Link>
        </div>
        {/* <Link
          href="/login"
          className="fixed font-sans text-lg text-black rounded-full px-8 py-2 bg-white border-gray-600 border top-3 right-3"
        >
          Login
        </Link> */}
        {/* <ChevronsDown className="absolute bottom-5 w-[5rem] text-black" /> */}
        <Image
          src="/LOGO.svg"
          width={200}
          height={200}
          alt="Phantasia Logo"
          className="fixed top-3 left-3"
        />
      </div>
    </>
  );
};

export default Landing;
