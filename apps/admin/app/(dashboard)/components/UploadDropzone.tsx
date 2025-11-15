"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Fade,
  CircularProgress,
} from "@mui/material";
import { Upload } from "@mui/icons-material";
import axios, { AxiosProgressEvent } from "axios";

export default function UploadDropzone() {
  const [uploading, setUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [fileCount, setFileCount] = React.useState(0);

  const categoryId = 1; // Replace with selected category ID
  const style = "outline"; // Replace with selected style
  const createdBy = 1; // Replace with logged-in admin/user ID

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/svg+xml": [],
      "image/png": [],
      "application/zip": [],
    },
    multiple: true,
    onDrop: async (files) => {
      if (!files.length) return;

      setFileCount(files.length);
      setUploading(true);
      setProgress(0);

      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));
      formData.append("category", String(categoryId));
      formData.append("style", style);
      formData.append("createdBy", String(createdBy));

      try {
        const response = await axios.post(
          "http://localhost:8000/icons/upload",
          formData,
          {
            withCredentials: true, // if using cookies
            onUploadProgress: (event: AxiosProgressEvent) => {
              if (event.total) {
                const percentCompleted = Math.round(
                  (event.loaded * 100) / event.total
                );
                setProgress(percentCompleted);
              }
            },
          }
        );

        console.log("Uploaded files:", response.data);
      } catch (err) {
        console.error("Upload failed:", err);
        alert("Upload failed. Check console for details.");
      } finally {
        setTimeout(() => {
          setUploading(false);
          setFileCount(0);
          setProgress(0);
        }, 1000);
      }
    },
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        width: "100%",
        border: "3px dashed #2CB88B",
        borderRadius: 3,
        p: { xs: 3, md: 4},
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        backgroundColor: isDragActive ? "rgba(44,184,139,0.05)" : "#fff",
        "&:hover": {
          backgroundColor: "rgba(44,184,139,0.05)",
        },
      }}
    >
      <input {...getInputProps()} />
      <Stack alignItems="center" spacing={3}>
        {/* Upload Icon */}
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: uploading
              ? "linear-gradient(135deg, #2CB88B, #00C781)"
              : "#2CB88B",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 25px rgba(44, 184, 139, 0.3)",
            transform: isDragActive ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.25s ease, background 0.5s ease",
          }}
        >
          {uploading ? (
            <CircularProgress size={40} thickness={5} sx={{ color: "#fff" }} />
          ) : (
            <Upload fontSize="large" />
          )}
        </Box>

        {/* Uploading UI */}
        <Fade in={uploading} unmountOnExit>
          <Box
            sx={{
              width: "100%",
              maxWidth: 500,
              mt: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#2CB88B",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Uploading {fileCount} file{fileCount > 1 ? "s" : ""}
            </Typography>
            <Box
              sx={{
                position: "relative",
                height: 12,
                borderRadius: 6,
                overflow: "hidden",
                backgroundColor: "rgba(44,184,139,0.2)",
              }}
            >
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: "100%",
                  borderRadius: 6,
                  "& .MuiLinearProgress-bar": {
                    background:
                      "linear-gradient(90deg, #2CB88B, #00C781, #4AE3B0)",
                    backgroundSize: "200% 100%",
                    animation: "gradientMove 2s linear infinite",
                  },
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#2CB88B",
                mt: 1,
                fontWeight: 600,
              }}
            >
              {progress}%
            </Typography>
          </Box>
        </Fade>

        {/* Default Idle UI */}
        <Fade in={!uploading} unmountOnExit>
          <Box sx={{ width: "100%" }}>
            {isDragActive ? (
              <Typography
                variant="h6"
                sx={{ color: "#2CB88B", fontWeight: 600 }}
              >
                Drop files here...
              </Typography>
            ) : (
              <>
                <Typography
                  variant="h4"
                  sx={{
                    color: "text.primary",
                    fontWeight: 400,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Drag & drop SVG files
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#2CB88B",
                    maxWidth: 600,
                    fontWeight: 500,
                    mt: 1,
                    mx: "auto",
                  }}
                >
                  Or drag and drop a ZIP file for larger packs. The expected review time is 4 to 7 days.
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Stack>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </Box>
  );
}
