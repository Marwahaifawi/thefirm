import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "./logo.png";
const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <img
      src={LogoImage}
      alt="logo"
      onClick={handleClick}
      className="clickable"
    />
  );
};

export default Logo;
