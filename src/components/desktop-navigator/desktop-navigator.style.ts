import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    menu: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      minWidth: "300px",
      width: "100%",
      maxWidth: "600px",
      margin: "10px 30px",
    },
    button: ({ isActive }) => ({
      width: "150px",
      height: "40px",
      color: isActive
        ? theme.palette.typography.light
        : theme.palette.typography.light,
      background: theme.palette.button.main,
      margin: "0 5px",
      borderRadius: "10px",
      fontSize: "18px",
      "&:hover": {
        color: theme.palette.typography.hover,
      },
    }),
  });
