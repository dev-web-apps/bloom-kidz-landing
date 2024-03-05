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
import { useEffect, useState } from "react";
import { getAllPackages, startFreeTrial } from "../../services/api.services";
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

const initialState: ISignUp = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  nurseryName: "",
  packageId: "",
};

const TrailForm = () => {
  const alert = useAlert();
  const [form, setForm] = useState<ISignUp>(initialState);
  const [packageList, setPackageList] = useState<IBillingData[] | []>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    if (!validateEmail(form.email)) {
      alert.error("Wrong email format");
      setLoading(false);
      return;
    }
    startFreeTrial(form)
      .then((response) => {
        alert.success("Free Trial Signed up successfully");
        console.log(response);
        setLoading(false);
        setForm(initialState);
      })
      .catch((error) => {
        console.log(error);
        alert.error(error.response.data.error || "An Error Occured");
        setLoading(false);
      });
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
                    displayEmpty
                    whiteLabel
                    label="Subscription Type"
                    value={form.packageId}
                    renderValue={(selected: string | unknown) => {
                      console.log(selected);
                      if (selected) {
                        const selectedLabel =
                          packageList.find((item) => item.id === selected)
                            ?.title || "Please Select";
                        return selectedLabel;
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
                        packageId: (event as SelectChangeEvent<string>).target
                          .value,
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
                      Monthly
                    </ListSubheader>
                    {packageList
                      .filter(
                        (packageItem) => packageItem.billing === "MONTHLY"
                      )
                      .map((item) => (
                        <MenuItem
                          key={item.id}
                          value={item.id}
                          sx={{ fontWeight: "600" }}
                        >
                          {item.title}
                        </MenuItem>
                      ))}

                    <ListSubheader
                      sx={{
                        backgroundColor: "#34A6B140",
                        color: "black",
                        fontSize: "12px !important",
                      }}
                    >
                      Yearly
                    </ListSubheader>
                    {packageList
                      .filter((packageItem) => packageItem.billing === "YEARLY")
                      .map((item) => (
                        <MenuItem
                          key={item.id}
                          value={item.id}
                          sx={{ fontWeight: "600" }}
                        >
                          {item.title}
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
                        form.packageId &&
                        form.nurseryName
                      )
                    }
                  >
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

export default TrailForm;
