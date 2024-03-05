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
import { roleOptions } from "../../utils/constant";
import { requestDemo } from "../../services/api.services";
import { useAlert } from "react-alert";
import { validateEmail } from "../../utils/helpers";

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
  designation: "",
};

const DemoForm = () => {
  const alert = useAlert();
  const [form, setForm] = useState<IDemoForm>(initialState);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!validateEmail(form.email)) {
      alert.error("Wrong email format");
      setLoading(false);
      return;
    }
    setLoading(true);
    requestDemo({ ...form, type: "DEMO_REQUEST" })
      .then((response) => {
        alert.success("Your Demo Request has been sent!");
        console.log(response);
        setLoading(false);
        setForm(initialState);
      })
      .catch((error) => {
        alert.error(error.response.data.message || "An Error Occured");
        setLoading(false);
      });
  };
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
                    displayEmpty
                    whiteLabel
                    label="Please Select Your Role"
                    value={form.designation}
                    renderValue={(selected: string | unknown) => {
                      if (selected) {
                        return selected as string;
                      }
                      return (
                        <p
                          style={{
                            color: "#68758899",
                            fontWeight: "500",
                            marginLeft: "7px",
                          }}
                        >
                          Please Select
                        </p>
                      );
                    }}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        designation: (event as SelectChangeEvent<string>).target
                          .value,
                      })
                    }
                  >
                    {roleOptions.map((option, index) => (
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
                  <Button
                    variant="contained"
                    sx={{ width: "200px" }}
                    isLoading={loading}
                    onClick={handleSubmit}
                    disabled={
                      !(
                        form.firstName &&
                        form.lastName &&
                        form.email &&
                        form.phoneNo &&
                        form.designation
                      )
                    }
                  >
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
