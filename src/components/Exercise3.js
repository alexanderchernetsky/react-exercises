import React from "react";

const Coordinates = ({coord, func}) => {
  return (
      <div className="coordinates" onMouseMove={func}>
        <p>Coordinates component</p>
        Position left: {coord.x}, top: {coord.y}
      </div>
  )
};

const Coordinates2 = ({coord, func }) => {
  return (
      <div className="coordinates2" onMouseMove={func}>
        <p>Coordinates-2 component</p>
        <div>POS left: {coord.x}</div>
        <div>POS top: {coord.y}</div>
      </div>
  )
};

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.children(this.state, this.handleMouseMove)}
      </div>
    );
  }
}


const Exercise3 = () => (
    <React.Fragment>
      <h1>Exercise 3 - react render props</h1>
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse>{(coord, func) => <Coordinates coord={coord} func={func}/>}</Mouse>
        <Mouse>{(coord, func) => <Coordinates2 coord={coord} func={func}/>}</Mouse>
      </div>
    </React.Fragment>
);

export default Exercise3;
