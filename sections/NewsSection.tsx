import React from "react";
import NewsBox from "@/components/NewsBox";
import { Box, Container, Stack } from "@mui/material";
import TitleText from "@/components/TitleText";
import NewsModal from "./NewsModal";

const news = [
  {
    imgName: "Baims_Founders_Pic.jpeg",
    title: "Baims closes $4 million Series A round",
    body: `Baims, the leading ed-tech startup in Saudi Arabia, Kuwait, Jordan, Bahrain, and Turkey, has successfully raised $4 million in its Series A funding round led by AK Holding and the participation of Al-Wazzan Educational Group, Rasameel Investment House and other investors.
    Baims is an edtech startup operating in Saudi Arabia, Kuwait, Jordan, Bahrain, and Turkey. Its mission is to provide accessible and affordable education to university and high school students across MENA, regardless of their background or financial situation. The Baims platform allows top instructors to teach and students to study anytime and anywhere at a fraction of today's cost, making high-quality education accessible to everyone.`,

    fullText: `Baims, the leading ed-tech startup in Saudi Arabia, Kuwait, Jordan, Bahrain, and Turkey, has successfully raised $4 million in its Series A funding round led by AK Holding and the participation of Al-Wazzan Educational Group, Rasameel Investment House and other investors.
    Baims is an edtech startup operating in Saudi Arabia, Kuwait, Jordan, Bahrain, and Turkey. Its mission is to provide accessible and affordable education to university and high school students across MENA, regardless of their background or financial situation. The Baims platform allows top instructors to teach and students to study anytime and anywhere at a fraction of today's cost, making high-quality education accessible to everyone.`,
  },
  {
    imgName:
      "Bader-AlRasheed-Baims-Co-Founder-left-Yousef-AlHusaini-Baims-Co-Founders-Middle-left-Hossam-Taher-Orcas-Co-Founder-middle-right-Amira-El-Gharib-Orcas-Co-Founder-right-780x470.jpeg",
    title: "Edtech startup Orcas has sold to Kuwait’s Baims",
    body: `Kuwaiti edtech company Baims has acquired 100% of Egyptian edtech startupOrcas, the companies announced in a statement (pdf) yesterday without disclosing the value of the agreement. The acquisition, which Orcas CEO and co-founder Hossam Taher (My Morning Routine) — now the consolidated company’s chief strategy officer — described as a “big transaction,” provides Orcas shareholders with significant upside potential, Taher told Enterprise. We had a chat with Taher to break down the strategic acquisition, the consolidated company’s future plans, and the landscape for the edtech sector in the region.`,
    fullText:
      "Kuwaiti edtech company Baims has acquired 100% of Egyptian edtech startupOrcas, the companies announced in a statement (pdf) yesterday without disclosing the value of the agreement. The acquisition, which Orcas CEO and co-founder Hossam Taher (My Morning Routine) — now the consolidated company’s chief strategy officer — described as a “big transaction,” provides Orcas shareholders with significant upside potential, Taher told Enterprise. We had a chat with Taher to break down the strategic acquisition, the consolidated company’s future plans, and the landscape for the edtech sector in the region.",
  },
  {
    imgName: "ak-furdtk.png",
    title: "AK HOLDING purchases large shares in FURDTK",
    body: `AK HOLDING announces its acquisition of a large percentage of the “FURDTK” company, which is famous for selling vegetables and fruits and delivering them to homes in the State of Kuwait, which has expanded over the past years to become one of the most high quality and innovative companies in the local market through its distinguished services. We collect fruits and vegetables through high-quality baskets and deliver them to the consumer due to the increasing demand for eating fruits and vegetables. The CEO, Mr. Abdul Latif Khalid Al-Thuwaini, said about AK HOLDING Company, “FURDTK is one of the distinguished and fastest growing`,
    fullText: `AK HOLDING announces its acquisition of a large percentage of the “FURDTK” company, which is famous for selling vegetables and fruits and delivering them to homes in the State of Kuwait, which has expanded over the past years to become one of the most high quality and innovative companies in the local market through its distinguished services. We collect fruits and vegetables through high-quality baskets and deliver them to the consumer due to the increasing demand for eating fruits and vegetables. The CEO, Mr. Abdul Latif Khalid Al-Thuwaini, said about AK HOLDING Company, “FURDTK is one of the distinguished and fastest growing companies in the Kuwaiti market in the fruit and vegetable sector and retail markets, and we are proud of the achievements achieved by the honorable brother Muhammad Al-Hajraf in establishing and leading Fardtak Company. We aim to Today, we are expanding by opening stores in strategic areas in Kuwait and reaching a larger segment, so that every Kuwaiti can be proud of the national companies that have worked hard over the years to provide the best products and services with the highest quality and competitive prices, with an interest in perfect delivery service. Your premise has become part of Kuwait’s prosperous future. We are proud to be part of carrying this mission to Kuwait and satisfying all our customers for many years."`
  },
];

const NewsSection = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<any>("");

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
              onClick={() => {
                setOpen(!open);
                setSelectedItem(ele);
              }}
              key={ele.body}
              imageName={ele.imgName}
              primaryText={ele.title}
              secondaryText={ele.body}
            />
          ))}
        </Stack>
      </Container>

      <NewsModal open={open} setOpen={setOpen} {...selectedItem} />
    </Box>
  );
};

export default NewsSection;
