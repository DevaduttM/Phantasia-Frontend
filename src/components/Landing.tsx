import React from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white flex items-center">
        <h1 className="font-Gentona text-[#3a3a3a] text-9xl ml-10">
          Phantasia
        </h1>
        <Link>
          <a className="font-Gentona text-[#3a3a3a] text-3xl ml-10">Login</a>
        </Link>
      </div>
    </>
  );
};

export default Landing;
