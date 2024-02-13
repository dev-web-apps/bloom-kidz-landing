import {
  Box,
  Container,
  Grid,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { Button, Socials, TextInput } from "../../components";
import { useState } from "react";
import Prop from "../../assets/demo-prop.png";

const mainContainer: SxProps = {
  borderRadius: "24px",
  backgroundColor: "#F8F8F8",
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

const Demo = () => {
  const [form, setForm] = useState<IDemo>(initialState);
  return (
    <Container maxWidth="lg">
      <Box sx={mainContainer}>
        <Grid container justifyContent="center" py={8}>
          <Grid item xs={12} lg={6}>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row", lg: "column" }}
              alignItems={{ xs: "center", lg: "normal" }}
              justifyContent="space-around"
            >
              <Box sx={mainHeading}>
                <Typography variant="h2">Get a free demo</Typography>
                <Typography sx={subText}>
                  No credit cards. No commitment.
                </Typography>
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
                  placeholder="Input first name"
                  value={form.firstName}
                  handleChangeValue={(val: string) =>
                    setForm({ ...form, firstName: val })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  label="First Name"
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
                <Button variant="contained">Request Demo</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Demo;
