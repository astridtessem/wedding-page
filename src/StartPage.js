import React from 'react';
import countdown from './scripts/countdown.js';

class StartPage extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="startpage">
        <div className="frontpage">

        <div className="is-visible-smartphone image-container text-align-center full-width">
          <img className="is-visible-smartphone mainImage" src={require("./images/forside2.jpg")} />
          </div>
          <h1 className="main-heading is-visible-smartphone">Christine & Kjell</h1>
          <h1 className="sub-heading is-visible-smartphone"> Vi gifter oss 8. september 2018</h1>
          
          
        <div className="introText big">Velkommen til bryllup 08.09.18!</div>
        <div className="introText grey">
          Vi samler familie og venner til bryllup, og det som vil bli en stor dag for oss. Vi gleder oss veldig! 
          På denne nettsiden har vi samlet alt av informasjon som kan være greit å vite på forhånd. Den er ikke helt ferdigstilt enda, så det kan være informasjonen blir oppdatert underveis. 
        </div>
        <p id="countdown"></p>
        <p id="countdown-text"></p>
          <div className="is-hidden-smartphone image-container text-align-center full-width margin-bottom-xl">
          <img className="is-hidden-smartphone mainImage" src={require("./images/forsidewide2.jpg")} />
          </div>

        </div>
        
        </div>
      </div>
    );
  }
}

export default StartPage;