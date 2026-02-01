import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Splash from "./component/Splash";
import About from "./component/About";
import Projects from "./component/projects";
// import Skills from "./component/Skills";
// import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Always visible layout */}
      <Route exact path="/" component={Splash} />
      <Navbar />

      {/* Pages */}
      
      <Route exact path="/about" component={About} />
      <About />
      
      <Route exact path="/projects" component={Projects} />
      <Projects />
      {/* <Route exact path="/skills" component={Skills} /> */}
      {/* <Route exact path="/contact" component={Contact} /> */}

      {/* Always visible layout */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

