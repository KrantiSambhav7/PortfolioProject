
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Subheading from "@/components/Subheading";
import { Inter } from "next/font/google";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-14 md:pt-20 md:pb-10">
        <Heading>Kranti Sambhav</Heading>
        <Subheading>Hello I am a software engineer with a passion for building scalable and efficient systems. I am currently a college student trying web development. </Subheading>
        <Projects />
        <Marquee />
      </Container>
    </div>
  );
}
