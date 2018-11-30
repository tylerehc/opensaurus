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
import { updateTask } from '../actions/taskActions';

class CompleteTaskModal extends Component {
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
    const { taskId } = this.props
    const { hours } = this.state
    this.props.updateTask(taskId, {hours: hours});
    this.toggle();

  }

  render() {
    return(
      <div>
        <Container>
          <Button
            color="success"
            style={{marginBottom: '2rem'}}
            onClick={this.toggle}
          >Complete</Button>
        </Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Mark Task as Complete</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="task">
                <Input
                  type="number"
                  name="hours"
                  id="hours"
                  placeholder="Hours Logged"
                  onChange={this.onChange}
                />
                <Button
                  color="success"
                  style={{marginTop: '2rem'}}
                  block
                >Mark Complete</Button>
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

const mapDispatchToProps = {
  updateTask: updateTask
};

export default connect(mapStatetoProps, mapDispatchToProps)(CompleteTaskModal);
