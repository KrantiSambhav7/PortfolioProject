"use client";
import React from 'react'
import MarqueeBox from './MarqueeBox';
import { motion } from 'framer-motion';
const Marquee = () => {
    const data = ["Tailwind", "React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "JavaScript", "HTML", "CSS"];
  return (
    <div>
    <h1 className='text-lg md:text-2xl font-bold tracking-tight text-primary mb-4'>Technologies :</h1>
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