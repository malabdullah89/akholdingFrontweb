import React from "react";
import NewsBox from "@/components/NewsBox";
import { Box, Container, Stack } from "@mui/material";
import TitleText from "@/components/TitleText";

const news = [
  {
    imgName: "Baims_Founders_Pic.jpeg",
    title: "Baims closes $4 million Series A round",
    body: `Baims, the leading ed-tech startup in Saudi Arabia, Kuwait, Jordan, Bahrain, and Turkey, has successfully raised $4 million in its Series A funding round led by AK Holding and the participation of Al-Wazzan Educational Group, Rasameel Investment House and other investors.

    Baims is an edtech startup operating in Saudi Arabia, Kuwait, Jordan, Bahrain, and Turkey. Its mission is to provide accessible and affordable education to university and high school students across MENA, regardless of their background or financial situation. The Baims platform allows top instructors to teach and students to study anytime and anywhere at a fraction of today's cost, making high-quality education accessible to everyone.`,
  },
  {
    imgName: "Bader-AlRasheed-Baims-Co-Founder-left-Yousef-AlHusaini-Baims-Co-Founders-Middle-left-Hossam-Taher-Orcas-Co-Founder-middle-right-Amira-El-Gharib-Orcas-Co-Founder-right-780x470.jpeg",
    title: "Edtech startup Orcas has sold to Kuwait’s Baims",
    body: `Kuwaiti edtech company Baims has acquired 100% of Egyptian edtech startupOrcas, the companies announced in a statement (pdf) yesterday without disclosing the value of the agreement. The acquisition, which Orcas CEO and co-founder Hossam Taher (My Morning Routine) — now the consolidated company’s chief strategy officer — described as a “big transaction,” provides Orcas shareholders with significant upside potential, Taher told Enterprise. We had a chat with Taher to break down the strategic acquisition, the consolidated company’s future plans, and the landscape for the edtech sector in the region.`,
  },
  // {
  //   imgName: "service-photo.jpg",
  //   title: "Lorem ipsum dolor sit amet",
  //   body: "closely monitor economic indicators, market trends, and geopolitical events to identify potential risks and opportunities.",
  // },
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
