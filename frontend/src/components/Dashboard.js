import React from "react";
import { useNavigate } from "react-router";

import Grid from "@mui/material/Grid";

import VideoCard from "./VideoCard";

import { findVideo } from "../helpers/helper-functions";
import { mockData } from "../config/site-config";

const Dashboard = function (props) {
  const navigate = useNavigate();

  // const increaseViewCount = async function (videoId) {
  //   const reqOptions = {
  //     method: "patch",
  //     url: `${siteConfig.backendEndpoint}/videos/${videoId}/views`,
  //   };

  //   try {
  //     await axios(reqOptions);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const increaseViewCount = function (videoId) {
    const video = findVideo(mockData, videoId);
    video.viewCount++;
  };

  const redirectToVideo = function (videoId) {
    navigate(`/watch/${videoId}`);
    increaseViewCount(videoId);
  };

  const videoGrid = props.videoList.map((videoData) => {
    return (
      <Grid
        item
        md={3}
        sm={6}
        xs={12}
        key={videoData._id}
        onClick={redirectToVideo.bind(null, videoData._id)}
      >
        <VideoCard
          title={videoData.title}
          date={videoData.releaseDate}
          thumb={videoData.previewImage}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {videoGrid}
    </Grid>
  );
};

export default Dashboard;
