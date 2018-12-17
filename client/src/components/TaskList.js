import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { getTasks, deleteTask } from '../actions/taskActions';
import MemberDropdown from './MemberDropdown';
import CompleteTaskModal from './CompleteTaskModal';


class TaskList extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  onDeleteClick = (id) => {
    this.props.deleteTask(id);
  }

  render() {
    const { listOwner }  = this.props
    const { taskComplete } = this.props

    const listOwnerTasks = this.props.task.tasks.filter(task => task.owner === listOwner && task.complete === taskComplete)
    return(
      <Container style={{marginBottom: 50}}>
        <ListGroup>
          <TransitionGroup className="task-list">

            <h4>{listOwner.length > 0 ? listOwner : null}</h4>
            {listOwnerTasks.map(({ _id, name, owner, tokenValue, dollarValue, project }) => (
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
                    <div className="inline"><div className="field-label">Value (BRPT):</div> {tokenValue}</div>
                    <div className="inline"><div className="field-label">Value (USD):</div> {dollarValue}</div>
                    <div className="inline"><div className="field-label">Project:</div> {project}</div>
                    <div className="float-right inline"><MemberDropdown taskId={_id} /></div>
                    <div className="float-right inline"><CompleteTaskModal taskId={_id} taskOwner={owner} taskProject={project} taskTokenValue={tokenValue} /></div>
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
