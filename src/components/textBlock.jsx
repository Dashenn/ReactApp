import React from "react";
const TextBlock = ({ text }) => {
  const TextBlockStyle = {
    padding: "7px",
  };
  return <p style={TextBlockStyle}>{text}</p>;
};
export default TextBlock;
