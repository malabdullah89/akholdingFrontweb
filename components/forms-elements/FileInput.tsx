import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { Code as CodeIcon, FileCopyOutlined } from "@mui/icons-material";

const FileInput = ({ label, name }: any) => {
  const [field, { error }, { setValue }]: any = useField(name!);

  const { setFieldValue, errors, touched, values }: any = useFormikContext();
  const [filePreview, setFilePreview] = useState<any>(null);

  const selectedFile = values[name];

  console.log(filePreview, "filePreview");
  console.log(selectedFile, "selectedFile");

  const handleChange = (event: any) => {
    const file = event.currentTarget.files[0];
    setFieldValue(name, file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  const handleRemove = () => {
    setFieldValue(name, null);
    setFilePreview(null);
  };

  const renderPreview = () => {
    if (selectedFile && filePreview) {
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

      if (fileExtension === "pdf") {
        return <embed src={filePreview} width="50%" height="100px" />;
      }

      if (["doc", "docx"].includes(fileExtension)) {
        return (
          <Typography variant="subtitle1">
            Preview not available for Word documents.
          </Typography>
        );
      }

      if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
        return <img src={filePreview} alt="File Preview" />;
      }
    }
    return null;
  };

  return (
    <>
      <input
        id={name}
        name={name}
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      {selectedFile ? (
        <Stack direction={"column"}>
          {/* {renderPreview()} */}
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            {field?.value && !selectedFile.name && (
              <Link href={field?.value} target="_blank">
                <Button
                  variant="contained"
                  startIcon={<FileCopyOutlined />}
                  rel="noopener noreferrer"
                  size="small"
                >
                  View File
                </Button>
              </Link>
            )}
            {selectedFile.name && (
              <Typography variant="subtitle1">{selectedFile.name}</Typography>
            )}

            <IconButton
              onClick={handleRemove}
              aria-label="delete"
              size="medium"
              sx={{
                color: "red",
              }}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      ) : (
        <label htmlFor={name}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0169A4",
              ":hover": {
                bgcolor: "#025281",
              },
            }}
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            {label}
          </Button>
        </label>
      )}
    </>
  );
};

export default FileInput;
