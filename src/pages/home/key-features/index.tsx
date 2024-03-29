import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import { Button } from "../../../components";
import SliderSection from "./slider-section";
import keyFeature1 from "../../../assets/key-feature1.png";
import keyFeature2 from "../../../assets/key-feature2.png";
import Prop1 from "../../../assets/feature-prop-1.png";
import Prop2 from "../../../assets/feature-prop-2.png";
import Prop3 from "../../../assets/feature-prop-3.png";
import Prop4 from "../../../assets/feature-prop-4.png";
import Check from "../../../assets/CheckCircle.png";
import { featureMock } from "../../../mocks/home";
import { useNavigate } from "react-router-dom";

const mainContainer: SxProps = {
  borderRadius: "24px",
  backgroundColor: "#F8F8F8",
  p: { xs: 1, sm: 3, md: 7 },
  px: 8,
  mb: 6,
};

const firstBox: SxProps = {
  display: "flex",
  alignItems: "center",
  flexDirection: { xs: "column-reverse", md: "row" },
  width: "100%",
  pt: 2,
  gap: "45px",
  mb: { xs: 1, sm: 3, md: 6 },
  position: "relative",
};

const textStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
  gap: "20px",
  p: { xs: 3, sm: 7, md: "0px" },
};

const mainText: SxProps = {
  fontSize: { xs: 25, sm: 35, md: 45 },
  lineHeight: { xs: "35px", sm: "45px", md: "55px" },
  fontWeight: "600",
};
const subText: SxProps = {
  color: "#3E3E59CC",
  opacity: "0.8",
  fontWeight: "400",
  fontSize: "18px",
};

const imgBox: SxProps = {
  flex: "1",
  width: { xs: "80%", sm: "90%", md: "100%" },
};

const propstyle1: SxProps = {
  position: "absolute",
  top: "0",
  right: "0",
  opacity: { xs: "0", lg: "1" },
  img: {
    width: { xs: "0px !important", lg: "130px !important" },
  },
};

const propstyle2: SxProps = {
  position: "absolute",
  bottom: "-30px",
  right: "420px",
  opacity: { xs: "0", lg: "1" },
  img: {
    width: { xs: "0px !important", lg: "80px !important" },
  },
};

const propstyle3: SxProps = {
  position: "absolute",
  top: "-35px",
  right: "-60px",
  opacity: { xs: "0", lg: "1" },
  img: {
    width: { xs: "0px !important", lg: "70px !important" },
  },
};
const propstyle4: SxProps = {
  position: "absolute",
  bottom: "-70px",
  left: "400px",
  opacity: { xs: "0", lg: "1" },
  img: {
    width: { xs: "0px !important", lg: "100px !important" },
  },
};

const KeyFeatures = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  return (
    <Box id={id}>
      <Container maxWidth="lg">
        <SliderSection />
        <Box sx={mainContainer}>
          <Box sx={firstBox}>
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
            <Box sx={imgBox}>
              <img
                src={keyFeature1}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
            <Box sx={textStyle}>
              <Typography sx={mainText}>{featureMock.Heading1}</Typography>
              <Typography sx={subText}>{featureMock.SubText1}</Typography>
              <Box mt={1}>
                <Button variant="contained" onClick={()=> navigate('/request-demo')}>Request Demo</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...firstBox, flexDirection: { xs: "column", md: "row" } }}>
            <Box sx={propstyle3}>
              <img
                src={Prop3}
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
            <Box sx={textStyle}>
              <Typography sx={mainText}>{featureMock.Heading2}</Typography>
              <Typography sx={subText}>{featureMock.SubText2}</Typography>
              <Typography sx={subText}>{featureMock.SubText2More}</Typography>
              <Stack spacing={1}>
                {featureMock.SubText2Array.map((item, index) => (
                  <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                    <img
                      src={Check}
                      alt="Check"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <Typography
                      key={index}
                      sx={{ ...subText, fontSize: "16px" }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Box mt={1}>
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate("/free-trial");
                  }}
                >
                  Start Free Trial
                </Button>
              </Box>
            </Box>
            <Box sx={imgBox} position={"relative"}>
              <img
                src={keyFeature2}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default KeyFeatures;
