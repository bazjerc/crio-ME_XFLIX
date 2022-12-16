import React from "react";
import { useContext } from "react";

import Stack from "@mui/system/Stack";

import FilterButton from "./FilterButton";

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
      const isSeleceted =
        currentGenreFilter.includes(value) || currentGenreFilter === value;
      return (
        <FilterButton
          name={name}
          selected={isSeleceted}
          onClick={changeGenreFilterHandler.bind(null, value)}
          key={i}
        />
      );
    }
  );

  return (
    <Stack direction={"row"} justifyContent={"center"} spacing={2}>
      {filterButtons}
    </Stack>
  );
};

export default GenreFilter;
