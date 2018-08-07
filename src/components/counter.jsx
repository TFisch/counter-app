import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: 'https://picsum.photos/200'
  };

  render() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';

    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="image" />
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-small">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
