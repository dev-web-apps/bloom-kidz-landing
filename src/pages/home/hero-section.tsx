import { Box, Button, Container, Typography } from "@mui/material";
import Banner from "../../assets/home-banner.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(to bottom, #34A6B1 0%, #1F96C0 100%)",
        color: "white",
        pt: "90px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            pt: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              gap: "25px",
              p: { xs: 3, sm: 7, md: "0px" },
            }}
          >
            <Typography
              fontWeight={600}
              fontSize={{ xs: 38, sm: 48, md: 58 }}
              lineHeight={"60px"}
            >
              A Digital Haven for Collaborative Early Learning
            </Typography>
            <Typography fontSize={19} fontWeight={400}>
              Discover the power of togetherness in early learning with
              BloomKidz, a digital platform designed to unite educators and
              families in shaping the future of our little ones.
            </Typography>
            <Box display={"flex"} gap={"20px"}>
              <Button
                variant="contained"
                sx={{ p: { xs: "10px", sm: "13px 35px" }, borderRadius: "6px" }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  p: { xs: "10px", sm: "13px 35px" },
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                See pricing
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "1",
              justifySelf: "flex-end",
              display: "flex",
              width: { xs: "80%", sm: "90%", md: "100%" },
            }}
          >
            <img
              src={Banner}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                marginLeft: "auto",
                justifySelf: "flex-end",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
