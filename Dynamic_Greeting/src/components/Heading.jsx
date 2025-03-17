import React from "react";

function Heading() {
  const date = new Date();
  const hourOfDay = date.getHours();
  let message = "";
  const dynamicStyle = {};

  if (hourOfDay < 12) {
    message = "Good Morning🌄";
    dynamicStyle.color = "red";
  } else if (hourOfDay < 18) {
    message = "Good Afternoon🕑";
    dynamicStyle.color = "green";
  } else {
    message = "Good Evening🌆";
    dynamicStyle.color = "blue";
  }
  return <h1 style={dynamicStyle}>{message}</h1>;
}

export default Heading;
