import React from "react";

import Stack from "@mui/system/Stack";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

import RatingButton from "./RatingButton";

import siteConfig from "../../config/site-config";
import axios from "axios";

import { findVideo } from "../../helpers/helper-functions";
import { mockData } from "../../config/site-config";

const DotSeparator = function () {
  return (
    <div
      style={{
        backgroundColor: "#D1D5DA",
        width: "5px",
        height: "5px",
        borderRadius: "100%",
        margin: "0 10px",
      }}
    />
  );
};

const VideoMeta = function (props) {
  // const videoVoteHandler = async (type, change) => {
  //   const reqOptions = {
  //     method: "patch",
  //     url: `${siteConfig.backendEndpoint}/videos/${props.id}/votes`,
  //     headers: { "Content-Type": "application/json" },
  //     body: {
  //       vote: `${type}Vote`,
  //       change: change,
  //     },
  //   };

  //   try {
  //     // const res = await axios(reqOptions);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const videoVoteHandler = (type, change) => {
    const video = findVideo(mockData, props.id);
    if (type === "up") {
      video.votes.upVotes++;
    } else {
      video.votes.downVotes++;
    }
  };

  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      sx={{ padding: "20px 0" }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{ color: "text.cardTitle", marginBottom: "10px" }}
        >
          {props.title}
        </Typography>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="subtitle1" sx={{ color: "text.cardSubTitle" }}>
            {props.views} views
          </Typography>
          <DotSeparator />
          <Typography variant="subtitle1" sx={{ color: "text.cardSubTitle" }}>
            {props.uploadTime}
          </Typography>
        </Stack>
      </Box>
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <RatingButton
          variant={"up"}
          voteCount={props.upVotes}
          onClick={videoVoteHandler.bind(null, "up", "increase")}
        />
        <RatingButton
          variant={"down"}
          voteCount={props.downVotes}
          onClick={videoVoteHandler.bind(null, "down", "increase")}
        />
      </Stack>
    </Stack>
  );
};

export default VideoMeta;
