import { Box, Container, SxProps, Typography } from "@mui/material";
import Banner from "../../assets/new-banner.png";
import { common } from "@mui/material/colors";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils/helpers";

const boxStyle: SxProps = {
  height: { xs: "100%", md: "750px" },
  background: "linear-gradient(to bottom, #34A6B1 0%, #1F96C0 100%)",
  color: common.white,
  pt: "90px",
};

const leftBox: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: { xs: "column-reverse", md: "row" },
  width: "100%",
  pt: 10,
};

const textStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
  gap: "25px",
  p: { xs: 3, sm: 7, md: "0px" },
};

const imgBox: SxProps = {
  flex: "1",
  justifySelf: "flex-end",
  display: "flex",
  width: { xs: "80%", sm: "90%", md: "100%" },
};

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box sx={boxStyle}>
      <Container maxWidth="lg">
        <Box sx={leftBox}>
          <Box sx={textStyle}>
            <Typography
              fontWeight={600}
              fontSize={{ xs: 32, sm: 48, md: 58 }}
              lineHeight={"60px"}
            >
              A Digital Heaven for Collaborative Early Learning
            </Typography>
            <Typography fontSize={19} fontWeight={400}>
              Discover the power of togetherness in early learning with
              BloomKidz, a digital platform designed to unite educators and
              families in shaping the future of our little ones.
            </Typography>
            <Box display={"flex"} gap={"20px"}>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/free-trial");
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => scrollToSection("pricing")}
              >
                See Pricing
              </Button>
            </Box>
          </Box>
          <Box sx={imgBox}>
            <img
              src={Banner}
              alt=""
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
