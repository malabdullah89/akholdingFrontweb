import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: { xs: "60dvh", md: `120dvh` },
      }}
    >
      <Box
        sx={{
          top: { xs: "280px", md: "160px" },
          background: "url(/assets/background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
        zIndex={0}
      ></Box>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          pt: "100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack>
          <Stack
            textAlign={"center"}
            spacing={"10px"}
            justifyContent={"center"}
            width={{ xs: 300, md: "auto" }}
          >
            <Typography
              letterSpacing={0}
              variant="h3"
              fontWeight="600"
              fontSize={{ xs: "22px", md: "56px" }}
              textTransform={"uppercase"}
            >
              AK HOLDING COMPANY
            </Typography>

            <Box maxWidth={"657px"}>
              <Typography
                fontWeight="500"
                fontSize={{ xs: "16px", md: "25px" }}
                textTransform={"uppercase"}
                variant="body1"
              >
                INVESTING IN VISIONARIES & CREATING OPPORTUNITIES
              </Typography>
            </Box>

            <Box mt={"30px !important"}>
              <Button
                sx={{
                  bgcolor: "#000",
                  borderRadius: "13px",
                  width: { xs: "243px", md: "330px" },
                  height: { xs: "45px", md: "62px" },
                  padding: "20px 100px",
                  ":hover": {
                    bgcolor: "#000",
                  },
                }}
              >
                <Typography
                  color={"#fff"}
                  whiteSpace={"nowrap"}
                  fontSize={{ xs: "15px", md: "20px" }}
                  fontWeight={"500"}
                  lineHeight={{ xs: "7px", md: "24px" }}
                  letterSpacing={{ xs: "1px", md: "1.25px" }}
                >
                  Submit Your pitch Now
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
