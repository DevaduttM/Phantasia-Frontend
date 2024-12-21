import About from "@/components/About";
import Landing from "@/components/Landing";
import Player from "@/components/Player";
import React from "react";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Landing />
      <About />
      <Player />
    </div>
  );
}
