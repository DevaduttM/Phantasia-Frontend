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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            iure omnis fugit, quisquam reprehenderit suscipit mollitia
            dignissimos voluptate cupiditate illum excepturi recusandae cum
            voluptates exercitationem neque necessitatibus ipsa eius nemo iste
            enim, ex voluptatum blanditiis! Fugit officiis odio, voluptate aut
            exercitationem est nemo illo corporis quas accusantium, id iure nisi
            aspernatur voluptates consectetur eaque provident. Maiores
            voluptatibus ullam pariatur dolorum, mollitia animi sunt cupiditate
            distinctio earum praesentium? Distinctio odit veniam quam et at amet
            libero ducimus quaerat sint eius, tempore in voluptatibus, optio
            neque placeat facilis dignissimos, consequuntur aperiam aliquid.
            Magni dolore explicabo laudantium iusto! Reiciendis reprehenderit
            quae aliquid voluptate.
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
