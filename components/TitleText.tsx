import { Typography } from "@mui/material";
import React from "react";

interface TitleTextProps {
  // Define your props here
  title: string;
  fontWeight?: string;
}

const TitleText: React.FC<TitleTextProps> = ({ title, fontWeight = "600" }) => {
  return (
    <Typography
      variant="h3"
      fontWeight={fontWeight}
      fontSize={{ xs: "20px", md: "38px" }}
      textTransform={"uppercase"}
      lineHeight={"24px"}
      letterSpacing={"1.25px"}
    >
      {title}
    </Typography>
  );
};

export default TitleText;
