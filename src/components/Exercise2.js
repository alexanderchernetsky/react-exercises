import React, { Component, useContext } from "react";

// Create a Context object
const MyContext = React.createContext();

const Family = () => (
  <div className="family">
    <p>Family component</p>
    <Person />
  </div>
);

const Person = () => {
  const value = useContext(MyContext);
  return (
    <div className="person">
      <React.Fragment>
        <p>Person component</p>
        <p>Name: {value.state.name}</p>
        <p>Age: {value.state.age}</p>
        <p>Occupation: {value.state.occupation}</p>
      </React.Fragment>
    </div>
  );
};

class Exercise2 extends Component {
  state = {
    name: "Alex",
    age: 26,
    occupation: "frontend-developer"
  };

  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        <h1>Exercise 2 - react context with hooks</h1>
        <div className="app">
          <p>App component</p>
          <Family />
        </div>
      </MyContext.Provider>
    );
  }
}

export default Exercise2;
