import React from "react";
import { useContext } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import FilterContext from "../../store/filter-context";

const SortFilter = function () {
  const filterCtx = useContext(FilterContext);
  const currentSortFilter = filterCtx.currentFilter.sort;

  const changeSortFilterhandler = function (value) {
    filterCtx.updateFilters("sort", value);
  };

  const filterItems = filterCtx.availableFilters.sort.map(
    ({ name, value }, i) => {
      return (
        <MenuItem value={value} key={i}>
          {name}
        </MenuItem>
      );
    }
  );

  return (
    <FormControl>
      <InputLabel id="sort">Sort by</InputLabel>
      <Select
        labelId="sort"
        label="Sort by"
        value={currentSortFilter}
        onChange={(e) => changeSortFilterhandler(e.target.value)}
      >
        {filterItems}
      </Select>
    </FormControl>
  );
};

export default SortFilter;
