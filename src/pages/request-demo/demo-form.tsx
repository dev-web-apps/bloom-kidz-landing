import {
  Box,
  Container,
  Grid,
  MenuItem,
  SelectChangeEvent,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import bgImage from "../../assets/packages-bg.png";
import { Button, GroupedSelect, Socials, TextInput } from "../../components";
import { useState } from "react";
import { subscriptionTypeOptions } from "../../utils/constant";

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

const initialState: IDemoForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  role: "",
};

const DemoForm = () => {
  const [form, setForm] = useState<IDemoForm>(initialState);
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
                      Get a free demo
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

                <Grid item xs={12}>
                  <GroupedSelect
                    whiteLabel
                    label="Subscription Type"
                    value={form.role}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        role: (event as SelectChangeEvent<string>).target.value,
                      })
                    }
                  >
                    {subscriptionTypeOptions.map((option, index) => (
                      <MenuItem
                        key={index}
                        value={option.value}
                        sx={{ fontWeight: "600" }}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </GroupedSelect>
                </Grid>
                <Grid item xs={12} mt={2}>
                  <Button variant="contained" sx={{ width: "170px" }}>
                    Book Demo
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

export default DemoForm;
