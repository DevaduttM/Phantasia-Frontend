import About from "@/components/About";
import IconBackground from "@/components/IconBackground";
import Landing from "@/components/Landing";
import Player from "@/components/Player";
import React from "react";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <IconBackground />  
      <Landing />
      <About />
      {/* <Player /> */}
    </div>
  );
}
