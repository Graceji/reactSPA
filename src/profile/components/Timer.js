import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
    this.timer = this.timer.bind(this);
  }

  timer() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        This page has been opened for:
        <span className="time" style={{color: 'red'}}>{this.state.seconds}</span>
        seconds.
      </div>
    );
  }
}

export default Timer;