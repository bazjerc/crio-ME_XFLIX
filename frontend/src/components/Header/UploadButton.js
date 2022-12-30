import React from "react";

import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";

const UploadButton = function (props) {
  return (
    <Button
      startIcon={<UploadIcon />}
      sx={{
        borderRadius: "5px",
        padding: "5px 30px",
        textTransform: "none",
        bgcolor: "button.light.background",
        color: "button.light.content",
        "&:hover": { bgcolor: "button.light.background" },
      }}
      onClick={props.onClick}
    >
      Upload
    </Button>
  );
};

export default UploadButton;
