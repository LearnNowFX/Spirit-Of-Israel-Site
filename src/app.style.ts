import { createStyles } from "./styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      minHeight: "100vh",
      maxWidth: "100vw",
      overflowX: "hidden",
      flexDirection: "column",
      alignContent: "space-between",
    },
  });
