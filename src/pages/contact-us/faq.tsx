import { Add,} from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { Accordiondata } from "../../mocks/contact us";


const FAQSection = () => {
  return (
    <Container maxWidth="lg">
        <Box pb="10%">
      <Box>
        <Typography
          fontWeight={700}
          fontSize={"48px"}
          lineHeight={"56px"}
          textAlign="center"
          width="40%"
          marginLeft="30%"
          pt="10%"
          pb="3%"
        >
          Anything we can help you with?
        </Typography>

      </Box>
      <Box width="70%" marginLeft="15%" >
       {Accordiondata.map((item) => (
        <Accordion key={item.id} sx={{backgroundColor:"#F8F8F8"}}>
          <AccordionSummary
            expandIcon={<Add/>}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <Typography fontWeight="400" fontSize="18px" lineHeight="30px">{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.subheading}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    

      </Box>
      </Box>
    </Container>
  );
};

export default FAQSection;
