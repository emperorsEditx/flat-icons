import UploadDropzone from "@/app/dashboard/components/UploadDropzone";
import { Typography } from "@mui/material";

export default function UploadNewIcons() {
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{textAlign: 'left', mb: 4}}>
        Upload New Icons
      </Typography>
      <UploadDropzone />
    </>
  );
}
