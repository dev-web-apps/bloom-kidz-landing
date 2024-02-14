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

const Banner = () => {
  return (
    <Box sx={wrapper}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ xs: "column", md: "row" }}
          p={{ xs: 3, sm: 4, md: 8, lg: 9 }}
          gap={"20px"}
        >
          <Typography
            variant="h2"
            color="background.default"
            fontWeight={700}
            width={"100%"}
          >
            We would love to hear from you!
          </Typography>
          <Box
            display="flex"
            gap="20px"
            flexDirection={{ xs: "column", lg: "row" }}
            px={1}
          >
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
