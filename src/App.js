// import Nav from "./Components-TrangChu/Nav";
// import Slider from "./Components-TrangChu/Slider";
// import Content from "./Components-TrangChu/Content";
// import Content2 from "./Components-TrangChu/Content2";
// import Footer from "./Components-TrangChu/Footer";
import './App.css'
import React from "react"
import Intro from "./Intro";
import Home from "./Home";
import Procedure from "./Procedure";
import UsingInstructions from "./UsingInstructions";
import Contact from "./Contact";
import Login from './Login';
import Register from './Register';
import User from './User';
import PatientProfile from './PatientProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (

      <BrowserRouter>
              <Switch>

                <Route path="/" exact> 
                  <Home/>
                </Route>

                <Route path="/Intro">
                  <Intro/>
                </Route>

                <Route path="/Procedure">
                 <Procedure/>
                </Route>

                <Route path="/UsingInstructions">
                 <UsingInstructions/>
                </Route>

                <Route path="/Contact">
                 <Contact/>
                </Route>

                <Route path="/Login">
                 <Login/>
                </Route>

                <Route path="/Register">
                 <Register/>
                </Route>

              </Switch>
              
        </BrowserRouter>

      

    // <>
    // <Nav/>  
     
    // <Slider/>

    // <Content/>

    // <Content2/>

    // <Footer/>

    // </>
  );
}

export default App;
