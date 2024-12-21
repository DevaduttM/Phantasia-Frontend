"use client"
import { Clapperboard, MonitorPlay, Play, Projector, Video, Pause, Rewind, FastForward, SkipBack, SkipForward, Volume, Film, Popcorn, TvMinimalPlay } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const IconBackground = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRandomBoolean(): boolean {
        return Math.random() < 0.5; // 50% chance of true or false
      }
  return (
    <>
    <div className="fixed z-0 h-screen w-screen text-[#4a4a4a] opacity-60 flex items-center justify-center">
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Clapperboard />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <MonitorPlay />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Play />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Projector />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Video />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Pause />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Rewind />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <FastForward />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <SkipBack />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <SkipForward />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Volume />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Film />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Popcorn />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <TvMinimalPlay />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <FastForward />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <SkipBack />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <SkipForward />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Volume />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Film />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Popcorn />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <TvMinimalPlay />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <SkipForward />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Volume />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Film />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Popcorn />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <TvMinimalPlay />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <SkipForward />
        </motion.div>
        {/* <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Volume />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Film />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <Popcorn />
        </motion.div>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: getRandomNumber(-screenWidth/2.5, screenWidth/2.5), y: getRandomNumber(-screenHeight/2.5, screenHeight/2.5) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`absolute ${getRandomBoolean() && "blur-[1px]"}`}
        >
            <TvMinimalPlay />
        </motion.div> */}


    </div>
        
    </>
  )
}

export default IconBackground