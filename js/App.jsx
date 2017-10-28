import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Stories from './Stories';

const FourOhFour = () => <h1>404 Error. Please go home.</h1>;

const App = () => (
  <BrowserRouter>
  <div className= 'app'>
  <h1>Ten Top Hacker News Stories</h1>
    <Switch>
      <Route exact path='/' component={Stories} />
      <Route component={FourOhFour}/>
    </Switch>
  </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));