import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { Accordiondata } from "../../mocks/contact us";
import { useState } from "react";

const FAQSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange =
    (index: number) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : null);
    };
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
        <Box width="70%" marginLeft="15%">
          {Accordiondata.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "white",
                borderBottom: expanded === index ? "0" : "2px solid #e5e0e0",
                boxShadow:'none'
              }}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={expanded === index ? <Remove /> : <Add />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography fontWeight="600" fontSize="22px" lineHeight="34px">
                  {item.heading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="30px"
                  color="#3E3E59CC"
                >
                  {item.subheading}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default FAQSection;
