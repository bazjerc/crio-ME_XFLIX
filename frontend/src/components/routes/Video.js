import React from "react";

import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

import Header from "../Header/Header";
import Dashboard from "../Dashboard";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Video = function (props) {
  return (
    <React.Fragment>
      <Header useExtraFunc={false} />
      <Container sx={{ marginTop: "20px" }}>
        <VideoPlayer />
        <Divider sx={{ bgcolor: "input.border" }} />
        <Dashboard videoList={props.videoList} />
      </Container>
    </React.Fragment>
  );
};

export default Video;
