import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 2
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;
