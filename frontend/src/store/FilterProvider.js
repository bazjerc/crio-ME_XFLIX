import React from "react";
import { useReducer } from "react";

import FilterContext from "./filter-context";

const defaultFilterState = {
  title: "",
  genre: "",
  ageRating: "",
  sort: "releaseDate",
};

const availableFilters = {
  genre: [
    { name: "All Genre", value: "" },
    { name: "Education", value: "Education" },
    { name: "Sports", value: "Sports" },
    { name: "Comedy", value: "Comedy" },
    { name: "Lifestyle", value: "Lifestyle" },
  ],
  ageRating: [
    { name: "Any Age Group", value: "" },
    { name: "7+", value: "7+" },
    { name: "12+", value: "12+" },
    { name: "16+", value: "16+" },
    { name: "18+", value: "18+" },
  ],
  sort: [
    { name: "Release Date", value: "releaseDate" },
    { name: "View Count", value: "viewCount" },
  ],
};

const filterReducer = function (state, action) {
  let updatedFilterState;

  if (action.type === "title") {
    updatedFilterState = { ...state, title: action.value.trim().toLowerCase() };
  }

  if (action.type === "genre") {
    if (action.value === "") {
      updatedFilterState = { ...state, genre: action.value };
    } else {
      if (Array.isArray(state.genre)) {
        if (state.genre.indexOf(action.value) === -1) {
          updatedFilterState = {
            ...state,
            genre: [...state.genre].concat(action.value),
          };
        } else {
          if (state.genre.length === 1) {
            updatedFilterState = {
              ...state,
              genre: "",
            };
          } else {
            updatedFilterState = {
              ...state,
              genre: [...state.genre].filter(
                (keyword) => keyword !== action.value
              ),
            };
          }
        }
      } else {
        updatedFilterState = {
          ...state,
          genre: [].concat(action.value),
        };
      }
    }
  }

  if (action.type === "ageRating") {
    updatedFilterState = { ...state, ageRating: action.value };
  }

  if (action.type === "sort") {
    updatedFilterState = { ...state, sort: action.value };
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
