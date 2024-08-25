import './App.css';
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Landing__Page, AboutMe__Page, ContactMe__Page } from './containers'
import { Showcase, Navbar } from './components'

gsap.registerPlugin(ScrollTrigger); 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing__Page />
      <Showcase />
      <AboutMe__Page />
    </div>
  );
}

export default App;
