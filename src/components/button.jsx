import React from "react";
const Button = ({ onClick }) => {
  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "7px",
    padding: "5px",
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      Получить шутку
    </button>
  );
};

export default Button;
