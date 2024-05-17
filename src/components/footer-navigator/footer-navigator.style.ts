import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      margin: "10px 0",
      justifyContent: "center",
    },
    title: {
      fontWeight: 500,
      margin: "0 5px",
      color: theme.palette.typography.light,
    },
    link: {
      margin: "0 5px",
      fontWeight: 300,
      fontSize: "14px",
      textTransform: "uppercase",
      color: theme.palette.typography.light,
    },
  });
