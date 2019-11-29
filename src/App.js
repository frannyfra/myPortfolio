import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Introduction from './components/Introduction';



function App() {
  return (
    <div className="App">  
      <NavBar />
      <Introduction />
      <About />
      <Projects />
    </div>
  );
}

export default App;
