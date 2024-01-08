import React from "react";
import TitleText from "@/components/TitleText";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import LeafletMap from "@/components/LeafletMap";

const ContactUsSection = () => {
  return (
    <Box component="section" py={10} id="contact">
      <Stack
        component={Stack}
        spacing={"52px"}
        textAlign={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <TitleText title="Contact Us" fontWeight="300" />

        <Box height={"550px"} overflow={"hidden"} border={"2px solid #eee"}>
          <LeafletMap />
        </Box>

        <Stack
          px={{ xs: 0, md: 5 }}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"30px"}
        >
          <Stack gap={"17px"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                width={53}
                height={33}
                position={"relative"}
                display={"flex"}
                alignItems={"start"}
              >
                <Image src={"/assets/mail.svg"} alt="mail" fill />
              </Box>
            </Box>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "18px", md: "20px" },
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "1.25px",
                textTransform: "capitalize",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "14px", md: "18px" },
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "24px",
                letterSpacing: "1.25px",
                textTransform: "capitalize",
              }}
            >
              info@akholding.com
            </Typography>
          </Stack>

          <Stack gap={"17px"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                width={35}
                height={50}
                position={"relative"}
                display={"flex"}
                alignItems={"start"}
              >
                <Image src={"/assets/address.svg"} alt="address" fill />
              </Box>
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "18px", md: "20px" },
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "1.25px",
                textTransform: "capitalize",
              }}
            >
              Office Address
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "14px", md: "18px" },
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "24px",
                letterSpacing: "1.25px",
                textTransform: "capitalize",
                width: { xs: 300, md: "auto" },
              }}
            >
              Tameem Tower, Sharq block 6, 20th floor, Kuwait
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactUsSection;
