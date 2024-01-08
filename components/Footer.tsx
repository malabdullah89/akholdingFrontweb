import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import Logo from "./Logo";
import { navItems } from "./Header";

import theme from "@/styles/theme";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";

const Footer = () => {
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <Box component="footer" bgcolor={"#000"} color={"white"}>
      <Container component={Stack}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          p={"80px 0 40px"}
          spacing={2}
        >
          <Logo color="white" />

          <Box component="nav">
            <List
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: "32px",
              }}
            >
              {navItems.map((item) => (
                <ListItem
                  disablePadding
                  key={item.label}
                  sx={{ justifyContent: "center" }}
                >
                  <ScrollLink
                    style={{
                      textTransform: "capitalize",
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                      color: "#fff",
                      fontWeight: 400,
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

          <Stack flexDirection={"row"} gap={"12px"} alignItems={"center"}>
            <Image
              width={24}
              height={24}
              src={"/assets/facebook.svg"}
              alt="facebook"
            />
            <Image
              width={24}
              height={24}
              src={"/assets/instagram.svg"}
              alt="instagram"
            />
            <Image
              width={24}
              height={24}
              src={"/assets/twitter.svg"}
              alt="twitter"
            />
            <Image
              width={24}
              height={24}
              src={"/assets/linkedin.svg"}
              alt="linkedin"
            />
          </Stack>
        </Stack>

        <Divider sx={{ bgcolor: "#fff", opacity: "12%" }} />
        <Typography
          sx={{
            textAlign: "center",
            py: 2,
            display: { xs: "block", md: "none" },
          }}
        >
          ©{getCurrentYear()}, All right reserved.
        </Typography>
        <Stack
          display={{ xs: "none", md: "flex" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={"31px"}
          p={"40px 0"}
        >
          <Typography>©{getCurrentYear()}, All right reserved.</Typography>
          <List sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <ListItem disablePadding>
              <ScrollLink
                style={{
                  textTransform: "capitalize",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  color: "#fff",
                  fontWeight: 400,
                }}
                href={`#`}
                to={`/`}
                smooth={true}
                duration={500}
              >
                Privacy Policy
              </ScrollLink>
            </ListItem>
            <ListItem disablePadding>
              <ScrollLink
                style={{
                  textTransform: "capitalize",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  color: "#fff",
                  fontWeight: 400,
                }}
                href={`#`}
                to={`/`}
                smooth={true}
                duration={500}
              >
                Terms of Service
              </ScrollLink>
            </ListItem>
            <ListItem disablePadding>
              <ScrollLink
                style={{
                  textTransform: "capitalize",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  color: "#fff",
                  fontWeight: 400,
                }}
                href={`#`}
                to={`/`}
                smooth={true}
                duration={500}
              >
                Cookies Settings
              </ScrollLink>
            </ListItem>
          </List>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
