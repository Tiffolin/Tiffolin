import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Splash from "./component/Splash";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/projects";
// import Skills from "./component/Skills";
// import Contact from "./component/Contact";
import Footer from "./component/Footer";

class App extends Component{
  render() {
    return(
      <div id='App'>
        <BrowserRouter>        
          <div>
            <Route exact path="/" component={Splash} />
            <Navbar />
            <About />
            <Projects />
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
            {/* <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Contact" component={Contact} /> */}
            


            <Footer/>
          </div>
      </BrowserRouter>   
    </div>
    
    );
  }
}

export default App;

