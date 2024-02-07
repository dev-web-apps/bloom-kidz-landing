import {
  Box,
  ListItem,
  Stack,
  SxProps,
  Drawer,
  List,
  IconButton,
  Container,
  Link,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Logo from "../../assets/kidzbloom.png";
import { useNavigate } from "react-router-dom";
import { textLinks } from "../../utils/constant";

const wrapper: SxProps = {
  background: "rgba(0, 0, 0, 0.0)",
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
const closeBtn: SxProps = {
  color: "white",
  fontSize: "30px",
};
const drawerItems: SxProps = {
  borderBottom: "1px solid #4b4040",
  padding: "15px 20px",
  display: "block",
  textAlign: "center",
};
const drawerButtonWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export default function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
                      text.url
                        ? navigate(text.url)
                        : scrollToSection(text?.id as string);
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
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor:
                    "linear-gradient(to bottom, #34A6B1 0%, #1F96C0 100%)",
                  width: "100%",
                },
              }}
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(to bottom, #34A6B1 0%, #1F96C0 100%)",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box sx={{ alignSelf: "end", width: "100%" }}>
                  <IconButton
                    sx={{
                      margin: "12px 16px 5px 0px",
                      alignSelf: "flex-end",
                    }}
                    size="medium"
                    onClick={toggleDrawer}
                  >
                    <CloseIcon sx={closeBtn} />
                  </IconButton>
                </Box>
                <Box>
                  <List>
                    {textLinks.map((item, index) => (
                      <ListItem
                        sx={drawerItems}
                        onClick={() => setIsDrawerOpen(false)}
                        key={index}
                      >
                        <Button
                          variant="text"
                          color="primary"
                          key={item.title}
                          onClick={() => {
                            item.url
                              ? navigate(item.url)
                              : scrollToSection(item.id as string);
                          }}
                        >
                          {item.title}
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                  <List sx={drawerButtonWrapper}>
                    <Button variant="text">Login</Button>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "200px",
                        alignSelf: "center",
                      }}
                    >
                      Request Demo
                    </Button>
                  </List>
                </Box>
              </Box>
            </Drawer>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
