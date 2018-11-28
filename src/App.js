import React, { Component } from 'react';
import Header from './Header.js'
import StartPage from './StartPage.js'
import Program from './Program.js'
import Timeline from './Timeline.js'
import Info from './Info.js'
import WishList from './WishList.js'
import Brudefolget from './Brudefolget.js'

import './styling/css/style.css'
import ScrollScript from './scripts/scroll.js';

const initialState = {};

class App extends Component {

  constructor() {
    super();
    this.state = {
      activePage: "startpage",
    };
  }

  setActivePage(activePage){
    this.state.activePage = activePage
  }

  render() {
    return (
      <div>
        <Header/>
        <StartPage/>   
        <Program/>
        <Timeline/>
        <Info/>
        <WishList/>
        <Brudefolget/>
        
      </div>
    );
  }
}

export default App;
