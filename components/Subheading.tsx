"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Subheading = ({as: Tag = "h1" , children} : {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    children?: React.ReactNode;
}) => {
  return (
    <motion.div
    initial={{opacity: 0 , y: 10 , filter: "blur(10px)"}}
    whileInView={{opacity: 1 , y: 0 , filter: "blur(0px)"}}
    viewport={{once: true}}
    transition={{duration: 0.5, ease: "easeInOut"}}>
        <Tag className="text-secondary text-sm md:text-sm pt-4 max-w-lg">{children}</Tag>
    </motion.div>
  )
}

export default Subheading