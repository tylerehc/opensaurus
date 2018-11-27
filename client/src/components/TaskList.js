import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getTasks, deleteTask } from '../actions/taskActions';
import MemberDropdown from './MemberDropdown';
import PropTypes from 'prop-types';

class TaskList extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  onDeleteClick = (id) => {
    this.props.deleteTask(id);
  }

  render() {
    const { tasks } = this.props.task;
    return(
      <Container style={{marginBottom: 50}}>
        <ListGroup>
          <TransitionGroup className="task-list">
            {tasks.map(({ _id, name, tokenValue }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                    <div className="inline"><div className="field-label">Task:</div> {name}</div>
                    <div className="inline"><div className="field-label">Value (tokens):</div> {tokenValue}</div>
                    <div className="float-right inline"><MemberDropdown /></div>
                  </ListGroupItem>
                </CSSTransition>
            ))}
          </TransitionGroup>

        </ListGroup>

      </Container>
    )
  }
}

TaskList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
  task: state.task
});

export default connect(
  mapStatetoProps,
  { getTasks, deleteTask }
)(TaskList);
