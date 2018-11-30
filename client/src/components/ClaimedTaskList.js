import React, { Component} from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import TaskList from './TaskList';

import { getMembers } from '../actions/memberActions';

class ClaimedTaskList extends Component {
  componentDidMount() {
    this.props.getMembers();
  }
  render() {
    const { members } = this.props.member
    const { taskComplete } = this.props
    return(
      <div>
        {members.map(({ name }) => (
          <TaskList listOwner={name} taskComplete={taskComplete}/>
        ))}
      </div>
    )
  }
}

const mapStatetoProps = (state) => ({
  member: state.member
});

export default connect(
  mapStatetoProps,
  { getMembers }
)(ClaimedTaskList);
