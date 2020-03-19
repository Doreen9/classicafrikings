import React, { Component } from 'react';
import logo from '../images/CLASSIC AFRIKINGS LOGO.png.png'

class Home extends Component{
  state = {imgurl: 0};
  render() {
  return (<img src={logo} />);
}

}

export default Home;
