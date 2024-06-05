import React from "react";
interface TextBlockProps {
  text: string;
}

const TextBlock : React.FC<TextBlockProps>= ({ text }) => {
  const TextBlockStyle : React.CSSProperties = {
    padding: "7px",
  };
  return <p style={TextBlockStyle}>{text}</p>;
};
export default TextBlock;
