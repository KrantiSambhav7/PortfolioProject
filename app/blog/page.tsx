
import Container from "@/components/Container";
import Projects from "@/components/Projects";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Link } from 'next-view-transitions'

export const metadata: Metadata = { // To rank good in search engines
  title: "All Blogs | Kranti Sambhav",
 description: "Explore all blogs written by Kranti Sambhav, a software engineer with a passion for building scalable and efficient systems.",
};

export default async function BlogsPage() {
    const allBlog = await getBlogs();
    console.log(allBlog)
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">All blogs </h1>
        <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">Hello I am a software engineer with a passion for building scalable and efficient systems. I am currently a college student trying web development. </p>
        <div className="flex flex-col gap-4 py-10">
            {allBlog.map((blog , idx) => (
                <Link className="flex gap-4" key={blog?.slug} href={`/blog/${blog?.slug}`}>
                    <h2 className="text-white">{idx}.</h2>
                    <div>
                        <h2 className="text-white capitalize ">{blog?.slug}</h2>
                        <div className="h-[.02rem] w-full bg-neutral-400"></div>
                    </div>
                </Link>
            ))}
        </div>
      </Container>
    </div>
  );
}
