import React from "react";

import { Stack, Box, width } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ThumbUpAlt } from "@mui/icons-material";
import { ThumbDownAlt } from "@mui/icons-material";

const DotSeparator = function () {
  return (
    <div
      style={{
        backgroundColor: "#D1D5DA",
        width: "5px",
        height: "5px",
        borderRadius: "100%",
        margin: "0 10px",
      }}
    />
  );
};

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
        padding: "8px 20px",
        borderRadius: "100px",
        color: "button.light.content",
        "&:hover": { bgcolor: `button.${accent}.background` },
      }}
    >
      {props.voteCount}
    </Button>
  );
};

const VideoMeta = function (props) {
  const upvotes = null;

  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      sx={{ padding: "20px 0" }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{ color: "text.cardTitle", marginBottom: "10px" }}
        >
          {props.title}
        </Typography>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="subtitle1" sx={{ color: "text.cardSubTitle" }}>
            {props.views} views
          </Typography>
          <DotSeparator />
          <Typography variant="subtitle1" sx={{ color: "text.cardSubTitle" }}>
            {props.uploadTime}
          </Typography>
        </Stack>
      </Box>
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <RatingButton variant={"up"} voteCount={123123} />
        <RatingButton variant={"down"} voteCount={123123} />
      </Stack>
    </Stack>
  );
};

export default VideoMeta;
