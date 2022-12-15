import React from "react";

import { useContext } from "react";

import Button from "@mui/material/Button";

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
      return (
        <Button
          onClick={changeAgeRatingFilterHandler.bind(null, value)}
          key={i}
        >
          {name}
        </Button>
      );
    }
  );

  return <div>{filterButtons}</div>;
};

export default AgeRatingFilter;
