import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LinearWithValueLabel from "../ManageHome/home";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime : new Date().toLocaleString()
      
    };
  }

  componentDidMount() {
  }

  render() {
    
    return (
    
      
        <section className="section-dashboard__main" >
          
            <Route
              path="/">
               
            
            <LinearWithValueLabel
           
            ></LinearWithValueLabel>
            </Route>
         
        
        
      
        </section>
        
    
    );
  }
}

