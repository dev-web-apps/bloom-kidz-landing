import { Box, Container } from "@mui/material";
import { FAQ } from "../../components";

const FAQSection = () => {
  return (
    <Box bgcolor='#F8F8F8' height={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Container maxWidth="lg">
        <FAQ bgcolor="#F8F8F8" />
      </Container>
    </Box>
  );
};

export default FAQSection;
