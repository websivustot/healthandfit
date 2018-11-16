import React, { Component } from 'react';
import Logo from './logo.png';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
}
toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
  render() {
    return (
      <div>
          <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">HEALTH & FIT</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                          <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="#">User</NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
          <Jumbotron className="bg-white">
              <Container>
                  <Row>
                      <Col className="text-center mb-4">
                        <img src={Logo} alt="Health & Fit" className="img-fluid mb-4 logo"/>
                        <h1>Welcome to us!</h1>
                        <p className="lead">This app helps you to be healthier and fit.</p>
                        <p>This is development branch - you should commit here</p>
                        <Button
                            tag="a"
                            color="success"
                            size="large"
                            href="#"
                            className="mt-4"                                                                   
                        >
                        Become Healthier & Fit
                        </Button>
                          
                      </Col>
                  </Row>
              </Container>
          </Jumbotron>
      </div>
    );
  }
}

export default App;
