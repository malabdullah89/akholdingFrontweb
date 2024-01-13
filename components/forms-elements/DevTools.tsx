import { IS_PRODUCTION } from "@/utils/helpers";
import { Box } from "@mui/material";

import { useFormikContext } from "formik";

export const DevTools: React.FC = () => {
  const {
    submitCount,
    dirty,
    initialStatus,
    isSubmitting,
    isValid,
    isValidating,
    status,
    touched,
    values,
    errors,
    validateOnBlur,
    validateOnChange,
    validateOnMount,
  } = useFormikContext();

  if (IS_PRODUCTION) {
    return null;
  }

  return (
    <Box maxWidth={"100%"}>
      <Box marginY={10} whiteSpace={"pre-wrap"}>
        {JSON.stringify(
          {
            submitCount,
            values,
            touched,
            errors,
            dirty,
            initialStatus,
            isSubmitting,
            isValid,
            isValidating,
            status,

            validateOnBlur,
            validateOnChange,
            validateOnMount,
          },
          null,
          2
        )}
      </Box>
    </Box>
  );
};
