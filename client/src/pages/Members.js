// React & Redux
import React, { Component } from 'react';

// Components
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import MemberList from '../components/MemberList';
import MemberModal from '../components/MemberModal';
import ClaimedTaskList from '../components/ClaimedTaskList';

// Styling
import { Container } from 'reactstrap';

class Tasks extends Component {
  render() {
    return (
      <div className="Tasks">
        <Container>
          <MemberModal />
          <MemberList />
        </Container>
      </div>
    );
  }
}

export default Tasks;
