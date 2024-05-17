import { theme } from "./theme";
import { createTheme } from "@mui/material";

export const MUI_OVERRIDES = createTheme({
  typography: {
    fontFamily: theme.typography.font,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: "color 0.2s",
          color: theme.palette.typography.light,
          textTransform: "uppercase",
          "&:hover": {
            color: theme.palette.typography.hover,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.input.main,
          borderRadius: "5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.typography.light,
          fontWeight: 400,
          background: theme.palette.button.main,
          margin: "0 5px",
          borderRadius: "15px",
          fontSize: "18px",
          "&:hover": {
            color: theme.palette.typography.hover,
          },
        },
      },
    },
  },
});
