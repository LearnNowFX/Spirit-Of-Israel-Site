import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "70px",
      background: theme.palette.header.main,
    },
    titleContainer: {
      margin: "0px 20px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: "24px",
      height: "100%",
      color: theme.palette.typography.light,
    },
  });
