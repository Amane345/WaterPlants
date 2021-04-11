import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LinearWithValueLabel from "../ManageHome/home";

export default class Vpanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
     plants:[]
    };
  }

  componentDidMount() {
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

