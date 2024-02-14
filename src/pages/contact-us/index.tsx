import { Box } from "@mui/material";
import Contact from "./contact";
import FAQSection from "./faq";
import Banner from "./banner";

const ContactUs = () => {
  return (
    <Box pt='90px'>
      <Banner/>
      <Contact />
      <FAQSection />
    </Box>
  );
};

export default ContactUs;
