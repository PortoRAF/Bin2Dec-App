import React from "react";

const Header = () => {
  const titleStyle = {
    marginTop: "5vh",
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "white",
  };

  const subtitleStyle = {
    marginBottom: "10vh",
    fontSize: "1rem",
    color: "white",
  };

  return (
    <div>
      <div style={titleStyle}>Bin2Dec</div>
      <div style={subtitleStyle}>Convert binary numbers to decimal</div>
    </div>
  );
};

export default Header;
