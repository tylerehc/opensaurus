import React from 'react';
import ReactDOM from 'react-dom';

import { Switch } from 'react-router';
import { HashRouter, Route, BrowserRouter, withRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import Members from './pages/Members';
import BRPTasks from './pages/BRPTasks';
import Networks from './pages/Networks';
import AboutBRP from './pages/AboutBRP';

const app = document.getElementById('root');


class SecureRoute extends React.Component {

  render() {
    const token = localStorage.getItem('token');
    if(!token || token !== undefined) {
      localStorage.setItem('redirect', 'NOT_LOGGED_IN');
      this.props.history.replace('/login');
      return null;
    } else {
      return <Route path="/networks/brp/tasks/" component={BRPTasks}></Route>
    }
  }

}

const SecureRouteWithRouter = withRouter(SecureRoute)

ReactDOM.render(
  <HashRouter>
    <Layout>
      <BrowserRouter>
        <Switch>
          <SecureRouteWithRouter path="/networks/brp/tasks/" component={BRPTasks}></SecureRouteWithRouter>
          <Route path="/networks/brp/about/" component={AboutBRP}></Route>
          <Route path="/networks/" component={Networks}></Route>
          <Route path="/members/" component={Members}></Route>
          <Route path="/login/" component={LoginPage}></Route>
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
