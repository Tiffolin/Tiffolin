import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./component/navbar/navbar";
import Splash from "./component/splash/splash";
import About from "./component/about/about";
import Webdesigns from "./component/webdesigns/webdesign";
import AppProjects from "./component/appprojects/appprojects";
import Videos from "./component/videos/videos";

// import Contact from "./component/Contact";
import Footer from "./component/footer/footer";

function App() {
  return (
    <BrowserRouter>
      {/* Always visible layout */}
      <Route exact path="/" component={Splash} />
      <Navbar />

      {/* Pages */}
      
      <Route exact path="/about" component={About} />
      <About />
     <Route exact path="/videos" component={Videos} />
      <Videos />
      <Route exact path="/webdesigns" component={Webdesigns} />
      <Webdesigns />
      <Route exact path="/appprojects" component={AppProjects} />
      <AppProjects />
 
      {/* <Route exact path="/skills" component={Skills} /> */}
      {/* <Route exact path="/contact" component={Contact} /> */}

      {/* Always visible layout */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

