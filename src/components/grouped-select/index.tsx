import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";
import { Typography } from "@mui/material";

interface GroupedSelectProps extends SelectProps {
  label?: string;
  whiteLabel?: boolean;
  required?: boolean;
  children: React.ReactNode;
}

const GroupedSelect: React.FC<GroupedSelectProps> = ({
  label,
  whiteLabel,
  required,
  children,
  ...rest
}) => {
  return (
    <>
      {label && (
        <Typography
          sx={{
            m: 0.5,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: whiteLabel ? "white" : "black",
            mb: "4px",
          }}
          variant="subtitle2"
        >
          {label} {required && <Typography color={"error"}>*</Typography>}
        </Typography>
      )}
      <FormControl fullWidth>
        <Select defaultValue="" id="grouped-select" {...rest}>
          {children}
        </Select>
      </FormControl>
    </>
  );
};

export default GroupedSelect;
