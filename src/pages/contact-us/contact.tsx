import { Container } from "@mui/material";
import { ContactUsForm } from "../../components";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <ContactUsForm
        heading="Send us a message"
        text="Fill out the form and our team will get back to you as quickly as we can."
        button="Send"
        bgColor="#FFFFFF"
      />
    </Container>
  );
};

export default Contact;