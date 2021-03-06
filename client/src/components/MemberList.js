import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getMembers, deleteMember } from '../actions/memberActions';
import { getTokens } from '../actions/tokenActions';
import PropTypes from 'prop-types';

class MemberList extends Component {
  componentDidMount() {
    this.props.getMembers();
    this.props.getTokens();
  }

  onDeleteClick = (id) => {
    this.props.deleteMember(id);
  }

  render() {
    const { members } = this.props.member;
    const { tokens } = this.props.token;

    // count for each member
    const tokenStore = {}
    tokens.forEach(token => {
      if (token.tokenOwner in tokenStore)  {
        tokenStore[token.tokenOwner] += 1;
      } else {
        tokenStore[token.tokenOwner] = 1;
      }
    })

    //
    return(
      <Container style={{marginBottom: 50}}>
        <ListGroup>
          <TransitionGroup className="member-list">
            {members.map(
              ({ _id, name }) => (
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

                    <div className="inline"><div className="field-label">Member:</div> {name}</div>
                    <div className="inline"><div className="field-label">Token count:</div> {tokenStore[name] || 0}</div>
                    <div></div>
                  </ListGroupItem>
                </CSSTransition>
            ))}
          </TransitionGroup>

        </ListGroup>

      </Container>
    )
  }
}

MemberList.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
  member: state.member,
  token: state.token
});

export default connect(
  mapStatetoProps,
  { getMembers, deleteMember, getTokens }
)(MemberList);
