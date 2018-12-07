import React from 'react';
import ReactDOM from 'react-dom';

import { Switch } from 'react-router';
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Tasks from './pages/Tasks';

const app = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/tasks/" component={Tasks}></Route>
          <Route path="/about/" component={About}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  </HashRouter>
, app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
