import React from "react";

const Image = ({ image, order, alt }) => {
  return <img src={image} alt={alt} style={{ order }} />;
};

export default Image;
