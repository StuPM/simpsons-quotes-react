import React from "react";

type Props = {
  quote: string;
};

const Quote = ({ quote }: Props): JSX.Element => {
  return (
    <>
      <div className="quote">{quote}</div>
    </>
  );
};

export default Quote;
