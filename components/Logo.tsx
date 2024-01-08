import React from "react";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Box } from "@mui/material";

interface LogoProps {
  width?: number;
  height?: number;
  justifyContent?: "start" | "end" | "center" | "space-between";
  color?: "black" | "white";
}

const Logo: React.FC<LogoProps> = ({
  width = 250,
  height = 38.09,
  justifyContent = "center",
  color = "black",
}) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <Box
      component={ScrollLink}
      to=""
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: justifyContent,
        cursor: "pointer",
      }}
      onClick={scrollToTop}
    >
      {color === "black" ? (
        <Image
          src="/new-logo-black.svg"
          alt="brand logo"
          sizes="140px"
          width={width}
          height={height}
        />
      ) : (
        <Image
          src="/new-logo-white.svg"
          sizes="140px"
          alt="brand logo"
          width={width}
          height={height}
        />
      )}
    </Box>
  );
};

export default Logo;
