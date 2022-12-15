import React from "react";
import { useState, useContext } from "react";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import FilterContext from "../../store/filter-context";

const SearchBar = function () {
  const filterCtx = useContext(FilterContext);
  const [searchString, setSearchString] = useState("");

  const searchInputHandler = (e) => {
    setSearchString(e.target.value);
  };

  const searchHandler = function () {
    filterCtx.updateFilters("title", searchString);
  };

  return (
    <div>
      <TextField
        value={searchString}
        placeholder="Search"
        onChange={searchInputHandler}
      />
      <IconButton onClick={searchHandler}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
