import React from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import GenreFilter from "./GenreFilter";
import AgeRatingFilter from "./AgeRatingFilter";
import SortFilter from "./SortFilter";

const FilterPanel = function () {
  return (
    <Container
      component={"aside"}
      maxWidth={false}
      sx={{ bgcolor: "background.accent", padding: "15px 0 30px 0" }}
    >
      <Container
        disableGutters={true}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack direction={{ md: "row" }} alignItems={"center"} gap={3}>
          <Stack spacing={3} justifyContent={"center"}>
            <GenreFilter />
            <AgeRatingFilter />
          </Stack>
          <SortFilter />
        </Stack>
      </Container>
    </Container>
  );
};

export default FilterPanel;
