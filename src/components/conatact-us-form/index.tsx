import { Box, Grid, Stack, SxProps, Typography } from "@mui/material";
import { Button, Socials, TextInput } from "../../components";
import { useState } from "react";
import Prop from "../../assets/demo-prop.png";

const mainContainer: SxProps = {
  borderRadius: "24px",
  p: { xs: 1, sm: 4, md: 8 },
  mb: 6,
};
const mainHeading: SxProps = {
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  position: "relative",
};
const subText: SxProps = {
  opacity: "0.8",
  color: "#3E3E59CC",
  fontSize: "16px",
  fontWeight: "400",
  ml: 1,
};
const propimg: SxProps = {
  position: "absolute",
  top: "70px",
  right: "40px",
  opacity: { xs: "0", lg: "1" },
  img: {
    width: { xs: "0px !important", lg: "153px !important" },
    height: { xs: "0px !important", lg: "77px !important" },
  },
};

const initialState: IDemo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  message: "",
};

const ContactUsForm = ({
  heading,
  text,
  button,
  bgColor,
}: {
  heading: string;
  text: string;
  button: string;
  bgColor?: string;
}) => {
  const [form, setForm] = useState<IDemo>(initialState);

  return (
    <Box
      sx={{ ...mainContainer, backgroundColor: bgColor ? bgColor : "#F8F8F8" }}
    >
      <Grid container justifyContent="center" py={8}>
        <Grid item xs={12} lg={6}>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row", lg: "column" }}
            alignItems={{ xs: "center", lg: "normal" }}
            justifyContent="space-evenly"
          >
            <Box sx={mainHeading}>
              <Box width={{ xs: "100%", lg: "500px" }} textAlign={"start"}>
                <Typography variant="h2">{heading}</Typography>
                <Typography variant="subtitle2" sx={subText} width={{ xs: "100%", lg: "270px" }}>
                  {text}
                </Typography>
              </Box>
              <Box sx={propimg}>
                <img src={Prop} alt="" />
              </Box>
            </Box>
            <Box mt={4}>
              <Socials />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="First Name"
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
                label="Email"
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
                label="Number"
                type="number"
                placeholder="Your Number"
                value={form.phoneNo}
                handleChangeValue={(val: string) =>
                  setForm({ ...form, phoneNo: val })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextInput
                label="Message"
                type="textarea"
                multiline
                maxRows={4}
                minRows={4}
                placeholder="Type your message here..."
                value={form.message}
                handleChangeValue={(val: string) =>
                  setForm({ ...form, message: val })
                }
                sx={{
                  ".MuiInputBase-formControl": {
                    p: 2,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{width:'170px'}}>{button}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsForm;
