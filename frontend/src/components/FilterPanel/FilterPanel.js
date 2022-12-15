import React from "react";

import GenreFilter from "./GenreFilter";
import AgeRatingFilter from "./AgeRatingFilter";
import SortFilter from "./SortFilter";

const FilterPanel = function () {
  return (
    <div>
      <GenreFilter />
      <AgeRatingFilter />
      <SortFilter />
    </div>
  );
};

export default FilterPanel;
