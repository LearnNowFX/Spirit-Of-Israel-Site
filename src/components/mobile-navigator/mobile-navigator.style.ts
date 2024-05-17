import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    hamburger: {
      fontSize: "35px",
      color: theme.palette.icon.main,
    },
    hamburgerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
    },
    drawer: {
      border: `3px solid ${theme.palette.border.main}`,
      borderTopLeftRadius: "25px",
      borderTopRightRadius: "25px",
      width: "100%",
      minHeight: "200px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.header.main,
    },
    menuItem: {
      width: "100%",
      textAlign: "center",
      fontSize: "20px",
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: `1px solid ${theme.palette.background.main}`,
    },
    menuItemText: ({ isActive }) => ({
      color: isActive
        ? theme.palette.typography.faded
        : theme.palette.typography.light,
    }),
  });
