import {
  FormHelperText,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useField } from "formik";
import { useEffect } from "react";

import FileInput from "./FileInput";
import { grey } from "@mui/material/colors";

interface InputProps {
  label?: string;
  placeholder?: string;
  bgColor?: string;
  buttonBg?: string;
  type?:
    | "number"
    | "text"
    | "select"
    | "textarea"
    | "date"
    | "check"
    | "time"
    | "email"
    | "multiSelect"
    | "datetime-local"
    | "color"
    | "datePicker"
    | "password"
    | "file"
    | "textSelect";
  name: string;
  options?: { label: string; value: string | number | boolean }[];
  setValue?: any;
  updatedValue?: any;
  readOnly?: boolean;
  value?: any;
  bgDarker?: boolean;
}

const InputWithLabel = ({
  bgDarker = false,
  label,
  placeholder,
  bgColor,
  type = "text",
  buttonBg,
  name,
  options,
  setValue: setSelectedValue,
  updatedValue,
  readOnly = false,
  value,
}: InputProps) => {
  const [field, { error, touched }, { setValue }]: any = useField(name!);
  const isInvalid = !!error && touched;
  useEffect(() => {
    if (field.value && setSelectedValue) setSelectedValue(field.value);
  }, [field]);

  useEffect(() => {
    if (updatedValue) {
      setValue(updatedValue);
    }
  }, [updatedValue]);

  return (
    <Stack width={"100%"} direction={"column"} py={1} gap={1}>
      {(type !== "check" || !label) && (
        <Typography
          color="inherit"
          textTransform={"capitalize"}
          fontSize={"16px"}
          fontWeight={500}
        >
          {label}
        </Typography>
      )}
      {type === "textarea" ? (
        <TextareaAutosize
          {...field}
          minRows={6}
          placeholder={placeholder}
          style={{
            borderRadius: "10px",
            padding: 10,
            color: "#7A7A7A",
            backgroundColor: "#F5F5F5",
            borderWidth: 0,
          }}
        />
      ) : type === "file" ? (
        <FileInput label={label} name={name} />
      ) : (
        <TextField
          id={label}
          type={type}
          size="small"
          sx={{
            "& .css-drs62w-MuiInputBase-root-MuiOutlinedInput-root": {
              color: grey[50],
            },

            background: bgDarker ? "rgba(128, 155, 173,0.5)" : "",
            // border: "1px solid white",
            borderRadius: 1,
            fieldset: {
              // borderRadius: 2,
            },
          }}
          placeholder={placeholder}
          {...field}
          variant="outlined"
          InputProps={{
            readOnly: readOnly,
          }}
        />
      )}

      {isInvalid && (
        <FormHelperText sx={{ color: "red", fontSize: "14px" }}>
          {error}
        </FormHelperText>
      )}
    </Stack>
  );
};

export default InputWithLabel;
