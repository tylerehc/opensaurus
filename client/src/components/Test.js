import React, {Component} from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';

export default AuthenticatedComponent(class Test extends Component {
  render() {
     // Here, we display the user information
    return (<h1>Hello </h1>);
  }
});
