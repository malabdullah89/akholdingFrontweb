import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import { AppForm } from "@/components/forms-elements";
import InputWithLabel from "@/components/forms-elements/InputWithLabel";
import * as yup from "yup";
import { validationRules } from "@/utils/formValidation";
import { showAlert, usePageContext } from "@/context/pageContext";
import useReactQuery from "@/hooks/useReactQuery";
import { FormikHelpers } from "formik";
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
  color: "#062440",
};

const validationSchema = yup.object({
  amount: validationRules.number,
});

export default function PitchModal({ open, setOpen }: any) {
  const handleClose = () => setOpen(false);

  const { state, dispatch } = usePageContext();

  const { mutate: changeWallet, isLoading }: any = useReactQuery({
    key: "changeWallet",
    url: `Wallet/admin`,
    method: "POST",
    onSuccess: () => {
      handleClose();
      dispatch(
        showAlert({
          vertical: "top",
          horizontal: "right",
          message: "successful",
          severity: "success",
        })
      );
    },
    onError: ({ response }: any) => {
      console.log(response, "errror");
      dispatch(
        showAlert({
          vertical: "top",
          horizontal: "right",
          message: response?.data?.message ?? "Something Wrong",
          severity: "error",
        })
      );
    },
  });

  const onSubmit = async (values: any, { resetForm }: FormikHelpers<any>) => {
    try {
      changeWallet(values);
      resetForm();
    } catch (error) {
      console.log(error, "errorerror");

      dispatch(
        showAlert({
          vertical: "top",
          horizontal: "right",
          message: error,
          severity: "error",
        })
      );
    }
  };
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
          >
            <Typography
              sx={{
                color: " #000",

                textAlign: "right",
                fontFamily: "Poppins",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "30px" /* 85.714% */,
              }}
            >
              Pitch Deck
            </Typography>

            <AppForm
              onSubmit={onSubmit}
              hasDevTools={false}
              initialValues={{
                name: "",
                phone: "",
                position: "",
                email: "",
                pitchBrief: "",
                file: "",
              }}
              validationSchema={validationSchema}
            >
              <Stack sx={{ width: "100%" }} mb={6}>
                <InputWithLabel
                  label="Name"
                  placeholder="Name"
                  type="text"
                  name="name"
                />

                <InputWithLabel
                  label="Phone"
                  placeholder="Phone"
                  type="text"
                  name="phone"
                />

                <InputWithLabel
                  label="Position"
                  placeholder="Position"
                  type="text"
                  name="position"
                />

                <InputWithLabel
                  label="Email"
                  placeholder="Email"
                  type="text"
                  name="email"
                />

                <InputWithLabel
                  label="pitchBrief"
                  placeholder="pitchBrief"
                  type="textarea"
                  name="pitchBrief"
                />
                <InputWithLabel
                  label="Upload Pitch deck"
                  placeholder=""
                  type="file"
                  name="file"
                />
              </Stack>

              <Stack direction="row" gap={1} justifyContent="end">
                <Button
                  sx={{
                    bgcolor: "#000",
                    borderRadius: "13px",
                    padding: "4px 40px",
                    ":hover": {
                      bgcolor: "#000",
                    },
                  }}
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>

                <Button
                  sx={{
                    bgcolor: "#000",
                    borderRadius: "13px",

                    padding: "4px 40px",
                    ":hover": {
                      bgcolor: "#000",
                    },
                  }}
                  type="submit"
                  color="primary"
                  disabled={isLoading}
                  variant="contained"
                >
                  {isLoading ? (
                    <CircularProgress size={20} color="primary" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Stack>
            </AppForm>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
