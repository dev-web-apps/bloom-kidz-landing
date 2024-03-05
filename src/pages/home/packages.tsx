import React, { useEffect, useState } from "react";
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
import { getAllPackages } from "../../services/api.services";

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
  const [packageList, setPackageList] = useState<IBillingData[] | []>([]);
  const [billingCycle, setBillingCycle] = useState("MONTHLY");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillingCycle(event.target.checked ? "YEARLY" : "MONTHLY");
  };

  const yearlyPackages = packageList.filter(
    (packageItem) => packageItem.billing === "YEARLY"
  );
  const monthlyPackages = packageList.filter(
    (packageItem) => packageItem.billing === "MONTHLY"
  );

  const getCardDarkProp = (index: number, totalPackages: number) => {
    if (totalPackages <= 2) {
      return false;
    }

    if (totalPackages === 3) {
      return index === 1;
    }

    return (index + 1) % (totalPackages / 3) === 2;
  };

  useEffect(() => {
    getAllPackages()
      .then((response) => {
        setPackageList(response?.data?.data?.list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{ position: "relative", textAlign: "center", my: 4 }}
        id="pricing"
      >
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
                checked={billingCycle === "YEARLY"}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                // defaultChecked={billingCycle === "YEARLY"}
              />
              <Typography variant="subtitle1" color={"#FFFFFF"}>
                Pay Yearly
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {billingCycle === "YEARLY" &&
                yearlyPackages.map((packageItem, index) => (
                  <Grid item xs={12} sm={12} md={yearlyPackages.length === 2 ? 6 : 4}  key={packageItem.id}>
                    <PackageCard
                      price={`£${packageItem.fee}`}
                      packageName={packageItem.title}
                      perks={[
                        `${packageItem.description}`,
                        `${packageItem.subTitle}`,
                      ]}
                      yearly={true}
                      dark={getCardDarkProp(index, yearlyPackages.length)}
                    />
                  </Grid>
                ))}
              {billingCycle === "MONTHLY" &&
                monthlyPackages.map((packageItem, index) => (
                  <Grid item xs={12} sm={12} md={monthlyPackages.length === 2 ? 6 : 4}  key={packageItem.id}>
                    <PackageCard
                      price={`£${(packageItem.fee)}`}
                      packageName={packageItem.title}
                      perks={[
                        `${packageItem.description}`,
                        `${packageItem.subTitle}`,
                      ]}
                      yearly={false}
                      dark={getCardDarkProp(index, monthlyPackages.length)}
                    />
                  </Grid>
                ))}
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Packages;
