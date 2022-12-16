import React from "react";

import Button from "@mui/material/Button";

const FilterButton = function (props) {
  const backgroundColor = props.selected
    ? "button.filter.selected.background"
    : "button.filter.background";

  const color = props.selected
    ? "button.filter.selected.content"
    : "button.filter.content";

  return (
    <Button
      onClick={props.onClick}
      sx={{
        padding: "6px 13px",
        bgcolor: backgroundColor,
        color: color,
        borderRadius: "100px",
        "&:hover": { bgcolor: backgroundColor, color: color },
      }}
    >
      {props.name}
    </Button>
  );
};

export default FilterButton;
