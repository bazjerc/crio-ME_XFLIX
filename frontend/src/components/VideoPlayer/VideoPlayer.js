import React, { useState } from "react";
import { useEffect, /* useRef */ } from "react";
import { useParams } from "react-router";

import Stack from "@mui/material/Stack";

import VideoEmbed from "./VideoEmbed";
import VideoMeta from "./VideoMeta";

import axios from "axios";

import siteConfig from "../../config/site-config";

import { mockData } from "../../config/site-config";
import { findVideo } from "../../helpers/helper-functions";

const VideoPlayer = function () {
  const { id: idParam } = useParams();
  const [videoId, setVideoId] = useState(idParam);
  const [videoData, setVideoData] = useState({});

  // const isMounted = useRef(false);

  useEffect(() => {
    setVideoId(idParam);
  });

  // const getVideoData = async function () {
  //   const reqOptions = {
  //     method: "get",
  //     url: `${siteConfig.backendEndpoint}/videos/${videoId}`,
  //   };

  //   try {
  //     const res = await axios(reqOptions);
  //     setVideoData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getVideoData = function () {
    setVideoData(findVideo(mockData, videoId));
  };

  useEffect(() => {
    getVideoData();
    // if (isMounted.current) {
    //   getVideoData();
    // } else {
    //   isMounted.current = true;
    // }
  }, [videoId]);

  return (
    <Stack>
      <VideoEmbed
        src={`https://www.${videoData.videoLink}`}
        key={videoData.videoLink}
      />
      <VideoMeta
        title={videoData.title}
        views={videoData.viewCount}
        uploadTime={videoData.releaseDate}
        upVotes={videoData.votes?.upVotes}
        downVotes={videoData.votes?.downVotes}
        id={videoId}
      />
    </Stack>
  );
};

export default VideoPlayer;
