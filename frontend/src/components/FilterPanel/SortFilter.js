import React from "react";
import { useContext } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import FilterContext from "../../store/filter-context";

const DropdownFilter = function () {
  const filterCtx = useContext(FilterContext);

  const changeSortFilterhandler = function (value) {
    filterCtx.updateFilters("sort", value);
  };

  return (
    <FormControl>
      <InputLabel id="sort">Sort by</InputLabel>
      <Select
        labelId="sort"
        label="Sort by"
        defaultValue={filterCtx.availableFilters.sort[0]}
        onChange={(e) => changeSortFilterhandler(e.target.value)}
      >
        {filterCtx.availableFilters.sort.map((sortKeyword, i) => {
          return (
            <MenuItem value={sortKeyword} key={i}>
              {sortKeyword}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropdownFilter;
