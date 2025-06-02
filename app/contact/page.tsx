
import Container from "@/components/Container";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import { Inter } from "next/font/google";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-14 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <Subheading>Open for freelancing offers. Reach out to me to inquire more about my work.</Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
