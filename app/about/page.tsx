
import Container from "@/components/Container";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import { Inter } from "next/font/google";
import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-14 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">About Me</h1>
        <p className="text-secondary text-sm md:text-sm pt-4 w-full">
            I am a passionate and driven software engineer currently pursuing my undergraduate studies in engineering, with a strong interest in building scalable, efficient, and user-centric systems. My journey in computer science has been fueled by curiosity and a desire to solve real-world problems through technology.
        </p>
        <main className="flex items-center justify-center w-full h-[50vh] md:h-[63vh] ml-4">
            <Spline scene="https://prod.spline.design/JI0gSpEltqmVo2R9/scene.splinecode" />
        </main>
        <p className="text-secondary text-sm md:text-sm pt-4 w-full">
            Here is a timeline of my life events.
        </p>
        <Timeline />
      </Container>
    </div>
  );
}
