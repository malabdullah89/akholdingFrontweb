import React from "react";

import { Box, Container, Stack } from "@mui/material";

import PortfolioCard from "@/components/PortfolioCard";

import TitleText from "@/components/TitleText";

const PortfolioSection = () => {
  return (
    <Box component="section" py={10} id="portfolio">
      <Container
        component={Stack}
        spacing={"52px"}
        textAlign={"center"}
        display={"inline-flex"}
      >
        <TitleText title="OUR PORTFOLIO" />

        <Stack spacing={"22px"}>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "22px",
            }}
          >
            <PortfolioCard
              description="Artisan diffusers and candles shop based in Kuwait and founded by a group of individuals passionate about art, design, and home."
              cardName="card1"
              alt="card1"
              width={274}
              height={87}
            />
            <PortfolioCard
              description="We specialize in health products, such as honey, olive oil, sesame oil, pomegranate molasses, and sheep ghee."
              cardName="card2"
              alt="card2"
              width={129}
              height={198}
            />
            <PortfolioCard
              description="In one place, you will explore high school and university classes that will match your needs. Delivered by your favorite teachers."
              cardName="card3"
              alt="card3"
              width={245}
              height={114}
            />
            <PortfolioCard
              description="Let’s get connected! Share your social platforms faster and easier with Reach."
              cardName="card4"
              alt="card4"
              width={214}
              height={76}
            />
            <PortfolioCard
              description="Ghaseel is the first marketplace for car wash services in Kuwait, launched in 2015"
              cardName="card5"
              alt="card5"
              width={120}
              height={165}
            />

            <PortfolioCard
              description=""
              cardName="card6"
              alt="card6"
              width={225}
              height={43}
            />
          </Stack>

          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(auto-fill, minmax(300px, 1fr))",
                md: "repeat(auto-fill, minmax(200px, 1fr))",
              },
              gap: { xs: "22px", md: "10px" },
            }}
          >
            <PortfolioCard
              description=""
              cardName="card7"
              alt="card7"
              width={80}
              height={74}
              type="small"
            />
            <PortfolioCard
              description=""
              cardName="card8"
              alt="card8"
              width={93}
              height={105}
              type="small"
            />
            <PortfolioCard
              description=""
              cardName="card9"
              alt="card9"
              width={120}
              height={114.98}
              type="small"
            />
            <PortfolioCard
              description=""
              cardName="card10"
              alt="card10"
              width={209}
              height={216}
              type="small"
            />
            <PortfolioCard
              description=""
              cardName="card11"
              alt="card11"
              width={200}
              height={84}
              type="small"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
