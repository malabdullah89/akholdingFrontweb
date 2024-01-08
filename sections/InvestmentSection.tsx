import TitleText from "@/components/TitleText";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const InvestmentSection = () => {
  return (
    <Box component="section" py={10} id="investment">
      <Container component={Stack}>
        <Stack spacing={"23px"} textAlign="center">
          <TitleText title="INVESTMENT PORTFOLIO" fontWeight="300" />
          <Typography
            sx={{
              textAlign: "justify",
              textAlignLast: "center",
              fontSize: { xs: "18px", md: "20px" },
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "224%",
              textTransform: "capitalize",
            }}
          >
            Our portfolio of companies have all been selected based on
            successful ideas or outcomes. Either successful Entrepreneurs who we
            believe in or in business sectors we see potential growth in or
            financial numbers that reflect great future possibilities. AK
            HOLDING owns equity shares in companies that shows remarkable
            scaling or profibility, ones that are making a huge impact in their
            own markets. with an asset management class growing every month, we
            hope to accumulate one of a kind portfolio that invests in people
            who have a clear vision of success and demonstrate the undestanding
            and work ethics to reach extraorindary heights.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default InvestmentSection;
