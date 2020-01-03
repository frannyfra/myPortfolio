import React from "react";
import "./App.css";
import { Introduction } from "./components/introductionPage/Introduction";
import { Projects } from "./components/projectsPage/Projects";
import { ContactMe } from "./components/contactMe/ContactMe"; 
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Route exact path="/" component={Introduction} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact-me" component={ContactMe} />

    </Router>
  );
}

export default App;