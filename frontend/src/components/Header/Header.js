import React from "react";
import { useState } from "react";

import Container from "@mui/system/Container";

import Logo from "../Logo";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";

import UploadModal from "../UploadModal/UploadModal";

const Header = function (props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpenHandler = () => setIsModalOpen(true);
  const modalCloseHandler = () => setIsModalOpen(false);

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
        {props.useExtraFunc && <SearchBar />}
        {props.useExtraFunc && <UploadButton onClick={modalOpenHandler} />}
        <UploadModal open={isModalOpen} close={modalCloseHandler} />
      </Container>
    </Container>
  );
};

export default Header;
