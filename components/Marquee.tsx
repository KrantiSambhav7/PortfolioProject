"use client";
import React from 'react'
import MarqueeBox from './MarqueeBox';
import { motion } from 'framer-motion';
const Marquee = () => {
    const data = ["Tailwind", "React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "JavaScript", "HTML", "CSS" , "Spline"];
  return (
    <div className='mb-8'>
    <h1 className='text-lg md:text-xl font-bold tracking-tight text-primary mb-4'>Tech stack exposure :</h1>
    <div className='flex overflow-x-hidden'>
    <motion.div
    initial={{x: 0}}
    animate={{x: "-100%"}}
    transition={{duration: 20, repeat: Infinity, ease: "linear"}}
    className='flex gap-4 mx-4'>
        {data.map((item , idx) => (
            <MarqueeBox key={idx} data={item}/>
        ))}
    </motion.div>
        <motion.div
    initial={{x: 0}}
    animate={{x: "-100%"}}
    transition={{duration: 20, repeat: Infinity, ease: "linear"}}
    className='flex gap-4'>
        {data.map((item , idx) => (
            <MarqueeBox key={idx} data={item}/>
        ))}
    </motion.div>
    </div>
    </div>
  )
}

export default Marquee