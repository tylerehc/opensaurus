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
import { addMember } from '../actions/memberActions';

class MemberModal extends Component {
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
    const newMember = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password

    };
    this.props.addMember(newMember);
    this.toggle();
  }

  render() {
    return(
      <div>
        <Container>
          <Button
            color="dark"
            style={{marginBottom: '1rem'}}
            onClick={this.toggle}
          >Add Member</Button>
        </Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Join BRP</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="member">
                <Input
                  type="text"
                  name="name"
                  id="member"
                  placeholder="Your Name"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Join</Button>
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
  member: state.member
})

export default connect(mapStatetoProps, {addMember})(MemberModal);
