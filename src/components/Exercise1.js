import React, { Component } from "react";

// Create a Context object
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Alex",
    age: 26,
    occupation: "frontend-developer"
  };

  render() {
    return (
      // Allows consuming components to subscribe to context changes.
      // Accepts a value prop to be passed to consuming components that are descendants of this Provider.
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = () => (
  <div className="family">
    <p>Family component</p>
    <Person />
  </div>
);

const Person = () => (
  // This lets you subscribe to a context within a function component. Requires a function as a child.
  <div className="person">
    <MyContext.Consumer>
      {value => (
        <React.Fragment>
          <p>Person component</p>
          <p>Name: {value.state.name}</p>
          <p>Age: {value.state.age}</p>
          <p>Occupation: {value.state.occupation}</p>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  </div>
);

class Exercise1 extends Component {
  render() {
    return (
      <MyProvider>
        <h1>Exercise 1 - react context</h1>
        <div className="app">
          <p>App component</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default Exercise1;
