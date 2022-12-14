import React from "react";
import { useEffect, useState, useCallback } from "react";

import axios from "axios";

import CssBaseline from "@mui/material/CssBaseline";

import LandingPage from "./components/pages/LandingPage";

import config from "./config/config";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  // Use callback
  const getVideos = async function () {
    const reqOptions = {
      method: "get",
      url: `${config.backendEndpoint}/videos`,
    };

    try {
      const res = await axios(reqOptions);
      setVideos(res.data.videos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <LandingPage videoList={videos} />
    </React.Fragment>
  );
}

export default App;
