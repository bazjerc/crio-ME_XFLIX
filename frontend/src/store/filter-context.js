import React from "react";

const FilterContext = React.createContext({
  currentFilter: {},
  availableFilters: {},
  updateFilters: (type, value) => {},
});

export default FilterContext;
