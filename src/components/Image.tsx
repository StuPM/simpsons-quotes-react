import React from "react";

type Props = {
  image: string;
  alt: string;
  order: number;
};

const Image = ({ image, order, alt }: Props): JSX.Element => {
  return <img src={image} alt={alt} style={{ order }} />;
};

export default Image;
