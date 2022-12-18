import React from "react";
import { useNavigate } from "react-router";

import LogoIcon from "../assets/icons/xflix-logo.svg";

const Logo = function () {
  const navigate = useNavigate();

  return (
    <img
      src={LogoIcon}
      alt="XFlix logo"
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
