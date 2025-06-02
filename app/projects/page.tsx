
import Container from "@/components/Container";
import Projects from "@/components/Projects";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-14 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <Subheading>  I am a passionate and driven software engineer currently pursuing my undergraduate studies in engineering, with a strong interest in building scalable, efficient, and user-centric systems. My journey in computer science has been fueled by curiosity and a desire to solve real-world problems through technology.</Subheading>
        <Projects />
      </Container>
    </div>
  );
}
