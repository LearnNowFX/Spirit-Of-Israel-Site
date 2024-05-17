import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      minWidth: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingBottom: "100px",
    },
    title: {
      fontSize: "35px",
      fontWeight: 400,
      color: theme.palette.typography.dark,
      margin: "50px 0",
    },
    gridContainer: {
      width: "100%",
      height: "100%",
    },
    gridItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });
