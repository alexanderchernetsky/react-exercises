import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({ count, handler }) => {
  return <button onClick={handler}>Clicked {count} times.</button>;
};

export default withCounter(ClickCounter);
