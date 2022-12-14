import React from "react";

import Grid from "@mui/material/Grid";

import VideoCard from "./VideoCard";

import classes from "./Dashboard.module.css";

const Dashboard = function (props) {
  const videoGrid = props.videoList.map((videoData) => {
    return (
      <Grid item key={videoData._id}>
        <VideoCard
          title={videoData.title}
          date={videoData.releaseDate}
          thumb={videoData.previewImage}
          id={videoData._id}
        />
      </Grid>
    );
  });

  return (
    <div className={classes.dashboard}>
      <Grid container>{videoGrid}</Grid>
    </div>
  );
};

export default Dashboard;
