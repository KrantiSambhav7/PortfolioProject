"use client";
import React from 'react'
import Container from "@/components/Container";
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const Navbar = () => {
    const navItems = [
        {title: "About" , href: "/about"},
        {title: "Projects", href: "/projects"},
        {title: "Contact", href: "/contact"},
        {title: "Blog", href: "/blog"},
    ]
    const [hovered , setHovered] = React.useState<number | null>(null);
  return (
    <Container>
        <nav className='flex items-center justify-between p-4'>
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
        </nav>
    </Container>
  )
}

export default Navbar