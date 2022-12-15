import React from "react";
import { useEffect, useState, useContext } from "react";

import axios from "axios";

import CssBaseline from "@mui/material/CssBaseline";

import LandingPage from "./components/pages/LandingPage";

import FilterContext from "./store/filter-context";

import config from "./config/config";

import "./App.css";

const buildQueryString = function (title, genre, ageRating, sort) {
  let queryString = `/videos?sortBy=${sort}`;

  if (title) queryString += `&title=${title}`;
  if (genre.length) queryString += `&genres=${genre.toString()}`;
  if (ageRating) queryString += `&contentRating=${ageRating}`;

  return encodeURI(queryString); // uporabi replace
};

function App() {
  const filterCtx = useContext(FilterContext);
  const [videos, setVideos] = useState([]);

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
      <CssBaseline />
      <LandingPage videoList={videos} />
    </React.Fragment>
  );
}

export default App;
