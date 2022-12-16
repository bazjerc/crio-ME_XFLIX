import React from "react";

import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";

const UploadButton = function () {
  return (
    <Button
      startIcon={<UploadIcon />}
      sx={{
        borderRadius: "5px",
        padding: "0 30px",
        textTransform: "none",
        bgcolor: "button.light.background",
        color: "button.light.content",
        "&:hover": { bgcolor: "button.light.background" },
      }}
    >
      Upload
    </Button>
  );
};

export default UploadButton;
