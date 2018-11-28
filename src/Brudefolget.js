import React from 'react';


class Brudefolget extends React.Component {
    render() {
      return (
        <div id="brudefolget">
             <h1 className="pad-top-md">Brudefølget</h1>
             <div className="row"> 
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center">          
                <img className="" src={require("./images/brudefolget/eli.png")} />
                <p>Brudens mor: Eli Aadnekvam</p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center"> 
                <img className="" src={require("./images/brudefolget/hilde.png")} />
                <p>Brudgommens mor: Hilde Hagenes Christensen</p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center"> 
             <img className="" src={require("./images/brudefolget/frode.png")} />
             <p>Brudens far: Frode Ramsli</p>
             </div>

             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center"> 
             <img className="" src={require("./images/brudefolget/ole.png")} />
             <p>Brudgommens far: Ole Møller Christensen</p>
             </div>

             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center"> 
             <img className="" src={require("./images/brudefolget/cecilie.png")} />
             <p>Brudens forlover: Cecilie Aadnekvam Ramsli</p>
             </div>

             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center"> 
                <img className="" src={require("./images/brudefolget/astrid.png")} />
                <p>Brudens forlover: Astrid Johnsen Tessem</p>
             </div>

             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center"> 
                <img className="" src={require("./images/brudefolget/peder.png")} />
                <p>Brudgommens forlover: Peder Møller Christensen</p>
             </div>

             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-align-center"> 
                <img className="" src={require("./images/brudefolget/siril.png")} />
                <p>Brudgommens søster: Siril Marie Christensen</p>
             </div>

             </div>
             
        </div>
      );
    }
  }
  
  export default Brudefolget;