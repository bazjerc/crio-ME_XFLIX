import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const getTimeDifference = function (date) {
  const diff = Date.now() - new Date(date).getTime();
  const daysDiff = diff / 1000 / 3600 / 24;

  let diffString;

  if (daysDiff < 1) {
    diffString = "Less then a day ago";
  } else if (daysDiff < 2) {
    diffString = "A day ago";
  } else if (daysDiff < 7) {
    diffString = `${Math.floor(daysDiff)} days ago`;
  } else if (daysDiff < 30) {
    const weekDiff = daysDiff / 7;
    diffString = `${
      weekDiff <= 1.5
        ? Math.floor(weekDiff) + " week"
        : Math.ceil(weekDiff) + " weeks"
    } ago`;
  } else if (daysDiff < 336) {
    const monthDiff = daysDiff / 30;
    diffString = `${
      monthDiff <= 1.5 ? "1 month" : Math.ceil(monthDiff) + " months"
    } ago`;
  } else if (daysDiff >= 336) {
    const yearDiff = daysDiff / 365;
    diffString = `${
      yearDiff <= 1.5 ? "1 year" : Math.ceil(yearDiff) + " years"
    } ago`;
  }

  return diffString;
};

const VideoCard = function (props) {
  const uploadTime = getTimeDifference(props.date);

  return (
    <Card>
      <CardMedia component="img" src={props.thumb} />
      <CardContent>
        <Typography>{props.title}</Typography>
        <Typography>{uploadTime}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
