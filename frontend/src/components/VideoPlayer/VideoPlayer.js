import React from "react";

import { Stack } from "@mui/material";

import VideoEmbed from "./VideoEmbed";
import VideoMeta from "./VideoMeta";

const VideoPlayer = function () {
  

  return (
    <Stack>
      <VideoEmbed videoId={"1"} />
      <VideoMeta
        title={"Icek Bicek Vaše perje"}
        views={50000}
        uploadTime={"5 months ago"}
        upVotes={105}
        downVotes={80}
      />
    </Stack>
  );
};

export default VideoPlayer;
