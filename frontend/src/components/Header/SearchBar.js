import React from "react";
import { useState, useContext } from "react";

import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/system/Stack";

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
    <Stack
      direction={"row"}
      sx={{
        border: 1,
        borderColor: "input.border",
        borderRadius: "2px",
        width: "50%",
      }}
    >
      <Input
        value={searchString}
        placeholder="Search"
        onChange={searchInputHandler}
        disableUnderline
        sx={{
          padding: "0 15px",
          bgcolor: "input.background",
          color: "white",
          borderRight: 1,
          borderColor: "input.border",
          flexBasis: "100%",
        }}
      />
      <IconButton
        onClick={searchHandler}
        sx={{
          borderRadius: 0,
          padding: "0 20px",
          bgcolor: "button.dark.background",
          color: "button.dark.content",
          "&:hover": { bgcolor: "button.dark.background" },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
