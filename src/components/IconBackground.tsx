"use client"
import { Clapperboard, MonitorPlay, Play, Projector, Video, Pause, Rewind, FastForward, SkipBack, SkipForward, Volume, Film, Popcorn, TvMinimalPlay } from 'lucide-react'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const IconBackground = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const [scrollY, setScrollY] = React.useState(0);

    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRandomBoolean(): boolean {
        return Math.random() < 0.5;
      }

      const icons = [
        <Clapperboard />,
        <MonitorPlay />,
        <Play />,
        <Projector />,
        <Video />,
        <Pause />,
        <Rewind />,
                <Video />,
        <Pause />,
        <Rewind />,
        <FastForward />,
        <SkipBack />,
        <SkipForward />,
        <Volume />,
        <Film />,
        <Popcorn />,
        <TvMinimalPlay />,
        <Rewind />,
        <FastForward />,
        <SkipBack />,
        <SkipForward />,
        <Volume />,
        <Film />,
        <Popcorn />,
        <TvMinimalPlay />,
        <SkipBack />,
        <SkipForward />,
        <Volume />,
        <Film />,
        <Popcorn />,
        <TvMinimalPlay />,
        <Rewind />,
        <FastForward />,
        <SkipBack />,
        <SkipForward />,
        ]
        

  return (
    <>
    <motion.div 
    initial={{y: 0}}
    animate={{y: ["0px", "20px", "0px"]} }

    transition={{duration: 5, repeat: Infinity,
        repeatType: "loop",staggerChildren: 0.5}}
    
    className="fixed z-0 h-screen w-screen text-[#4a4a4a] opacity-60 flex items-center justify-center">
        {icons.map((icon, index) => (
            <motion.div
                key={index}
                initial={{ x: 0, y: 0 }}
                animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight / 2.5, screenHeight / 2.5)}}
                transition={{ duration: 2, ease: "easeInOut" }}
                className={`absolute ${getRandomBoolean() && "blur-[1px] scale-75"} `}
                
            >
                {icon}
            </motion.div>
        ))}
       

    </motion.div>
        
    </>
  )
}

export default IconBackground