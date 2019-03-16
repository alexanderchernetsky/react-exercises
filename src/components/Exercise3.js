import React, { Component } from "react";

class Coordinates extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div className="coordinates">
        <p>Coordinates component</p>
        Position: left: {mouse.x}, top: {mouse.y}
      </div>
    );
  }
}

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
      <div className="mouse" onMouseMove={this.handleMouseMove}>
        <p>Mouse component</p>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.children(this.state)}
      </div>
    );
  }
}

class Exercise3 extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Exercise 3 - react render props</h1>
        <div className="app">
          <p>App component</p>
          <p>
            The term “render prop” - a technique for sharing code between React
            components using a prop whose value is a function.
          </p>
          <p>
            A render prop is a function prop that a component uses to know what
            to render. It’s important to remember that just because the pattern
            is called “render props” you don’t have to use a prop named render
            to use this pattern. In fact, any prop that is a function that a
            component uses to know what to render is technically a “render
            prop”.
          </p>
          <h1>Move the mouse around!</h1>
          <Mouse>{mouse => <Coordinates mouse={mouse} />}</Mouse>
        </div>
      </React.Fragment>
    );
  }
}

export default Exercise3;
