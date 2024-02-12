import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Background from "../../assets/packages-bg.png";
import { CustomSwitch } from "../../components";

const Packages = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <img src={Background} alt="" width={"100%"} height={"100%"} />
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            p: 6,
            minHeight: "100vh",
          }}
        >
          <Stack spacing={3} alignItems={"center"}>
            <Typography
              variant="h2"
              color={"#FFFFFF"}
              width={"70%"}
              fontWeight={600}
              lineHeight={"50px"}
            >
              No credit cards. No commitment.
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap="10px">
              <Typography variant="subtitle1" color={"#FFFFFF"}>
                Pay Monthly
              </Typography>
              <CustomSwitch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                defaultChecked
              />
              <Typography variant="subtitle1" color={"#FFFFFF"}>
                Pay Yearly
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Packages;
