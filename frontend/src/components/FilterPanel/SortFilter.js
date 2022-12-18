import React from "react";
import { useContext } from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/system/Box";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import FilterContext from "../../store/filter-context";

import { convertToTitleCase } from "../../helpers/helper-functions";

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
    <FormControl size="small" fullWidth={false}>
      <Select
        value={currentSortFilter}
        onChange={(e) => changeSortFilterhandler(e.target.value)}
        IconComponent={() => {}}
        renderValue={(value) => {
          return (
            <Box sx={{ display: "flex", gap: 1 }}>
              <ImportExportIcon />
              {convertToTitleCase(value)}
            </Box>
          );
        }}
        sx={{
          bgcolor: "button.filter.selected.background",
          borderRadius: "100px",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
          width: 165,
        }}
      >
        {filterItems}
      </Select>
    </FormControl>
  );
};

export default SortFilter;
