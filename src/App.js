import React, { useState } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import ManageHome from "./Components/ManageHome/manageHome";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./Components/NavBar/NavBar";


function App() {
  const [page,setPage] = useState('none');
  
  return (
    <Router>
      <NavBar activePage={(name)=>setPage(name)}/>
      
      
      
      <ToastContainer />
      
          <Switch>
            <Route path="/" component={ManageHome} />
           
           
            
            
            
           
          </Switch>
       
    </Router>
  );
}

export default App;
