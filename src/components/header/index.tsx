import {
  Box,
  Stack,
  SxProps,
  IconButton,
  Container,
  Link,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Logo from "../../assets/kidzbloom.png";
import { useNavigate } from "react-router-dom";
import { textLinks } from "../../utils/constant";
import Hamburger from "./hamburger";
import { scrollToSection } from "../../utils/helpers";

const wrapper: SxProps = {
  background: "#34a6b1",
  transition: "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
  height: "90px",
  display: "flex",
  alignItems: "center",
  zIndex: 1000,
  position: "fixed",
  width: "100%",
};

const navbarWrap: SxProps = {
  mb: { md: 0, xs: 2 },
  mt: { md: 0, xs: 1 },
  display: {
    md: "flex",
    xs: "none",
  },
};

const buttonWrap: SxProps = {
  display: {
    md: "flex",
    xs: "none",
  },
  color: "#ffffff",
};

const drawerBtn: SxProps = {
  marginLeft: "auto",
  display: {
    md: "none",
    xs: "flex",
  },
};

export default function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={wrapper}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"column"}>
              <Box>
                <Link href="/">
                  <img alt="logo" src={Logo} height={"70px"} width={"153px"} />
                </Link>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={navbarWrap}
            >
              {textLinks?.map((text) => {
                return (
                  <Button
                    variant="text"
                    sx={{ color: "#ffffff", fontWeight: 400 }}
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
                  >
                    {text.title}
                  </Button>
                );
              })}
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1.3}
              sx={buttonWrap}
            >
              <Button variant="text" sx={{ color: "white", fontWeight: 400 }}>
                Login
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  color: "white",
                  fontWeight: 400,
                  py: "12px",
                  borderRadius: "6px",
                }}
                onClick={()=> navigate('/request-demo')}
              >
                Request Demo
              </Button>
            </Stack>
            <IconButton
              sx={drawerBtn}
              size="large"
              edge="start"
              aria-label="logo"
              onClick={toggleDrawer}
            >
              <MenuIcon
                sx={{
                  color: "#ffffff",
                }}
              />
            </IconButton>
            <Hamburger
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
