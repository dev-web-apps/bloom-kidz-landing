import {
  Box,
  Button as MuiButton,
  IconButton,
  Stack,
  Typography,
  Grid,
  SxProps,
  Container,
  Divider,
} from "@mui/material";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { useNavigate } from "react-router";
import Logo from "../../assets/kidzbloom.png";
import { Button } from "..";
import { scrollToSection } from "../../utils/helpers";
import { footerRoutes } from "../../utils/constant";

const wrapper: SxProps = {
  py: 6,
  pt: 8,
};

const firstGrid: SxProps = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "10px",
};
const fontStyle: SxProps = {
  color: "#0D0D0D",
  opacity: "0.7",
  fontWeight: 400,
  fontSize: "16px",
};
const buttonStyle: SxProps = {
  ...fontStyle,
  justifyContent: "flex-start",
  mb: "4px",
  p: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
};

const socials = [
  {
    icon: <AiFillFacebook color="#000" />,
    size: "20px",
    url: "https://www.facebook.com",
  },
  {
    icon: <BsTwitter color="#000" />,
    size: "20px",
    url: "https://www.twitter.com",
  },
  {
    icon: <AiFillLinkedin color="#000" />,
    size: "20px",
    url: "https://www.linkedin.com",
  },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box bgcolor={"common.white"}>
      <Container>
        <Box sx={wrapper}>
          <>
            <Grid container m={2} spacing={{ xs: 1, sm: 3, md: 6 }} mb={8}>
              <Grid item xs={12} sm={6} md={4} sx={firstGrid}>
                <Box>
                  <img alt="logo" src={Logo} height={72} width={170} />
                </Box>
                <Typography sx={fontStyle} mr={2}>
                  Join Bloom Kidz today and embark on a collaborative
                  educational adventure that puts children's growth and
                  development at the forefront.
                </Typography>
              </Grid>
              {footerRoutes?.map((route) => {
                return (
                  <Grid item xs={6} sm={3} md={2} key={route.title} mt={2}>
                    <Box>
                      <Typography mb={"10px"} variant="h6">
                        {route.title}
                      </Typography>
                      <Stack>
                        {route.links?.map((text) => {
                          return (
                            <MuiButton
                              variant="text"
                              sx={buttonStyle}
                              key={text.title}
                              onClick={() => {
                                if (text.url) {
                                  navigate(text.url);
                                } else if (text.id) {
                                  navigate("/");
                                  setTimeout(() => {
                                    scrollToSection(text.id);
                                  }, 100);
                                }
                              }}
                              disableRipple
                            >
                              {text.title}
                            </MuiButton>
                          );
                        })}
                      </Stack>
                    </Box>
                  </Grid>
                );
              })}
              <Grid item xs={12} sm={12} md={4} mt={2}>
                <Stack>
                  <Box mb={4}>
                    <Typography fontWeight={700} mb={"8px"} variant="h6">
                      Want to try Bloom Kidz for free?
                    </Typography>
                    <Typography sx={fontStyle}>
                      No credit cards. No commitment.
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"20px"}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate("/free-trial");
                      }}
                    >
                      Start Free Trial
                    </Button>
                    <Button variant="outlined" color="inherit">
                      See pricing
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ mb: 2 }} />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} gap="5px">
                {socials?.map((icon, iconIndex) => {
                  return (
                    <IconButton
                      key={`social${iconIndex}`}
                      style={{
                        height: icon.size,
                        width: icon.size,
                        padding: 0,
                      }}
                      onClick={() => window.open(icon.url)}
                    >
                      {icon.icon}
                    </IconButton>
                  );
                })}
              </Stack>
              <Box display={"flex"} alignItems={"center"} gap={"30px"}>
                <Typography sx={fontStyle}>Terms</Typography>
                <Typography sx={fontStyle}>Privacy Policy</Typography>
              </Box>
            </Box>
          </>
        </Box>
      </Container>
    </Box>
  );
}
