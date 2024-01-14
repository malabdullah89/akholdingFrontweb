import * as React from "react";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface PortfolioCardProps {
  // Define your props here
  cardName: string;
  alt: string;
  type?: string;
  width: number;
  height: number;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  cardName,
  alt,
  width,
  height,
  type = "big",
  description,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        position: "relative",
        height: { xs: "349px", md: type === "big" ? "349px" : "218.04px" },
        borderRadius: "16px",
        overflow: "hidden",
        backgroundImage: isHovered
          ? `url(/assets/card-background-white.png)`
          : `url(/assets/card-background.jpg)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {isHovered ? (
        <Stack
          spacing={type === "big" ? "25px" : "10px"}
          justifyContent={"center"}
          alignItems={"center"}
          p={type === "big" ? 5 : 1.5}
        >
          <Image
            src={`/assets/${cardName}-flip.svg`}
            alt={alt}
            width={cardName === "card10" ? 75 : width}
            height={cardName === "card10" ? 80.51 : height}
          />

          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "16px", md: type === "big" ? "18px" : "14px" },
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "normal",
            }}
          >
            {description}
          </Typography>
        </Stack>
      ) : (
        <Image
          src={`/assets/${cardName}.svg`}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </Box>
  );
};

export default PortfolioCard;
