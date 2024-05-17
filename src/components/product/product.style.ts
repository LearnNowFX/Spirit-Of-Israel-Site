import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      position: "inherit",
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "10px",
      aspectRatio: 16 / 9,
    },
    textContainer: {
      marginTop: "10px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    title: {
      fontSize: "16px",
      fontWeight: 400,
      width: "50%",
      textAlign: "left",
      color: theme.palette.typography.dark,
    },
    info: {
      marginTop: "10px",
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    action: {
      width: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
      borderRadius: "5px",
      backgroundColor: theme.palette.button.main,
      color: theme.palette.typography.dark,
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.typography.hover,
        backgroundColor: theme.palette.header.main,
      },
    },
    cost: {
      fontSize: "16px",
      fontWeight: 400,
    },
    selectedImage: {
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "1000",
      transition: "all 0.5s",
    },
    popup: {
      backgroundColor: "black",
    },
  });
