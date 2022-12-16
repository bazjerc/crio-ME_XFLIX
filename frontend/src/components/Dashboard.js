import React from "react";

import Grid from "@mui/material/Grid";

import VideoCard from "./VideoCard";
import Container from "@mui/system/Container";

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
    <Container sx={{ padding: "20px 0", margin: "0 auto" }}>
      <Grid container justifyContent="center" gap={2}>
        {videoGrid}
      </Grid>
    </Container>
  );
};

export default Dashboard;
