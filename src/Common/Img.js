import React from "react";

const Img = ({ width = "100%", src = "", alt = "" }) => {
  return <img src={src} alt={alt} width={width} />;
};

export default Img;
