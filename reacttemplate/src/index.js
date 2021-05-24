import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Homee from './home1';
import Register from './register';

ReactDOM.render(
  <Router>
  <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/home1" exact component={Homee}/>
      <Route path="/Register" exact component={Register}/>
  </Switch>

</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
