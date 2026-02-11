import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layout
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Pages
import Splash from "./components/splash/Splash";
import About from "./components/about/About";
import AppProjects from "./components/app-projects/AppProjects";
import WebDesign from "./components/web-designs/WebDesign";
import Videos from "./components/videos/Videos";

import "./styles/globals.css";
import "./styles/snowflakes.css";


function App() {
  return (
    <Router>
   
      <Navbar />

      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/about" component={About} />
        <Route path="/videos" component={Videos} />
        <Route path="/webdesigns" component={WebDesign} />
        <Route path="/appprojects" component={AppProjects} />
      </Switch>
      <Splash />
      <About />
      <Videos />
      <WebDesign />
      <AppProjects /> 


      <Footer />
    </Router>
  );
}

export default App;
