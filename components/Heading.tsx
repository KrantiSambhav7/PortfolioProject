"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Heading = ({as: Tag = "h1" , children} : {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    children?: React.ReactNode;
}) => {
  return (
    <motion.div
    initial={{opacity: 0 , y: 10 , filter: "blur(10px)"}}
    whileInView={{opacity: 1 , y: 0 , filter: "blur(0px)"}}
    transition={{duration: 0.5, ease: "easeInOut"}}
    >
        <Tag className="text-2xl md:text-4xl font-bold tracking-tighter  text-primary">{children   }</Tag>
    </motion.div>
  )
}

export default Heading