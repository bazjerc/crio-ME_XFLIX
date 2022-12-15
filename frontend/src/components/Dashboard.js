import React from "react";

import Grid from "@mui/material/Grid";

import VideoCard from "./VideoCard";

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
    <div>
      <Grid container>{videoGrid}</Grid>
    </div>
  );
};

export default Dashboard;
