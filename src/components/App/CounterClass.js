import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Giá Trị: {this.state.count}</h1>
        <button onClick={this.increase}>Tăng</button>
      </div>
    );
  }
}

export default CounterClass;