import React from "react";

const Image = (props) => {
  const { image, order, alt } = props;
  return <img src={image} alt={alt} style={{ order }} />;
};

export default Image;
