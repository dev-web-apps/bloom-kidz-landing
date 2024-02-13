import { Container } from "@mui/material";
import { ContactUsForm } from "../../components";

const Demo = () => {
  return (
    <Container maxWidth="lg">
      <ContactUsForm
        heading="Get a free demo"
        text="No credit cards. No commitment."
        button="Request Demo"
      />
    </Container>
  );
};

export default Demo;
