import React from "react";
import { useEffect, useState, useContext, useCallback } from "react";

import axios from "axios";

import CssBaseline from "@mui/material/CssBaseline";

import LandingPage from "./components/routes/Root";

import FilterContext from "./store/filter-context";

import siteConfig from "./config/siteConfig";

import "./App.css";

const buildQueryString = function ({ title, genre, ageRating, sort }) {
  let queryString = `?sortBy=${sort}`;

  if (title) queryString += `&title=${title}`;
  if (genre) queryString += `&genres=${genre.toString()}`;
  if (ageRating) queryString += `&contentRating=${ageRating}`;

  return encodeURI(queryString); // uporabi replace
};

function App() {
  const filterCtx = useContext(FilterContext);
  const [videoList, setVideoList] = useState([]);
  console.log(filterCtx.currentFilter);

  const getVideos = useCallback(
    async function () {
      const queryString = buildQueryString(filterCtx.currentFilter);
      console.log(queryString);

      const reqOptions = {
        method: "get",
        url: `${siteConfig.backendEndpoint}/videos${queryString}`,
      };

      try {
        const res = await axios(reqOptions);
        setVideoList(res.data.videos);
      } catch (err) {
        console.log(err);
      }
    },
    [filterCtx.currentFilter]
  );

  const currentFilters = filterCtx.currentFilter;

  useEffect(() => {
    getVideos();
  }, [currentFilters]);

  return (
    <React.Fragment>
      <CssBaseline />
      <LandingPage videoList={videoList} />
    </React.Fragment>
  );
}

export default App;
