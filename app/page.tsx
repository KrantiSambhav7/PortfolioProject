
import Container from "@/components/Container";
import { Inter } from "next/font/google";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen ">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Hello there</h1>
        <p className="text-primary">Hello I am a software engineer with a passion for building scalable and efficient systems. I am currently a college student trying web development. </p>
      </Container>
    </div>
  );
}
