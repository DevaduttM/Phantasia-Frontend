import React from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white flex items-center">
        <h1 className='font-Gentona text-[#3a3a3a] text-[12rem] ml-10'>Phantasia</h1>
        <Link href='/login' className='absolute font-sans text-lg text-white rounded-[20px] px-8 py-3 bg-black top-3 right-3'>Login</Link>
      </div>
    </>
  );
};

export default Landing;
