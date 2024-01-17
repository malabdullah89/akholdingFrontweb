import React from "react";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { hideAlert, usePageContext } from "@/context/pageContext";

const AlertContent = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const Alert = () => {
  const { state, dispatch } = usePageContext();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: state?.AlertData?.vertical,
        horizontal: state?.AlertData?.horizontal,
      }}
      open={state.OpenAlert}
      autoHideDuration={3000}
      onClose={() => dispatch(hideAlert())}
    >
      <AlertContent
        severity={state?.AlertData?.severity}
        sx={{ width: "100%" }}
      >
        {state?.AlertData?.message}
      </AlertContent>
    </Snackbar>
  );
};

export default Alert;
