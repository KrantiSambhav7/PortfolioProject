
import Container from "@/components/Container";
import Projects from "@/components/Projects";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { MDXRemote } from 'next-mdx-remote/rsc' // Now we need to get the MDX file here.
import { compileMDX } from "next-mdx-remote/rsc";
export const metadata: Metadata = { // To rank good in search engines
  title: "All Blogs | Kranti Sambhav",
 description: "Explore all blogs written by Kranti Sambhav, a software engineer with a passion for building scalable and efficient systems.",
};

export default async function SingleBlogPage() {
    const singleBlog = await fs.promises.readFile(path.join(process.cwd() , "/data/" , "tailwindcss-basics.mdx") , 'utf-8');
    console.log(singleBlog)
    const { content, frontmatter } = await compileMDX<{title: string}>({
        source: singleBlog,
        options: {
            parseFrontmatter: true,
        },
    });
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <div className="prose prose-invert text-neutral-400">
            {content}
        </div>
      </Container>
    </div>
  );
}
