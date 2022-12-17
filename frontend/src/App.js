import React from "react";
import { useEffect, useState, useContext, useCallback } from "react";

import axios from "axios";

import Root from "./components/routes/Root";
import Video from "./components/routes/Video";

import FilterContext from "./store/filter-context";

import siteConfig from "./config/site-config";
import { mockData } from "./config/site-config";

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
      <Root videoList={videoList} />
      {/* <Video videoList={videoList} /> */}
    </React.Fragment>
  );
}

export default App;
