import { Menu } from "@mui/icons-material";
import React, { useMemo, useState } from "react";
import { useStyles } from "./mobile-navigator.style";
import { PAGES } from "src/constants/pages.constants";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, IconButton, Typography } from "@mui/material";

const MobileNavigator = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const activePage = useMemo(() => {
    return PAGES.find(page => location.pathname.includes(page)) || null;
  }, [location]);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const goToPage = (page: string) => {
    navigate(`/${page}`);
    closeMenu();
  };

  return (
    <>
      <IconButton style={styles.hamburgerContainer} onClick={openMenu}>
        <Menu style={styles.hamburger} />
      </IconButton>
      <Drawer
        open={menuOpen}
        onClose={closeMenu}
        anchor="bottom"
        PaperProps={{ style: styles.drawer }}>
        {PAGES.map(page => {
          return (
            <div key={page} style={styles.menuItem}>
              <Typography
                onClick={() => goToPage(page)}
                style={styles.menuItemText({ isActive: page === activePage })}>
                {page}
              </Typography>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};

export default React.memo(MobileNavigator);
