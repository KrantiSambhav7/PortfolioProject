import { Link } from 'next-view-transitions'
import React from 'react'
import { FaGithub, FaSquareXTwitter } from 'react-icons/fa6'
import { TbBrandLeetcode } from 'react-icons/tb'
import Container from '../Container'

const Footer = () => {
  return (
    <Container className='flex justify-between p-3 border-t border-neutral-100'>
        <p className='text-neutral-500 text-sm'>Built with love by Kranti Sambhav</p>
        <div className='flex items-center justify-center gap-4'>
            <Link className='h-4 w-4 text-xl text-neutral-500 hover:text-neutral-700' href={"https://github.com/KrantiSambhav7"}>
                <FaGithub />
            </Link>
            <Link className='h-4 w-4 text-xl text-neutral-500 hover:text-neutral-700' href={"https://twitter.com/KrantiSambhav7"}>
                <FaSquareXTwitter />
            </Link>
            <Link className='h-4 w-4 text-xl text-neutral-500 hover:text-neutral-700' href={"https://leetcode.com/u/KrantiSambhav7"}>
                <TbBrandLeetcode />
            </Link>
        </div>
    </Container>
  )
}

export default Footer

