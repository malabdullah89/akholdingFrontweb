import * as React from "react";

import Logo from "./Logo";
import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";

const drawerWidth = 240;
export const headerHeight = 90;

export const navItems = [
  { label: "About Us", path: "about" },
  { label: "Our Portfolio", path: "portfolio" },
  { label: "Our News", path: "news" },
  { label: "Investment portfolio", path: "investment" },
  { label: "Contact Us", path: "contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState("about");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ mt: 5, mb: 1 }}>
        <Logo width={200} height={30.47} />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            disablePadding
            key={item.label}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ScrollLink
              href={`#${item.path}`}
              to={`${item.path}`}
              smooth={true}
              duration={500}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemButton>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Container component="header" id="home">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height={headerHeight}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Image
              src="/assets/menu-icon.svg"
              alt="menu icon"
              sizes="140px"
              width={28}
              height={24.5}
            />
          </Box>

          <Logo />

          <Box component="nav" display={{ xs: "none", md: "block" }}>
            <List sx={{ gap: "25px", display: "flex" }}>
              {navItems.map((item) => (
                <ListItem disablePadding key={item.label}>
                  <ScrollLink
                    onClick={() => setActive(item.path)}
                    style={{
                      textTransform: "capitalize",
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                      color: item.path === active ? "#000" : "#656565",
                      fontWeight: item.path === active ? 600 : 400,
                    }}
                    href={`#${item.path}`}
                    to={`${item.path}`}
                    smooth={true}
                    duration={500}
                  >
                    {item.label}
                  </ScrollLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Container>

      {/* Mobile */}
      <nav>
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
