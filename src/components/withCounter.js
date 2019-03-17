import React, {Component} from 'react';

const withCounter = WrappedComponent => {
  class WithCounter extends Component {
    state = {
      count: 0
    };

    incrementCount = () =>
        this.setState(prevState => {
          return { count: prevState.count + 1 };
        });

    render() {
      return (
          <WrappedComponent
              count={this.state.count}
              handler={this.incrementCount}
          />
      );
    }
  }
  return WithCounter;
};

export default withCounter;