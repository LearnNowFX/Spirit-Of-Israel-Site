import React from "react";
import { useStyles } from "./footer.style";
import { Typography } from "@mui/material";
import FooterNavigator from "../footer-navigator/footer-navigator";

const Footer = () => {
  const styles = useStyles();

  const date = new Date();

  const openPrivacyPolicy = () => {
    window.open("https://youronlinechoices.eu/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <FooterNavigator />
        <Typography
          style={styles.text}
        >{`© 2024 - ${date.getFullYear()} Spirit Of Israel`}</Typography>
        <Typography sx={styles.policy} onClick={openPrivacyPolicy}>
          Privacy Statement & Cookies Policy
        </Typography>
      </div>
    </div>
  );
};

export default React.memo(Footer);
