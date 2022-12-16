import React from "react";

import Logo from "../Logo";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";

import Container from "@mui/system/Container";

const Header = function (props) {
  return (
    <Container
      component={"header"}
      maxWidth={false}
      sx={{ bgcolor: "background.accent", padding: "15px 0" }}
    >
      <Container
        disableGutters={true}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <SearchBar />
        <UploadButton />
      </Container>
    </Container>
  );
};

export default Header;
