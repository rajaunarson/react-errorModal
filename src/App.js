import React from 'react';
import './style.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      </div>
    </Router>
  );
}
