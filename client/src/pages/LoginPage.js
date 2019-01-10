// React & Redux
import React, { Component } from 'react';

// Components
import Login from '../components/Login';

// Styling
import { Container } from 'reactstrap';

class LoginPage extends Component {
  render() {
    return (
      <div className="Tasks">
        <Container>
          <Login history={this.props.history} />
        </Container>
      </div>
    );
  }
}

export default LoginPage;
