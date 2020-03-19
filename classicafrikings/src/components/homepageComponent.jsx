import React, { Component } from 'react';

const logo = require('../images/CLASSIC AFRIKINGS LOGO.png.png');

class Home extends Component{
  state = {imgurl: 0};
  render() {
  return (<img src={logo} />);
}

}

export default Home;
