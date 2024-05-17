import React, { useMemo } from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./footer-navigator.style";
import { PAGES } from "src/constants/pages.constants";
import { useLocation, useNavigate } from "react-router-dom";

const FooterNavigator = () => {
  const styles = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(`/${page}`);
  };

  const pagesToDisplay = useMemo(() => {
    return PAGES.filter(page => !location.pathname.includes(page));
  }, [location]);

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>Jump To:</Typography>
      {pagesToDisplay.map(page => {
        return (
          <Typography key={page} sx={styles.link} onClick={() => goToPage(page)}>
            {page}
          </Typography>
        );
      })}
    </div>
  );
};

export default React.memo(FooterNavigator);
