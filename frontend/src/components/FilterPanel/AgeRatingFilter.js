import React from "react";
import { useContext } from "react";

import Stack from "@mui/system/Stack";

import FilterButton from "./FilterButton";

import FilterContext from "../../store/filter-context";

const AgeRatingFilter = function () {
  const filterCtx = useContext(FilterContext);
  const currentAgeRatingFilter = filterCtx.currentFilter.ageRating;

  const changeAgeRatingFilterHandler = function (value) {
    if (currentAgeRatingFilter === value) return;
    filterCtx.updateFilters("ageRating", value);
  };

  const filterButtons = filterCtx.availableFilters.ageRating.map(
    ({ name, value }, i) => {
      const isSeleceted = currentAgeRatingFilter === value;
      return (
        <FilterButton
          name={name}
          selected={isSeleceted}
          onClick={changeAgeRatingFilterHandler.bind(null, value)}
          key={i}
        />
      );
    }
  );

  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      spacing={{ xs: 3, sm: 4 }}
    >
      {filterButtons}
    </Stack>
  );
};

export default AgeRatingFilter;
