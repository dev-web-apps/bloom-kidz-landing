import { Button as MuiButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Button({
  children,
  isLoading,
  loadcolor,
  sx,
  ...rest
}: IButton) {
  return (
    <>
      <MuiButton
        startIcon={
          isLoading ? (
            <CircularProgress
              size={20}
              sx={{ color: loadcolor ? `${loadcolor}` : "white" }}
            />
          ) : (
            <></>
          )
        }
        sx={{ p: { xs: "10px", sm: "13px 35px" }, borderRadius: "6px", ...sx }}
        {...rest}
      >
        {children}
      </MuiButton>
    </>
  );
}
