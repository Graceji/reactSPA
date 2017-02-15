import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col: '#666'
    };
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  getRandomColor() {
    // this.setState({
    //   col: `#00000${(Math.random()*0x1000000<<0.toString(16)).slice(-6)}`
    // });
    this.setState({ 
        col: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
    });
  }

  // getRandomColor = () => {
  //   this.setState({
  //     col: `#00000${(Math.random()*0x1000000<<0).toString(16).slice(-6)}`
  //   });
  // }

  componentDidMount() {
    this.interval = setInterval(this.getRandomColor, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let colorStyle = {
      color: this.state.col,
      textAlign: 'center',
      fontSize: 70,
      width: 200,
      margin: '16% auto',
      tranisition: 'color 1s'
    };

    return (
      <h1 className="animated rotateIn" style={colorStyle}>
        你&nbsp;好
      </h1>
    );
  }
}

export default Welcome;