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
                        <h1>Be healthy and fit!</h1>
                        <img src={Logo} alt="Health & Fit" className="img-fluid mb-4 logo"/>
                        <p className="lead">Some text about the our tool (Maryam and Jimi are prepareing this). How it works: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Curabitur magna dui, congue id dapibus quis, ultricies ut elit. Integer tempus ultricies odio, at scelerisque dolor condimentum vel. Curabitur et sollicitudin tortor, a venenatis lorem.</p>
                        <p>Etiam suscipit nunc lectus, in fermentum velit condimentum vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tempor nisl. Nulla consequat, erat quis finibus hendrerit, mauris quam convallis lectus.</p>
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
