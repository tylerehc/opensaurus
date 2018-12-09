// React & Redux
import React, { Component } from 'react';

// Components
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import ClaimedTaskList from '../components/ClaimedTaskList';

// Styling
import { Container } from 'reactstrap';

class Tasks extends Component {
  render() {
    return (
      <div className="Tasks">
        <Container>
          <TaskModal />
          <h2>TASKS</h2>
          <TaskList listOwner={'Unclaimed'} taskComplete={false}/>
          <h2>INCOMPLETED TASKS</h2>
          <ClaimedTaskList taskComplete={false} />
          <h2>COMPLETED TASKS</h2>
          <ClaimedTaskList taskComplete={true} />
        </Container>
      </div>
    );
  }
}

export default Tasks;
