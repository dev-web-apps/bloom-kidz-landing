import { Avatar, Box, Stack, Typography } from "@mui/material";
import quoteIcon from "../../assets/quote-icon.png";

interface IFeatureCard {
  name: string;
  position: string;
  text: string;
  secondPara?: string;
}

const ReviewCard = ({ position, name, text, secondPara }: IFeatureCard) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "8px",
        boxShadow: "0px 12px 16px 0px rgba(0, 0, 0, 0.04)",
        width: "100%",
        
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <img src={quoteIcon} alt="" height={24} width={27} />
      </Box>
      <Stack spacing={2} mt={1}>
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <Avatar sx={{ width: 50, height: 50 }}> </Avatar>
          <Stack>
            <Typography fontSize={"17px"} fontWeight={700}>
              {name}
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#0D0D0D", opacity: "0.8" }}
            >
              {position}
            </Typography>
          </Stack>
        </Box>
        <Stack spacing={2}>
          <Typography variant="body1" color={"#3E3E59"}>
            {text}
          </Typography>
          <Typography variant="body1" color={"#3E3E59"}>
            {secondPara}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ReviewCard;
