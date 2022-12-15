import React from "react";

import { useContext } from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import FilterContext from "../../store/filter-context";

const AgeRatingFilter = function () {
  const filterCtx = useContext(FilterContext);

  const changeAgeRatingFilterHandler = function (value) {
    filterCtx.updateFilters("ageRating", value);
  };

  return (
    <ButtonGroup>
      {filterCtx.availableFilters.ageRating.map((ageRating, i) => {
        return (
          <Button
            onClick={changeAgeRatingFilterHandler.bind(null, ageRating)}
            key={i}
          >
            {ageRating}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default AgeRatingFilter;
