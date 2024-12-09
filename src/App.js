import "./App.css";
import React from "react";
import SignUp from "./Pages/SignUp";
import Form from "./Pages/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>
       <Routes>
       <Route exact path="/" element={ <SignUp key="signup"/>}></Route>
       <Route exact path="/form" element={ <Form key="form" title="Multi-Step Process Form Assignment"/>}></Route>
        </Routes>
      </Router> 
  </>
  );
}

export default App;
