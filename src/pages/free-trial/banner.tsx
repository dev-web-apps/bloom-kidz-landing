import {
  Box,
  Container,
  Grid,
  ListSubheader,
  MenuItem,
  SelectChangeEvent,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import bgImage from "../../assets/packages-bg.png";
import { Button, GroupedSelect, Socials, TextInput } from "../../components";
import { useState } from "react";

const wrapper: SxProps = {
  position: "relative",
  height: { xs: "auto", sm: "100vh" },
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  paddingTop: { xs: "90px", sm: 0 },
};

const mainContainer: SxProps = {
  p: { xs: 1, sm: 4, md: 8 },
  mb: 6,
};
const mainHeading: SxProps = {
  display: "flex",
  gap: "10px",
  flexDirection: "column",
};
const subText: SxProps = {
  opacity: "0.8",
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "400",
  ml: 1,
};

const initialState: ISignUp = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  nurseryName: "",
  subscriptionType: "",
};

const Banner = () => {
  const [form, setForm] = useState<ISignUp>(initialState);
  return (
    <Box sx={wrapper}>
      <Container maxWidth="lg">
        <Box
          sx={{
            ...mainContainer,
            backgroundColor: "rgba(0, 0, 0, 0.0)",
          }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={6}>
              <Stack
                direction={{ xs: "column", sm: "row", md: "row", lg: "column" }}
                alignItems={{ xs: "center", lg: "normal" }}
                justifyContent="space-evenly"
              >
                <Box sx={mainHeading}>
                  <Box width={{ xs: "100%", lg: "500px" }} textAlign={"start"}>
                    <Typography variant="h2" color="background.default">
                      Start FREE Trial
                    </Typography>
                    <Typography
                      sx={subText}
                      color="background.default"
                      width={{
                        xs: "100%",
                        lg: "270px",
                      }}
                    >
                      No credit cards. No commitment.
                    </Typography>
                  </Box>
                </Box>
                <Box mt={4}>
                  <Socials light />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="First Name"
                    whiteLabel
                    type="text"
                    placeholder="Your first name"
                    value={form.firstName}
                    handleChangeValue={(val: string) =>
                      setForm({ ...form, firstName: val })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Last Name"
                    whiteLabel
                    type="text"
                    placeholder="Your Last Name"
                    value={form.lastName}
                    handleChangeValue={(val: string) =>
                      setForm({ ...form, lastName: val })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Email Address"
                    whiteLabel
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    handleChangeValue={(val: string) =>
                      setForm({ ...form, email: val })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Phone Number"
                    whiteLabel
                    type="number"
                    placeholder="Your Number"
                    value={form.phoneNo}
                    handleChangeValue={(val: string) =>
                      setForm({ ...form, phoneNo: val })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Nursery Name"
                    whiteLabel
                    type="text"
                    placeholder="Your Nursery Name"
                    value={form.nurseryName}
                    handleChangeValue={(val: string) =>
                      setForm({ ...form, nurseryName: val })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <GroupedSelect
                    whiteLabel
                    label="Subscription Type"
                    value={form.subscriptionType}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        subscriptionType: (event as SelectChangeEvent<string>)
                          .target.value,
                      })
                    }
                  >
                    <ListSubheader
                      sx={{
                        backgroundColor: "#34A6B140",
                        color: "black",
                        fontSize: "12px !important",
                      }}
                    >
                      MONTHLY
                    </ListSubheader>
                    <MenuItem value={1} sx={{ fontWeight: "600" }}>
                      Childminders Package - £25/month
                    </MenuItem>
                    <MenuItem value={2} sx={{ fontWeight: "600" }}>
                      Childminders Package - £25/month
                    </MenuItem>
                    <MenuItem value={3} sx={{ fontWeight: "600" }}>
                      Nursery Package - £45/month
                    </MenuItem>
                    <ListSubheader
                      sx={{
                        backgroundColor: "#34A6B140",
                        color: "black",
                        fontSize: "12px !important",
                      }}
                    >
                      YEARLY
                    </ListSubheader>
                    <MenuItem value={4} sx={{ fontWeight: "600" }}>
                      Childminders Package - £250/year
                    </MenuItem>
                    <MenuItem value={5} sx={{ fontWeight: "600" }}>
                      Nursery Package - £450/year
                    </MenuItem>
                    <MenuItem value={6} sx={{ fontWeight: "600" }}>
                      Nursery Package - £850/year
                    </MenuItem>
                  </GroupedSelect>
                  {/* <TextInput
                    label="Subscription Type"
                    whiteLabel
                    type="text"
                    placeholder="Please Select"
                    value={form.subscriptionType}
                    handleChangeValue={(val: string) =>
                      setForm({ ...form, subscriptionType: val })
                    }
                  /> */}
                </Grid>
                <Grid item xs={12} mt={2}>
                  <Button variant="contained" sx={{ width: "170px" }}>
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
