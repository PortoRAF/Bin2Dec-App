import React from "react";

const InputBox = ({ label, value, onChange }) => {
  const formStyle = {
    margin: "1em",
    fontSize: "0.8rem",
    color: "white",
  };

  const inputStyle = {
    borderRadius: "4px",
    backgroundColor: "#cccccc",
    border: "1px solid",
    height: "2vh",
    width: "25vw",
  };

  return (
    <div style={formStyle}>
      <label>{label}</label>
      <br />
      <input style={inputStyle} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputBox;
