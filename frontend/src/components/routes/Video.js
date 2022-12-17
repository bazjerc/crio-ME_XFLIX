import React from "react";

import Header from "../Header/Header";
import Dashboard from "../Dashboard";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Divider } from "@mui/material";
import { Container } from "@mui/material";

const Video = function (props) {
  


  return (
    <React.Fragment>
      <Header useExtraFunc={false} />
      <Container sx={{ marginTop: "10px" }}>
        <VideoPlayer />
        <Divider sx={{ bgcolor: "input.border" }} />
        <Dashboard videoList={props.videoList} />
      </Container>
    </React.Fragment>
  );
};

export default Video;
