import React from "react";

const Notification = ({ note }) => {
  const noteStyle = {
    fontSize: "0.9rem",
    color: "red",
  };

  return <div style={noteStyle}>{note}</div>;
};

export default Notification;
