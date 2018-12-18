import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component{
    state = {
      isOpen: false
    };

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    render() {
      return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand href="/">Opensaurus</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/about/">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/networks/">
                      Networks
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/members/">
                      Members
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
  }

export default AppNavbar;
