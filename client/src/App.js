
// React & Redux
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

// Components
import AppNavbar from './components/AppNavbar';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import MemberList from './components/MemberList';
import MemberModal from './components/MemberModal';
import ClaimedTaskList from './components/ClaimedTaskList';


// Styling
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <TaskModal />
          <TaskList listOwner={'Unclaimed'} taskComplete={false}/>
          <MemberModal />
          <MemberList />
          <h2>INCOMPLETED TASKS</h2>
          <ClaimedTaskList taskComplete={false} />
          <h2>COMPLETED TASKS</h2>
          <ClaimedTaskList taskComplete={true} />
        </Container>
      </div>
    </Provider>
    );
  }
}

export default App;
