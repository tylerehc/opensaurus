// React & Redux
import React, { Component } from 'react';

// Components
import MemberList from '../components/MemberList';
import MemberModal from '../components/MemberModal';
import Login from '../components/Login';

// Styling
import { Container } from 'reactstrap';

class Members extends Component {
  render() {
    return (
      <div className="Tasks">
        <Container>
          <MemberModal />
          <MemberList />
          <Login history={this.props.history} />
        </Container>
      </div>
    );
  }
}

export default Members;
