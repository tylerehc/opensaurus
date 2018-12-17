import React, {Component} from 'react';
import authMember from '../actions/memberActions';


export default (ComposedComponent) => {

  return class AuthenticatedComponent extends Component {

    constructor(props) {
      super(props);
      authMember('test');
    }



    static willTransitionTo(transition) {
      // This method is called before transitioning to this component. If the user is not logged in, we’ll send him or her to the Login page.
      if (!this.state.isLoggedIn()) {
        this.props.history.replace('/')
      }
    }


    // Here, we’re subscribing to changes in the LoginStore we created before. Remember that the LoginStore is an EventEmmiter.
    componentDidMount() {

      this.state.addChangeListener(this.onChange.bind(this));
    }

    // After any change, we update the component’s state so that it’s rendered again.
    onChange() {
      this.setState(this.getLoginState());
    }

    componentWillUnmount() {
        this.state.removeChangeListener(this.onChange.bind(this));
    }

    render() {
      return (
      <ComposedComponent
        {...this.props}
        userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
};
