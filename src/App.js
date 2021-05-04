import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div  style={{backgroundColor:'darkolivegreen'}}>
      
     <Router>
     <Navbar></Navbar>
      <div>
       

      
        <Switch>
          <Route path="/contact">
           <Contact></Contact>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
