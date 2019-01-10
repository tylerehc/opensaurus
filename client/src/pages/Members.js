// React & Redux
import React, { Component } from 'react';

// Components
import MemberList from '../components/MemberList';

// Styling
import { Container } from 'reactstrap';

class Members extends Component {
  render() {
    return (
      <div className="Tasks">
        <Container>
          <MemberList />
        </Container>
      </div>
    );
  }
}

export default Members;
