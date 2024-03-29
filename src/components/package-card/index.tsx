import React from "react";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { Button } from "..";
import { useNavigate } from "react-router-dom";

const mainContainer = (dark: boolean): SxProps => ({
  p: { xs: 2, sm: 4 },
  borderRadius: "16px",
  width: "100%",
  backgroundColor: dark ? "#000" : "#FFFFFF",
});

const firstBox = (dark: boolean): SxProps => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: dark ? "365px" : "350px",
});
const headerBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "35px",
};

const PackageCard: React.FC<IPackageCard> = ({
  price,
  packageName,
  perks,
  dark = false,
  yearly,
}) => {
  const getTextColor = (dark: boolean): string => {
    return dark ? "#FAFAFB" : "#0D0D0D";
  };
  const navigate = useNavigate();
  return (
    <Box sx={mainContainer(dark as boolean)}>
      <Box sx={firstBox(dark)}>
        <Box sx={headerBox}>
          <Box display={"flex"} justifyContent="space-between">
            <Box textAlign={"start"}>
              <Typography
                fontSize={"36px"}
                color={getTextColor(dark)}
                fontWeight={700}
              >
                {price}
              </Typography>
              <Typography fontSize={"16px"} color={getTextColor(dark)}>
                Per {yearly ? "Year" : "Month"}
              </Typography>
            </Box>
            <Typography
              fontSize={"18px"}
              color={getTextColor(dark)}
              fontWeight={600}
              textAlign={"end"}
              width={"50%"}
            >
              {packageName}
            </Typography>
          </Box>
          <Stack textAlign={"start"} spacing={1}>
            <Typography
              fontSize={"17px"}
              color={getTextColor(dark)}
              fontWeight={600}
            >
              <div dangerouslySetInnerHTML={{ __html: perks }}></div>
            </Typography>
          </Stack>
        </Box>
        <Box alignSelf={"start"}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/free-trial");
            }}
          >
            Start Free Trial
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PackageCard;
