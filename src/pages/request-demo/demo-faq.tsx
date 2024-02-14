import { Box, Container, SxProps } from "@mui/material";
import { FAQ } from "../../components";
import Prop1 from "../../assets/feature-prop-1.png";
import Prop2 from "../../assets/feature-prop-2.png";
import Prop4 from "../../assets/feature-prop-4.png";

const propstyle1: SxProps = {
  position: "absolute",
  top: "0",
  right: "0",
  opacity: { xs: "0", md: "1" },
  img: {
    width: { xs: "0px !important", md: "130px !important" },
  },
};

const propstyle2: SxProps = {
  position: "absolute",
  bottom: "0",
  right: "0",
  opacity: { xs: "0", md: "1" },
  img: {
    width: { xs: "0px !important", md: "80px !important" },
  },
};

const propstyle4: SxProps = {
  position: "absolute",
  bottom: "0",
  left: "0",
  opacity: { xs: "0", md: "1" },
  img: {
    width: { xs: "0px !important", md: "100px !important" },
  },
};

const DemoFAQ = () => {
  return (
    <Box
      bgcolor="#F8F8F8"
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <FAQ bgcolor="#F8F8F8" />

        <Box sx={propstyle1}>
          <img
            src={Prop1}
            alt=""
            style={{
              height: "auto",
            }}
          />
        </Box>
        <Box sx={propstyle2}>
          <img
            src={Prop2}
            alt=""
            style={{
              height: "auto",
            }}
          />
        </Box>
        <Box sx={propstyle4}>
          <img
            src={Prop4}
            alt=""
            style={{
              height: "auto",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DemoFAQ;
