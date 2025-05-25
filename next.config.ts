import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};



export default nextConfig 
