import { Box, Container, SxProps, Typography } from "@mui/material";
import bgImage from "../../assets/packages-bg.png";
import emailIcon from "../../assets/email-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import { ContactCard } from "../../components";

const wrapper: SxProps = {
  position: "relative",
  height: { xs: "auto", sm: "100%" },
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
};
const headingBox: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: { xs: "column", md: "row" },
  p: { xs: 3, sm: 4, md: 8, lg: 9 },
  gap: "20px",
};
const cardContainer: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  gap: "20px",
  px: 1,
};

const Banner = () => {
  return (
    <Box sx={wrapper}>
      <Container maxWidth="lg">
        <Box sx={headingBox}>
          <Typography variant="h2" color="background.default">
            We would love to hear from you!
          </Typography>
          <Box sx={cardContainer}>
            <ContactCard
              icon={phoneIcon}
              heading="Call us"
              phoneNumber="(123) 431 3456"
            />
            <ContactCard
              icon={emailIcon}
              heading="Email us"
              phoneNumber="hello@bloomkidz.com"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
