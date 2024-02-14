import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Accordiondata } from "../../mocks/contact us";

const FAQ = ({ bgcolor }: { bgcolor: string }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (index: number) => (
    _event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? index : null);
  };
  return (
    <Stack
      my={5}
      p={{ xs: 2, sm: 4, md: 6 }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        fontWeight={600}
        variant="h2"
        lineHeight={"56px"}
        width={{ xs: "100%", sm: "500px" }}
        textAlign="center"
        py={3}
      >
        Anything we can help you with?
      </Typography>
      <Box width={{ xs: "100%", sm: "90%", md: "80%" }}>
        {Accordiondata.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: bgcolor,
              borderBottom: expanded === index ? "0" : "2px solid #e5e0e0",
              boxShadow: "none",
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
    </Stack>
  );
};

export default FAQ;
