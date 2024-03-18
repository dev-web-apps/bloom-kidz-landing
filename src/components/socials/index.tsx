import { Box, Stack, Typography } from "@mui/material";
import FB from "../../assets/FIcon.svg";
import Insta from "../../assets/cameraIcon.svg";
import Twitter from "../../assets/birdIcon.svg";
import FBLight from "../../assets/greenF.svg";
import InstaLight from "../../assets/green-camera.svg";
import TwitterLight from "../../assets/green-bird.svg";

const socialPlatforms = [
  {
    name: "Facebook",
    icon: FB,
    lightIcon: FBLight,
    username: "bloomkidz",
    url: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: Insta,
    lightIcon: InstaLight,
    username: "bloomkidz",
    url: "https://www.instagram.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    lightIcon: TwitterLight,
    username: "bloomkidz",
    url: "https://www.twitter.com",
  },
];

const Socials = ({ light }: { light?: boolean }) => {
  return (
    <Stack spacing={3}>
      {socialPlatforms.map((platform, index) => (
        <Box
          key={index}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: { lg: "50%", xs: "100%" },
          }}
          onClick={() => window.open(platform.url)}
        >
          <Box
            sx={{
              height: "70px",
              width: "70px",
              borderRadius: "50%",
              backgroundColor: light ? "#FFFFFF" : "#098EAD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={light ? platform.lightIcon : platform.icon}
              alt={platform.name}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
          <Box>
            <Typography variant="h6" color={light ? "#FFFFFF" : "#000000"}>
              {platform.name}
            </Typography>
            <Typography color={light ? "#FAFAFA" : "#3E3E59CC"} fontSize="16px">
              {platform.username}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Socials;
