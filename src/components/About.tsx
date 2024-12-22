import React from "react";
import Image from "next/image";
import SmallPlayer from "./SmallPlayer";

const About = () => {
  return (
    <div className="w-screen h-screen text-black flex items-center justify-center shadow-lg">
      <div className="relative about-container w-3/4 h-[80%] bg-[#ebebeb] border-gray-600 z-10 rounded-2xl px-20 ">
        <div className="about-content flex flex-col items-center justify-start gap-10">
          <h1 className="font-Gentona text-[#4a4a4a] text-6xl mt-10">
            About Phantasia
          </h1>
          <p className="text-lg text-black font-Barlow text-left">
          Phantasia is an innovative platform designed to reimagine storytelling by allowing users to create alternate narratives for their favorite characters and shows. With advanced voice cloning technology powered by ElevenLabs, Phantasia delivers authentic and engaging vocal renderings that bring beloved characters to life.  

The platform enables users to craft alternate storylines, unique endings, or entirely new arcs through an intuitive and user-friendly interface. Designed for creative enthusiasts, storytellers, and fans alike, Phantasia transforms passive content consumption into an interactive and immersive storytelling experience. Built with a robust backend and a sleek frontend, the platform empowers users to explore new creative horizons and share their imaginative narratives with the world.
          </p>
        </div>
        <div className="w-full h-[40%] flex flex-row gap-5 mt-5">
            <div className="w-1/2 h-full flex items-center justify-center bg-gray-400">
                
            </div>
            <div className="w-1/2 h-full flex items-center justify-center ">
                <Image
                    src="/Garage.webp"
                    width={500}
                    height={500}
                    alt="Garage"
                    className="rounded-xl"
                />
                <div className="absolute bottom-0 mb-[-20px]">

                    <SmallPlayer />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
