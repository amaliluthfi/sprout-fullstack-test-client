import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Home,
  Login,
  Register
} from './pages'

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/register">
        <Register />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
