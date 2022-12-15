import React from "react";

import Logo from "../Logo";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";

const Header = function (props) {
  return (
    <header>
      <Logo />
      <SearchBar />
      <UploadButton />
    </header>
  );
};

export default Header;
