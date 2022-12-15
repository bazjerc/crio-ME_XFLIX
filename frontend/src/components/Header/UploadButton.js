import React from "react";

import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";

const UploadButton = function (props) {
  return <Button startIcon={<UploadIcon />}>Upload</Button>;
};

export default UploadButton;
