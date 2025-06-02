
import Container from "@/components/Container";
import Timeline from "@/components/Timeline";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import Spline from "@splinetool/react-spline";
export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-14 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <Subheading>            I am a passionate and driven software engineer currently pursuing my undergraduate studies in engineering, with a strong interest in building scalable, efficient, and user-centric systems. My journey in computer science has been fueled by curiosity and a desire to solve real-world problems through technology.</Subheading>
        <main className="flex items-center justify-center w-full h-[50vh] md:h-[63vh] ml-4">
            <Spline scene="https://prod.spline.design/JI0gSpEltqmVo2R9/scene.splinecode" />
        </main>
        <p className="text-primary text-sm md:text-sm pt-4 w-full ">
            Here is a timeline of my life events.
        </p>
        <Timeline />
      </Container>
    </div>
  );
}
