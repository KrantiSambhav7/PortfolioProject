import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};


  const withMDX = createMDX({
  // Add markdown plugins here, as desired
   extension: /\.(md|mdx)$/,
})


export default withMDX(nextConfig) 
