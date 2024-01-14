import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { IconButton, Stack, Typography } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "absolute" as "absolute",
  width: { xs: "90%", sm: "auto" },
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow:
    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
  px: { xs: 2, sm: 3 },
  py: 2,
  borderRadius: 3,
  outline: "none",
  minWidth: "680px",
};

export default function NewsModal({ title, fullText, open, setOpen }: any) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box
          p={1}
          maxHeight={"90vh"}
          sx={{
            overflowY: "scroll",
            // borderRadius: "8px",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#F5F5F5",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#7A7A7A",
              borderRadius: "4px",
              "&:hover": {
                background: "#555",
              },
            },
            ...style,
          }}
        >
          <IconButton
            sx={{ position: "absolute", right: 8, top: 8 }}
            onClick={handleClose}
          >
            <ClearIcon color="inherit" />
          </IconButton>
          <Stack
            py={3}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={4}
          >
            <Typography
              gutterBottom
              variant="h4"
              letterSpacing={0}
              fontWeight="600"
              component="div"
              fontSize={"20px"}
            >
              {title}
            </Typography>
            <Typography fontSize={"16px"} textAlign={"center"}>
              {fullText}
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
