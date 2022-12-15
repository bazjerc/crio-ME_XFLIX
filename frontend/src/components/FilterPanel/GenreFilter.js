import React from "react";
import { useContext } from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import FilterContext from "../../store/filter-context";

const GenreFilter = function () {
  const filterCtx = useContext(FilterContext);

  const changeGenreFilterHandler = function (value) {
    filterCtx.updateFilters("genre", value);
  };

  return (
    <ButtonGroup>
      {filterCtx.availableFilters.genre.map((genreFilter, i) => {
        return (
          <Button
            onClick={changeGenreFilterHandler.bind(null, genreFilter)}
            key={i}
          >
            {genreFilter}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default GenreFilter;
