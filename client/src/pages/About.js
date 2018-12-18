// React & Redux
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Components

class About extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <h2>Summary</h2>
          <p>Opensaurus is a project management and collaboration incentive
            platform for teams. It eleminates complexity and common flaws of
            traditional incentive models, like owners equity, investor equity,
            and stock options. By avoiding these common pitfalls, Opensaurus&apos;
            token model allows teams to focus on their primary objective:
            creating.</p>
        </Container>
      </div>
    );
  }
}

export default About;
