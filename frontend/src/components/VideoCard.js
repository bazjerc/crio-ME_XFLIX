import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { getTimeDifference } from "../helpers/helper-functions";

const VideoCard = function (props) {
  const uploadTime = getTimeDifference(props.date);

  return (
    <Card sx={{ boxShadow: "none", cursor: "pointer", }}>
      <CardMedia component="img" src={props.thumb} />
      <CardContent sx={{ padding: "5px 0", bgcolor: "background.default" }}>
        <Typography variant="h5" sx={{ color: "text.cardTitle" }}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.cardSubTitle" }}>
          {uploadTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
