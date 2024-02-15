import { Box, Stack, Typography } from "@mui/material";
import FB from "../../assets/Facebook.png";
import Insta from "../../assets/Instagram.png";
import Twitter from "../../assets/Twitter.png";
import FBLight from "../../assets/Facebook-light.png";
import InstaLight from "../../assets/Instagram-light.png";
import TwitterLight from "../../assets/Twitter-light.png";

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
            width:'50%'
          }}
          onClick={() => window.open(platform.url)}
        >
          <img
            src={light ? platform.lightIcon : platform.icon}
            alt={platform.name}
            height={60}
            width={60}
          />
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
