import React from 'react';


class Info extends React.Component {
  render() {
    return (
      <div id="info" className="info">
        <div>
          <h1 className="text-align-center pad-top-md">Informasjon</h1>
        </div>

          
            <div className="card">
              <div className="table-cell img-cell">
                <img src={require("./images/vielsen.png")} />
              </div>
              <div className="table-cell text-cell vertical-align-top">
                <h2>Vielsen</h2>
                <div className="pad-left-sm pad-right-sm pad-bottom-sm">
                Vielsen holdes i Laksevåg kirke den 08. september 2018 og starter kl. 13:30. Her er det lurt å være ute i litt god tid i forveien. Tradisjonelt er det vanlig at brudens slekt og venner sitter på venstre side, og brudgommens slekt og venner sitter til høyre. Vi tenker at folk sitter med hvem og hvor de vil, og at dette ikke er så nøye. 
Adresse: Damsgårdsveien 182, 5162 Bergen

                </div>
              </div>
            </div>
          


          
            
              <div className="card">       
                <div className="table-cell img-cell ">
                  <img src={require("./images/fest.jpg")} />
                </div>
              <div className="table-cell vertical-align-top text-cell" >
                <h2>Middag og feiring</h2>
                <div className="pad-left-sm pad-right-sm pad-bottom-sm">
                Dere blir fraktet med båt til Ran seilforening som ligger ved sjøkanten ved Angelvik på Sotra. Når dere ankommer blir det først servert en velkomstdrink og litt frukt i naustet. Deretter går vi inn i hovedbygget, til en fireretters middag, og her er det muligheter for taler eller andre innslag. Etter dette blir det kaker og kaffe, dans og moro. Da vil det bli servert øl, vin og cider. Adresse: Anglavikvegen 80, 5353 Straume.

                  </div>
              </div>
            </div>
         
          
         
            <div className="card">
              <div className="table-cell img-cell ">
                <img src={require("./images/toastmaster.png")} />
              </div>
              <div className="table-cell vertical-align-top text-cell">
                <h2>Toastmastere</h2>
                <div className="pad-left-sm pad-right-sm pad-bottom-sm">
                Vi er så heldige å ha to av våre favorittmennesker, Carina og Jarle, som toastmastere. Carina har vært venninne med Christine siden ungdomsskolen, og Carina og Jarle har blitt et veldig godt vennepar for oss begge to. 
Ønsker du/dere å holde tale, sang eller annet innslag? Ta kontakt med Carina (epost: carina.johanness1@gmail.com, tlf: 95823141) eller Jarle (epost: jarletingstad@gmail.com, tlf: 93406737).
Gi beskjed til toastmasterne <span className="underline">god tid</span> i forveien slik at de kan planlegge kvelden. Vi tenker at innslagene kan begrenses til maks 5 + - minutter per innslag. 


                  </div>
              </div>
            </div>
         
            <div className="card">
              <div className="table-cell img-cell">
                <img src={require("./images/transport.png")} />
              </div>
              <div className="table-cell vertical-align-top text-cell">
                <h2>Transport</h2>
                <div className="pad-left-sm pad-right-sm pad-bottom-sm">
                Etter vielsen og bildetaking på kirketrappen vil dere bli transportert til Ran seilforening i veteranbåten Granvin, som rommer alle mann. Båten venter på dere rett ved Laksevåg kirke, og transporten vil ta ca en time. I båten er det også muligheter for å kjøpe seg noe godt i glasset. 

Med transport hjem tenker vi at dere gjør litt som de selv ønsker, slik at dere kan gå hjem når dere vil. Baren stenger kl 01:30, og lokalet stenger kl 02:00. Det kan være lurt å avtale med noen en kjenner om transport hjem, eller å bestille taxi på formiddagen. Vi har nemlig hørt at det kan være litt vanskeligere å få taxi om en bestiller det kl 02:00, da det er travelt for taxiene og et stykke unna bykjernen.  

                </div>
              </div>
            </div>

            <div className="card">
              <div className="table-cell img-cell">
                <img src={require("./images/bilde.png")} />
              </div>
              <div className="table-cell vertical-align-top">
                <h2>Bildetaking</h2>
                <div className="pad-left-sm pad-right-sm pad-bottom-sm">
                  Vi ber vi pent om at det ikke vil bli tatt bilder akkurat under vielsesseremonien. Vi kommer til å ha fotograf under vielsen, og vil dele bildene med dere i ettertid. At dere tar bilder og filmer ellers under bryllupet, og deler på sosiale medier, er bare kjekt. Bruk emneknaggen #christineogkjell, for de som vil dele på sosiale medier. 
                  </div>
              </div>
            </div>

            <div className="card">
              <div className="table-cell img-cell">
                <img src={require("./images/su.png")} />
              </div>
              <div className="table-cell vertical-align-top text-cell">
                <h2>SU-dato</h2>
                <div className="pad-left-sm pad-right-sm pad-bottom-sm">
                Vi ønsker tilbakemelding på om du/dere kan bli med på feiringen av dagen vår, innen 1. juli. Dersom du har noen matallergier, er det viktig at du beskjed om dette i samme slengen. Ring eller send melding til Christine - 93813356 eller Kjell - 48219198. Vi hører fra deg!  

                  </div>
              </div>
            </div>
          
            <div className="card">
              <div className="table-cell img-cell">
                <img src={require("./images/antrekk.png")} />
              </div>
              <div className="table-cell vertical-align-top text-cell">
                <h2>Antrekk</h2>
                <div className="pad-left-sm pad-right-sm pad-bottom-sm">
                Ta på deg finstasen (dress, smoking, kort- eller lang kjole, fargerik eller fargeløs) og ha gjerne noen gode sko i bakhånd. Her skal det danses, for de som liker det.
                  </div>
              </div>
            </div>
          
            
          
  </div>
     
    );
  }
}

export default Info;