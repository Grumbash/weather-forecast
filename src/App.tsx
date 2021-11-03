import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Weather } from './features/weather/Weather';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Weather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
