import React from 'react';
import MenuScript from './scripts/menu.js';

class Header extends React.Component {
  render() {
    return (
      <div className="position-absolute">
        <header>

      <div className="desktopMenu is-hidden-smartphone">

        <a className="scrollBtn" data-scrollTo="home"><span>Hjem</span></a> 
        <a className="scrollBtn" data-scrollTo="program"><span>Program</span></a>
        <a className="scrollBtn" data-scrollTo="story"><span>Vår historie</span></a>
        <a className="scrollBtn" data-scrollTo="info"><span>Informasjon</span></a>
        <a className="scrollBtn" data-scrollTo="wishList"><span>Ønskeliste</span></a>
        <a className="scrollBtn" data-scrollTo="brudefolget"><span>Brudefølget</span></a>
        

      </div>  

      <div className="is-visible-smartphone" id="menuToggle">
        
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    
    <ul id="menu">
     
    <a className="scrollBtn" data-scrollTo="home"><li>Hjem</li></a>
    <a className="scrollBtn" data-scrollTo="program"><li>Program</li></a>
    <a className="scrollBtn" data-scrollTo="story"><li>Vår historie</li></a>   
    <a className="scrollBtn" data-scrollTo="info"><li>Informasjon</li></a>
    <a className="scrollBtn" data-scrollTo="wishList"><li>Ønskeliste</li></a>
    <a className="scrollBtn" data-scrollTo="brudefolget"><li>Brudefølget</li></a>
    
    
    </ul>
  </div>

</header>
          

  

        
      </div>
    );
  }
}

export default Header;