import React from 'react';


class Program extends React.Component {
  render() {
    return (
    
       
      <div id="program" className="program">
        <h1>Program for dagen</h1>
    
    <div className="row text-align-center">
    <img className="program-icon" src={require("./images/icons/023-church.svg")}/>
      <div className="program-info odd">
        <div className="time"> 
          Kl 13:20
        </div> 
        <div className="description"> 
          Oppmøte i Laksevåg Kirke
        </div> 
      </div>
      
      
    </div>
    <div className="row text-align-center">
    <img className="program-icon" src={require("./images/icons/011-engagement-ring.svg")}/>
    <div className="program-info even">
        <div className="time"> 
          Kl 13:30
        </div> 
        <div className="description"> 
        Vielsen starter. 
        </div> 
      </div>
      
    </div>
    <div className="row text-align-center">
    <img className="program-icon" src={require("./images/icons/boat.svg")}/>
    <div className="program-info odd">
        <div className="time"> 
          Kl 14:45
        </div> 
        <div className="description"> 
          Transport til festen fra Laksevåg kirke.
        </div> 
      </div>
      
    </div>

<div className="row text-align-center">
    <img className="program-icon" src={require("./images/icons/champ.svg")}/>
    <div className="program-info even">
        <div className="time"> 
          Kl 15:45
        </div> 
        <div className="description"> 
         Mingling og velkomstdrink
        </div> 
      </div>
      
    </div>

    <div className="row text-align-center">
    <img className="program-icon" src={require("./images/icons/001-cutlery.svg")}/>
    <div className="program-info odd">
        <div className="time"> 
          Kl 17:00
        </div> 
        <div className="description"> 
          Middagen begynner
        </div> 
      </div>
      
    </div>
    <div className="row text-align-center">
    <img className="program-icon" src={require("./images/icons/002-people.svg")}/>
    <div className="program-info even">
        <div className="time"> 
          Kl 21:00
        </div> 
        <div className="description"> 
          Fest
        </div> 
      </div>
      
    </div>
    </div>
    
    
    );
  }
}

export default Program;