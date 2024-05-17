import React from "react";
import { useStyles } from "./header.style";
import { Typography } from "@mui/material";
import { useDeviceContext } from "../../context/device.context";
import MobileNavigator from "../mobile-navigator/mobile-navigator";
import DesktopNavigator from "../desktop-navigator/desktop-navigator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { isMobile } = useDeviceContext();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer} onClick={goHome}>
        <Typography style={styles.title}>Spirit Of Israel</Typography>
      </div>
      {isMobile ? <MobileNavigator /> : <DesktopNavigator />}
    </div>
  );
};

export default React.memo(Header);
