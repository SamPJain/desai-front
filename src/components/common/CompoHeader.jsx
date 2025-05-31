import React from "react";
import "./CompoHeader.css";

const CompoHeader = ({ name, image, color }) => {
  return (
    <div className="relative text-center commo-header-img ">
      <img className="contactimage" src={image} alt="Contact Us" />
      <h1 className={"textOnImageStyle " + color}>{name}</h1>
    </div>
  );
};

export default CompoHeader;
