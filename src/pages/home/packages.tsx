import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import Background from "../../assets/packages-bg.png";
import { CustomSwitch, PackageCard } from "../../components";

const imgBox: SxProps = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
};
const mainHeading: SxProps = {
  color: "#FFFFFF",
  width: { xs: "100%", sm: "100%", md: "430px" },
  fontWeight: "600",
  lineHeight: "50px",
};
const mainBox: SxProps = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  p: { xs: 4, sm: 6, md: 8 },
  py: 14,
  minHeight: "100%",
};

const Packages = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ position: "relative", textAlign: "center", my: 4 }}>
        <Box sx={imgBox}>
          <img src={Background} alt="" width={"100%"} height={"100%"} />
        </Box>
        <Box sx={mainBox}>
          <Stack spacing={3} alignItems={"center"} width={"100%"}>
            <Typography variant="h2" sx={mainHeading}>
              No credit cards. No commitment.
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap="25px">
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <PackageCard
                  price={checked ? "£300" : "£25"}
                  packageName="Childminders package"
                  perks={["2-month Free Trial", "Up to 10 Children"]}
                  yearly={checked}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PackageCard
                  price={checked ? "£480" : "£45"}
                  packageName="Nursery package"
                  perks={["2-month Free Trial", "Up to 10 Children"]}
                  dark
                  yearly={checked}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <PackageCard
                  price={checked ? "£1020" : "£85"}
                  packageName="Nursery package"
                  perks={["2-month Free Trial", "40 + Children"]}
                  yearly={checked}
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Packages;
