// React & Redux
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Components
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
        <h1>Welcome to Opensaurus</h1>
        <h2>An open source project management and governance software</h2>
        <p><a href="https://github.com/tylerehc/opensaurus" target="_blank" rel="noopener noreferrer">Github Repo</a></p  >
        </Container>
      </div>
    );
  }
}

export default Home;
