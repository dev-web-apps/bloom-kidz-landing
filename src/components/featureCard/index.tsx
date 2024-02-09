import { Box, Typography } from "@mui/material";

interface IFeatureCard {
  icon: string;
  heading: string;
  subText: string;
}

const FeatureCard = ({ icon, heading, subText }: IFeatureCard) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "8px",
        boxShadow: "0px 12px 16px 0px rgba(0, 0, 0, 0.02)",
        display: "flex",
        flexDirection: "column",
        minHeight:{xs:'220px',sm:'260px',md:'280px',lg:'260px'}
      }}
    >
      <Box mb={3}>
        <img src={icon} alt="" height={40} width={40} />
      </Box>
      <Box >
        <Typography variant="h5">{heading}</Typography>
        <Typography variant="body1">{subText}</Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;
