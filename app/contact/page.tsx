
import Container from "@/components/Container";
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
