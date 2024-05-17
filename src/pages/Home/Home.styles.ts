import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    landingContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden",
    },
    landingContent: {
      margin: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    landingImage: {
      position: "absolute",
      zIndex: -1,
      width: "100vw",
      minHeight: "100vh",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
      transform: "scale(1.1)",
      filter: "brightness(0.8) blur(3px)",
    },
    landingTitle: {
      textAlign: "center",
      color: theme.palette.typography.light,
      fontSize: "3.5rem",
      fontWeight: "bold",
      maxWidth: "800px",
      width: "80%",
      margin: "20px",
      textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    },
    landingSubtitle: {
      textAlign: "center",
      color: theme.palette.background.main,
      fontSize: "1.5rem",
      textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5px) brightness(0.7)",
      padding: "20px",
      maxWidth: "800px",
      width: "80%",
      borderRadius: "10px",
    },
  });
