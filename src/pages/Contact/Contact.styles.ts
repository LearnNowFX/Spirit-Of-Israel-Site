import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      padding: theme.padding(2),
    },
    title: {
      marginTop: theme.margin(20),
      marginBottom: theme.margin(20),
      fontSize: theme.typography.size.title,
      color: theme.palette.typography.dark,
    },
    subtitle: {
      fontSize: theme.typography.size.subtitle,
      color: theme.palette.typography.dark,
    },
  });
