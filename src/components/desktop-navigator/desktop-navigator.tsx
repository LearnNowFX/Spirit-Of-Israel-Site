import React, { useMemo } from "react";
import { Button } from "@mui/material";
import { useStyles } from "./desktop-navigator.style";
import { PAGES } from "src/constants/pages.constants";
import { useLocation, useNavigate } from "react-router-dom";

const DesktopNavigator = () => {
  const styles = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(`/${page}`);
  };

  const activePage = useMemo(() => {
    return PAGES.find((page) => location.pathname.includes(page)) || PAGES[0];
  }, [location]);

  return (
    <div style={styles.menu}>
      {PAGES.map((page) => {
        return (
          <Button
            key={page}
            onClick={() => goToPage(page)}
            sx={styles.button({ isActive: page === activePage })}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default React.memo(DesktopNavigator);
