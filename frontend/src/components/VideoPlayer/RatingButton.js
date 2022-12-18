import React from "react";

import Button from "@mui/material/Button";
import { ThumbUpAlt, ThumbDownAlt } from "@mui/icons-material";

const RatingButton = function (props) {
  let icon;
  let accent;

  if (props.variant === "up") {
    icon = <ThumbUpAlt />;
    accent = "light";
  }
  if (props.variant === "down") {
    icon = <ThumbDownAlt />;
    accent = "dark";
  }
  return (
    <Button
      startIcon={icon}
      sx={{
        bgcolor: `button.${accent}.background`,
        padding: "8px 25px",
        borderRadius: "100px",
        color: "button.light.content",
        "&:hover": { bgcolor: `button.${accent}.background` },
      }}
      onClick={props.onClick}
    >
      {props.voteCount}
    </Button>
  );
};

export default RatingButton;
