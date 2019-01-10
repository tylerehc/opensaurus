// React & Redux
import React, { Component } from 'react';

// Components
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import ClaimedTaskList from '../components/ClaimedTaskList';


// Styling
import { Container } from 'reactstrap';

class BRPTasks extends Component {
  render() {
    return (
      <div className="BRPTasks">
        <Container>
          <TaskModal />
          <h2>AVAILABLE TASKS</h2>
          <TaskList listOwner={''} taskComplete={false}/>
          <h2>INCOMPLETE TASKS</h2>
          <ClaimedTaskList taskComplete={false} />
          <h2>COMPLETED TASKS</h2>
          <ClaimedTaskList taskComplete={true} />
          <h2>ADD MEMBERS</h2>

        </Container>
      </div>
    );
  }
}

export default BRPTasks;
