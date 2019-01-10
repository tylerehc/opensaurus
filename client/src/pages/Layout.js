// React & Redux
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

// Components
import AppNavbar from '../components/AppNavbar';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Layout extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="Layout">
        <AppNavbar />
        <main>{this.props.children}</main>
      </div>
    </Provider>
    );
  }
}

export default Layout;
