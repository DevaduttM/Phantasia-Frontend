import React from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#ebebeb] flex items-center">
        <h1 className='font-Gentona text-[#3a3a3a] text-[10rem] ml-10'>Phantasia</h1>
        <Link href='/login' className='absolute font-sans text-lg text-black rounded-[20px] px-8 py-2 bg-white border-gray-600 border-2 top-3 right-3'>Login</Link>
      </div>
    </>
  );
};

export default Landing;
