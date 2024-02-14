import {
  IconButton,
  InputAdornment,
  InputProps as MuiInputProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EyeOffIcon from "../../assets/eye-off.png";
import ClockIcon from "../../assets/clock.png";

type TInputProps = {
  label?: string;
  required?: boolean;
  acceptDecimal?: boolean;
  AddClockIcon?: boolean;
  whiteLabel?: boolean;
  type: string;
  handleChangeValue: (val: string) => void;
  value: string | number | null;
  InputProps?: MuiInputProps;
} & TextFieldProps;

export default function TextInput(props: TInputProps): ReactNode {
  const { label, type, required, handleChangeValue, value,whiteLabel, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: { target: { value: string } }) => {
    handleChangeValue(e.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.which || event.keyCode;

    if (props.acceptDecimal) {
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        event.preventDefault();
      }
    } else {
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    }
  };
  return (
    <>
      {label && (
        <Typography
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: whiteLabel ? "white" : "black",
          }}
          variant="subtitle2"
        >
          {label} {required && <Typography color={"error"}>*</Typography>}
        </Typography>
      )}
      {type === "password" && (
        <TextField
          {...rest}
          type={showPassword ? "text" : "password"}
          fullWidth
          value={value}
          onChange={handleChange}
          required={required}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  <img src={EyeOffIcon} alt="" width="20px" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            ".MuiInputBase-formControl": {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
      )}

      {type === "number" && (
        <TextField
          {...rest}
          type="number"
          fullWidth
          value={value}
          onChange={handleChange}
          required={required}
          onKeyPress={handleKeyPress}
        />
      )}

      {type === "email" && (
        <TextField
          {...rest}
          type={"email"}
          fullWidth
          value={value}
          onChange={handleChange}
          required={required}
        />
      )}

      {type !== "email" && type !== "password" && type !== "number" && (
        <TextField
          {...rest}
          type={type}
          fullWidth
          value={value}
          InputProps={{
            ...props.InputProps,
            endAdornment: props.AddClockIcon ? (
              <InputAdornment position="end">
                <img src={ClockIcon} alt="" width="20px" />
              </InputAdornment>
            ) : null,
          }}
          onChange={handleChange}
          required={required}
        />
      )}
    </>
  );
}
