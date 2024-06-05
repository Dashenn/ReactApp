import React from "react";
interface ButtonProps {
  onClick: () => void;
}
 const Button : React.FC<ButtonProps> = ({ onClick }) => {
  const buttonStyle: React.CSSProperties = {
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
