import React from "react";
import { useReducer } from "react";

import FilterContext from "./filter-context";

const defaultFilterState = {
  title: "",
  genre: [],
  ageRating: "",
  sort: "releaseDate",
};

const availableFilters = {
  genre: ["All Genre", "Education", "Sports", "Comedy", "Lifestyle"],
  ageRating: ["Any Age Group", "7+", "12+", "16+", "18+"],
  sort: ["Release Date", "View Count"],
};

const convertToCamelCase = function (string) {
  const strArr = string.split(" ");
  return strArr
    .map((str, i) => {
      if (i === 0) {
        return str.toLowerCase();
      } else {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      }
    })
    .join("");
};

const filterReducer = function (state, action) {
  let updatedFilterState;

  if (action.type === "title") {
    updatedFilterState = { ...state, title: action.value.trim().toLowerCase() };
  }

  if (action.type === "genre") {
    if (action.value === "All Genre") {
      updatedFilterState = { ...state, genre: [] };
    } else {
      const indexOfValue = state.genre.indexOf(action.value);
      if (indexOfValue === -1) {
        updatedFilterState = {
          ...state,
          genre: [...state.genre].concat(action.value),
        };
      } else {
        updatedFilterState = {
          ...state,
          genre: [...state.genre].filter((keyword) => keyword !== action.value),
        };
      }
    }
  }

  if (action.type === "ageRating") {
    if (action.value === "Any Age Group") {
      updatedFilterState = { ...state, ageRating: "" };
    } else {
      updatedFilterState = { ...state, ageRating: action.value };
    }
  }

  if (action.type === "sort") {
    updatedFilterState = { ...state, sort: convertToCamelCase(action.value) };
  }

  return updatedFilterState;
};

const FilterProvider = function (props) {
  const [filterState, dispatchFilterAction] = useReducer(
    filterReducer,
    defaultFilterState
  );

  const updateFilterHandler = function (type, value) {
    dispatchFilterAction({ type, value });
  };

  const filterContext = {
    currentFilter: filterState,
    availableFilters: availableFilters,
    updateFilters: updateFilterHandler,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
