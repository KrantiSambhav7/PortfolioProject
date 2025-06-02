"use client";
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Portfolio 1",
            src: "https://images.unsplash.com/photo-1746980776869-0443aaffc7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            href: "#",
            description: "This is a portfolio project that showcases my skills and work in web development. It includes various sections such as projects, skills, and contact information."
        },
        {
            title: "Portfolio 2",
            src: "https://images.unsplash.com/photo-1738680802800-2ff58864144c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            href: "#",
            description: "This portfolio project highlights my experience in software development, including various technologies and frameworks I have worked with."
        },
        {
            title: "Portfolio 3",
            src: "https://images.unsplash.com/photo-1747079299566-1910ce3b9b1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            href: "#",
            description: "This is a creative portfolio that showcases my design skills and artistic abilities. It includes a gallery of my artwork, photography, and other creative projects."
        },
        {
            title: "Portfolio 4",
            src: "https://images.unsplash.com/photo-1747811244803-9dda52fd00a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            href: "#",
            description: "This portfolio project focuses on my contributions to open-source projects and community involvement. It highlights my commitment for collaboration."
        }
    ];
  return (
    <div className='py-10 text-primary'>
        <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">I love building web applications that can be of use.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-4'>
            {projects.map((project , idx) => (
            <motion.div initial={{opacity: 0, filter: 'blur(10px)' , y: 10}} whileInView={{opacity: 1, filter: 'blur(0px)' , y: 0}} transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeInOut"
            }} key={project.title}  className='text-white group'>
                <Link href={project.href}>
                <Image src={project.src} alt='' height={300} width={300} className='w-full h-60 aspect-square rounded-3xl object-cover group-hover:blur-[2px] group-hover:scale-[1.02] transition duration-200' />
                <h2 className='  font-medium tracking-tight mt-1 text-neutral-500 dark:text-neutral-400'>{project.title}</h2>
                <p className='max-w-sm text-sm mt-1 text-neutral-500 dark:text-neutral-400'>{project.description}</p>
                </Link>
            </motion.div>
        ))}
        </div>
    </div>
  )
}

export default Projects