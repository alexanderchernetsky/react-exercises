import React from "react";
import withCounter from "./withCounter";

const HoverCounter = ({ count, handler }) => {
  return <button onMouseOver={handler}>Hovered {count} times.</button>;
};

export default withCounter(HoverCounter);
