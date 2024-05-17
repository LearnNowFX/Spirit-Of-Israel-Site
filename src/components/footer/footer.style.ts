import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      borderTop: `1px solid ${theme.palette.border.main}`,
      marginTop: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      flexDirection: "row",
      maxWidth: "100vw",
      minHeight: "100px",
      padding: "10px",
      backgroundColor: theme.palette.footer.main,
    },
    logoContainer: {
      padding: "10px",
      width: "min(350px, 100vw)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      width: "min(350px, 100vw)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "16px",
      fontWeight: 300,
      color: theme.palette.typography.light,
    },
    policy: {
      fontSize: "14px",
      fontWeight: 200,
      color: theme.palette.typography.light,
    },
    socialContainer: {
      padding: "15px",
      width: "min(300px, 100vw)",
    },
  });
