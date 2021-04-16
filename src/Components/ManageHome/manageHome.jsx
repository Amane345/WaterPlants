import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LinearWithValueLabel from "../ManageHome/home";

export default class Vpanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
<<<<<<< HEAD
      plants:[]
=======
     plants:[]
>>>>>>> 726047a471406c3d0d69702ab7077bca9a6ebf6d
    };
  }

 

  render() {
    
    return (
    
      
        <section className="section-dashboard__main" >
          <Switch>
            <Route
              path="/">
               
            
            <LinearWithValueLabel></LinearWithValueLabel>
            </Route>
        </Switch> 
        
        
      
        </section>
        
    
    );
  }
}

