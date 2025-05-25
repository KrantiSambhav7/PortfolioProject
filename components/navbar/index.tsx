"use client";
import React from 'react'
import Container from "@/components/Container";
import Image from 'next/image';
import Link from 'next/link';
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';

const Navbar = () => {
    const navItems = [
        {title: "About" , href: "/about"},
        {title: "Projects", href: "/projects"},
        {title: "Contact", href: "/contact"},
        {title: "Blog", href: "/blog"},
    ]
    const [hovered , setHovered] = React.useState<number | null>(null);
    const {scrollY} = useScroll();
    const [scrolled , setScrolled] = React.useState<boolean>(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 20){
            setScrolled(true)
        } else{
            setScrolled(false)
        }
    });
  return (
    <Container>
        <motion.nav 
        animate={
            {
                boxShadow: scrolled ? "var(--shadow-input)" : "none",
                width: scrolled ? "60%" : "100%",
                y: scrolled ? 10 : 0
            }
        }
        transition={
            {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
        className='fixed top-0  inset-x-0 max-w-4xl mx-auto flex items-center justify-between p-4'>
            <Image className='h-10 w-10 object-cover rounded-full' src={"/Cartoon.jpg"} height={100} width={100} alt='Portfolio' />
            <div className='flex items-center'>
                {navItems.map((item , idx) => (
                    <Link key={item.title} href={item.href} onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)} className='text-sm text-gray-500 relative px-2 py-1'>
                        {hovered === idx &&  (<motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-300' />)}
                        <span className='relative z-10'>
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>
        </motion.nav>
    </Container>
  )
}

export default Navbar