import React, {Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { loginMember } from '../actions/memberActions';

class Login extends Component {

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const member = {
      email: this.state.email,
      password: this.state.password

    };
    this.props.loginMember(member).then(response => {
      console.log('loggen in', this.props);
      
      this.props.history.replace('/tasks')
    }).catch(err => console.log('err during login'))
  }

  render() {
    return(
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="member">
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
            >Login</Button>
            </Label>
          </FormGroup>
        </Form>
      </Container>
    )
  }
};


const mapStatetoProps = state => ({
  member: state.member
})

export default connect(mapStatetoProps, {loginMember})(Login);
