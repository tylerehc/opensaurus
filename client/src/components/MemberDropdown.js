import React, { Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getMembers } from '../actions/memberActions';
import { updateTask } from '../actions/taskActions';
import PropTypes from 'prop-types';

class MemberDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
  }
  state = {
    dropdownOpen: false,
    // not sure if name is needed
    name: ''
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  // handleTaskUpdate(name) {
  //   const taskId  = this.props.taskId;
  //   this.props.updateTask(taskId, {owner: name})
  // }

  handleTaskUpdate (name) {
    const {taskId}  = this.props;
    this.props.updateTask(taskId, {owner: name})
  }

  render() {
    const { members } = this.props.member;
      return (
        <div>
          <Dropdown isOpen={this.state.dropdownOpen} onClick={this.toggle}>
            <DropdownToggle caret >Claim Task</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Member List</DropdownItem>
              {members.map(({ name }) => (
              <DropdownItem key="{_id}" onClick={() => this.handleTaskUpdate(name)}>{name}</DropdownItem>
                ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      );
  }
}

MemberDropdown.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
  member: state.member
});

const mapDispatchToProps = {
  updateTask: updateTask,
  getMembers
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(MemberDropdown);
