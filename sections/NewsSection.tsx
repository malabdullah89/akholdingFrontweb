import React from "react";
import NewsBox from "@/components/NewsBox";
import { Box, Container, Stack } from "@mui/material";
import TitleText from "@/components/TitleText";

const news = [
  {
    imgName: "service-photo.jpg",
    title: "Lorem ipsum dolor sit amet",
    body: "We manage investment portfolios on behalf of their clients. They analyze market trends and make investment decisions with the aim of maximizing returns and managing risks.",
  },
  {
    imgName: "service-photo.jpg",
    title: "Lorem ipsum dolor sit amet",
    body: "We provide seed funding to help startups get off the ground. Our team carefully evaluates business plans, market potential, and management teams to identify high-potential startups.",
  },
  {
    imgName: "service-photo.jpg",
    title: "Lorem ipsum dolor sit amet",
    body: "closely monitor economic indicators, market trends, and geopolitical events to identify potential risks and opportunities.",
  },
];

const NewsSection = () => {
  return (
    <Box component="section" py={10} id="news">
      <Container
        component={Stack}
        spacing={"52px"}
        textAlign={"center"}
        display={"inline-flex"}
      >
        <TitleText title="Our News" fontWeight="normal" />
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "34px",
          }}
        >
          {news.map((ele) => (
            <NewsBox
              key={ele.body}
              imageName={ele.imgName}
              primaryText={ele.title}
              secondaryText={ele.body}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default NewsSection;
