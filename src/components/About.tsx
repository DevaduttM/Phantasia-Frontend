import React from "react";

const About = () => {
  return (
    <div className="w-screen h-screen text-black flex items-center justify-center shadow-lg">
      <div className="about-container w-3/4 h-[80%] bg-[#ebebeb] border-gray-600 z-10 rounded-2xl px-20 ">
        <div className="about-content flex flex-col items-center justify-start gap-10">
          <h1 className="font-Gentona text-[#4a4a4a] text-6xl mt-10">
            About Phantasia
          </h1>
          <p className="text-lg text-black font-Barlow text-left">
          Phantasia is a groundbreaking platform that brings your wildest fan fiction dreams to life! Imagine crafting alternate endings, creating new scenes, or even adding exciting episodes to your favorite stories. Phantasia takes it a step further by allowing you to merge characters from completely different movies or TV shows, resulting in mind-blowing cross-universe interactions and entirely unique storylines. What sets Phantasia apart is its cutting-edge voice model that perfectly mimics the voices of your favorite characters, bringing scenes to life with the right emotions, just like a real movie. Whether you're expanding existing stories or creating fresh, exciting narratives, Phantasia gives you the power to unlock endless possibilities. Dive into a world where your imagination knows no bounds, and let Phantasia turn your fan fiction fantasies into an immersive, cinematic experience!
          </p>
        </div>
        <div className="w-full h-[40%] flex flex-row gap-5 mt-5">
            <div className="w-1/2 h-full flex items-center justify-center bg-gray-400">
                
            </div>
            <div className="w-1/2 h-full flex items-center justify-center bg-gray-400">
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
