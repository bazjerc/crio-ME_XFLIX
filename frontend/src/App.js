import React from "react";
import { useEffect, useState, useContext, useCallback } from "react";
import { Routes, Route } from "react-router";

import Root from "./components/routes/Root";
import Video from "./components/routes/Video";

import FilterContext from "./store/filter-context";

import axios from "axios";

import siteConfig from "./config/site-config";

import { mockData } from "./config/site-config";

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

  const getVideos = useCallback(
    async function () {
      const queryString = buildQueryString(filterCtx.currentFilter);

      const reqOptions = {
        method: "get",
        url: `${siteConfig.backendEndpoint}/videos${queryString}`,
      };

      try {
        // const res = await axios(reqOptions);
        // setVideoList(res.data.videos);
        setVideoList(mockData);
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
      <Routes>
        <Route exact path="/" element={<Root videoList={videoList} />} />
        <Route path="/watch/:id" element={<Video videoList={videoList} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
