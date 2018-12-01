import React, {Component } from 'react';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';

class TaskModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: this.state.name,
      tokenValue: this.state.tokenValue,
      dollarValue: this.state.dollarValue,
      project: this.state.project
    };
    this.props.addTask(newTask);
    this.toggle();

  }

  render() {
    return(
      <div>
        <Container>
          <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={this.toggle}
          >Add Task</Button>
        </Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add Task to BRP</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="task">
                <Input
                  type="text"
                  name="name"
                  id="task"
                  placeholder="Task Name"
                  onChange={this.onChange}
                />
                <Input
                  type="number"
                  name="tokenValue"
                  id="tokens"
                  placeholder="Value (Tokens)"
                  onChange={this.onChange}
                />
                <Input
                  type="number"
                  name="dollarValue"
                  id="dollars"
                  placeholder="Value (USD)"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="project"
                  id="project"
                  placeholder="Project"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Add Task</Button>
                </Label>
              </FormGroup>
            </Form>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  task: state.task
})

export default connect(mapStatetoProps, {addTask})(TaskModal);
