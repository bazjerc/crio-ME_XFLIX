import React from "react";
import { useContext } from "react";

import Button from "@mui/material/Button";

import FilterContext from "../../store/filter-context";

const GenreFilter = function () {
  const filterCtx = useContext(FilterContext);
  const currentGenreFilter = filterCtx.currentFilter.genre;

  const changeGenreFilterHandler = function (value) {
    if (currentGenreFilter === value) return;
    filterCtx.updateFilters("genre", value);
  };

  const filterButtons = filterCtx.availableFilters.genre.map(
    ({ name, value }, i) => {
      return (
        <Button onClick={changeGenreFilterHandler.bind(null, value)} key={i}>
          {name}
        </Button>
      );
    }
  );

  return <div>{filterButtons}</div>;
};

export default GenreFilter;
