import React, { Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getMembers } from '../actions/memberActions';
import PropTypes from 'prop-types';

class MemberDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { members } = this.props.member;
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Claim Task</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Member List</DropdownItem>
            {members.map(({ name }) => (
            <DropdownItem key="{_id}">{name}</DropdownItem>
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

export default connect(
  mapStatetoProps,
  { getMembers }
)(MemberDropdown);
