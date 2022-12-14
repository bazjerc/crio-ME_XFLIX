import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const VideoCard = function (props) {
  const uploadDate = props.date;
  return (
    <Card>
      <CardMedia component="img" src={props.thumb} />
      <CardContent>
        <Typography>{props.title}</Typography>
        <Typography>{uploadDate}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
