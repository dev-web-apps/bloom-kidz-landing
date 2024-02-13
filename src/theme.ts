import { createTheme } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
        },
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
        outlinedPrimary: {
          borderColor: "#111827",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#899DB7",
          },
        },
        root: {
          fontSize: "14px",
          fontWeight: 500,
          color: "#111827",
          lineHeight: "160%",
          paddingLeft: "6px",
        },
        notchedOutline: {
          borderColor: "#E9EAEC",
          borderRadius: "10px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          ".MuiTableCell-root": {
            color: "#687588",
          },
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "initial",
            color: "#687588",
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            borderBottom: "1px solid #f1f2f4",
            color: "#111827",
            fontSize: "12px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#111827",
          fontSize: 20,
          marginRight: "8px",
        },
      },
      defaultProps: {
        IconComponent: FiChevronDown,
      },
    },
  },

  palette: {
    neutral: {
      100: "#FFFFFF",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "#34A6B1",
      disabledBackground: "#F1F2F4",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    divider: "#f1f2f4",
    primary: {
      main: "#111827",
      light: "#292f3d",
      dark: "#0f1623",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#34a6b1",
      light: "#48afb9",
      dark: "#2f959f",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#0caf60",
      light: "#24b770",
      dark: "#0b9e56",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2f78ee",
      light: "#4486f0",
      dark: "#2a6cd6",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#ffde65",
      light: "#ffe174",
      dark: "#e6c85b",
      contrastText: "#AA8500",
    },
    error: {
      main: "#e03137",
      light: "#e3464b",
      dark: "#ca2c32",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#687588",
      disabled: "#899DB7",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  typography: {
    button: {
      fontWeight: 700,
    },
    fontFamily: `"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
			 Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: "130%",
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: "130%",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: "130%",
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: "130%",
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "130%",
    },
    h6: {
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: "130%",
    },
  },
});
