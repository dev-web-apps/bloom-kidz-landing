import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  SxProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { textLinks } from "../../utils/constant";
import { useNavigate } from "react-router";

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
const buttonStyle: SxProps = {
  width: "200px",
  alignSelf: "center",
  color: "white",
  fontWeight: "500",
};

const Hamburger = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (item: boolean) => void;
}) => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
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
          background: "linear-gradient(to bottom, #34A6B1 0%, #1F96C0 100%)",
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
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
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
                  sx={{ color: "white", fontWeight: "500" }}
                  key={item.title}
                  onClick={() => {
                    if (item.url) {
                      navigate(item.url);
                    } else if (item.id) {
                      navigate("/");
                      setTimeout(() => {
                        scrollToSection(item.id);
                      }, 100);
                    }
                  }}
                >
                  {item.title}
                </Button>
              </ListItem>
            ))}
          </List>
          <List sx={drawerButtonWrapper}>
            <Button variant="text" sx={{ color: "white", fontWeight: "500" }}>
              Login
            </Button>
            <Button variant="outlined" color="inherit" sx={buttonStyle} onClick={()=> navigate('/request-demo')}>
              Request Demo
            </Button>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Hamburger;
