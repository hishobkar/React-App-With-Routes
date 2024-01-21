import logo from './logo.svg';
import './App.css';

import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';

import NavbarComponent from './components/NavbarComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import Custom1Component from './components/Custom1Component';
import Custom2Component from './components/Custom2Component';

function App() {
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
        <NavbarComponent />
        
        {
        /* <AboutComponent/>
        <ContactComponent/>
        <Custom1Component/>
        <Custom2Component/> */
        
        // Comment all these componenets 

        }

        {/* <Switch>
          <Route path="/" exact component={AboutComponent} />
          <Route path="/contact" component={ContactComponent} />
          <Route path="/custom1" component={Custom1Component} />
          <Route path="/custom2" component={Custom2Component} />
        </Switch> */}
        <Routes>
          <Route path="/" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/custom1" element={<Custom1Component />} />
          <Route path="/custom2" element={<Custom2Component />} />
        </Routes>
    </Router>
  );
}

export default App;
