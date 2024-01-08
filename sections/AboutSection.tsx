import React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import TitleText from "@/components/TitleText";

const AboutSection = () => {
  return (
    <Box component="section" py={10} id="about">
      <Container
        component={Stack}
        spacing={"52px"}
        textAlign={"center"}
        display={"inline-flex"}
      >
        <TitleText title="ABOUT US" />
        <Typography
          sx={{
            textAlign: "justify",
            textAlignLast: "center",
            fontSize: { xs: "18px", md: "20px" },
            fontStyle: "normal",
            fontWeight: "275",
            lineHeight: "192.75%" /* 38.55px */,
            textTransform: "capitalize",
          }}
        >
          Welcome to AK Holding, a privately held company established in 2023.
          With a forward-thinking plan, we are dedicated to investing and
          nurturing exceptional startups, envisioning their gradual ascent to
          success and profitability. Moreover, we focus on acquiring shares, be
          they minority or controlling stakes, in well-established companies
          that have already made a mark in their perspective markets. At AK
          Holding, our strategic business approach is founded on an unwavering
          belief in identifying visionary entrepreneurs, more like winners, who
          possess the drive, dedication, and ambition to propel their businesses
          forward. Guided by this principle, we actively pursue diversification
          in our investment portfolio, carefully selecting a distinctive range
          of investments in various sectors to foster further growth and
          expansion for the future. most importantly, our commitment extends
          beyond financial gains. We aspire to play an active role in
          stimulating our local economy by holding stakes in companies that
          provide key products and services to better our community. By doing
          so, we actively participate in a collective advancement of our MENA
          region. It is our humble hope to always leave an impact, primarily in
          making ethics and honestly the stepping stone of our every deal.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
