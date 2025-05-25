
import Container from "@/components/Container";
import Projects from "@/components/Projects";
import { Inter } from "next/font/google";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Kranti Sambhav</h1>
        <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">Hello I am a software engineer with a passion for building scalable and efficient systems. I am currently a college student trying web development. </p>
        <Projects />
      </Container>
    </div>
  );
}
