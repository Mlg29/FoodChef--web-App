import React from 'react';
import Homepage from "../src/pages/homepage"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import FoodItem from './component/Food-item';
import Testimony from './component/Testimony';
import Contact from './component/Contact';
import Team from './component/Team';
import Service from './component/Service';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/team" component={Team} /> 
          <Route exact path="/our-food" component={FoodItem} />
          <Route exact path="/testimonial" component={Testimony} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
