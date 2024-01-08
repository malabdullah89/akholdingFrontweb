import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import theme from "@/styles/theme";
import { Box, Button, CardActions, Stack } from "@mui/material";
import Image from "next/image";

interface ServiceBoxProps {
  // Define your props here
  height?: number;
  imageName: string;
  imageTitle?: string;
  primaryText: string;
  secondaryText: string;
  arrayOfButtons?: string[];
}

const NewsBox: React.FC<ServiceBoxProps> = ({
  height = 250,
  imageName,
  primaryText,
  imageTitle = primaryText,
  secondaryText,
}) => {
  return (
    <Card
      sx={{
        boxShadow: "6px -3px 19px 0px rgba(0, 0, 0, 0.25);",

        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: height, mb: 1 }}
        image={`/assets/${imageName}`}
        title={imageTitle}
      />
      <CardContent component={Stack} sx={{ flex: 1, p: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          letterSpacing={0}
          fontWeight="600"
          component="div"
          fontSize={"20px"}
        >
          {primaryText}
        </Typography>
        <Typography
          fontSize={"16px"}
          textAlign={"justify"}
          sx={{
            textAlignLast: "center",
          }}
        >
          {secondaryText}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 2, justifyContent: "center" }}>
        <Button
          variant="text"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            color: "#000",
          }}
          endIcon={
            <Image
              src={"/assets/arrow-right.svg"}
              alt="arrow right"
              width={20}
              height={20}
            />
          }
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsBox;
