import React from 'react';


class WishList extends React.Component {
  render() {
    return (
      <div id="wishList">
       
        <h1 className="pad-top-md pad-bottom-sm">Ønskeliste</h1>
        <div className="introText ">
        Vi ønsker oss penger til bryllupsreise. Vi vet ikke helt hvor reisen går enda, og tar fatt på planleggingen etter bryllupet. Kontonummer: 3208 23 97948. 
        </div>
        <div className="introText pad-bottom-sm">
        Ellers ønsker vi oss gavekort på en opplevelse, en god restaurant eller lignende.
        </div>
        <div className="introText">
        Vi har også laget en ønskeliste hos designforevig.  
        </div>
        <div className="introText pad-bottom-sm">
        Den finner du ved å trykke <a href="https://www.designforevig.no/bryllupslister/">her</a> og skrive inn Christine Aadnekvam Ramsli eller Kjell Hagenes Christensen.
        </div>
        <div className="introText pad-bottom-sm">
        Vi ønsker oss også et par ting som ikke er mulig å lage online ønskeliste på. Derfor kan det være lurt å gi beskjed til Astrid - 97151692, om dere har kjøpt en av disse tingene. Da stryker hun det ut fra listen her. 
        </div>

<div className="introText">
        Elkjøp: 

        </div>
        <div className="introText">
        Høytaler: Sonos play:1 eller Sonos One. 


        </div>
        <div className="introText pad-bottom-md">

Høytaler: Sonos play:3

        </div>

      </div>
    );
  }
}

export default WishList;