import React, {useState} from "react";
import Logo from "./../../Images/leaf.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import alrt from "../../Images/alert.png";

export default function NavBar(props) {
  
  
  
    
    return (
    <React.Fragment>
    <nav className="navigation">
      <Link className="navigation__brand" to="/login">
          <img src={Logo} style={{width:80,height:80}} className="navigation__brand-logo" alt="" />
          <span className="navigation__brand-name">Home Plants</span>
        </Link>
      <ul className="navigation__list">
        
        <li className="navigation__item">
          
          <a href="#" ><img src={alrt} style={{width:30,height:30}}></img></a>
        </li>
      </ul>
    </nav>
    
    </React.Fragment>

   );
  }

