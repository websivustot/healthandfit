import React, { Component } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink  
} from 'reactstrap';
import Main from './components/Main';
import {connect} from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        list:[],
        token:"",
        isLogged:false,
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
                          <NavLink href="/user">User</NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
          <Main isLogged={this.state.isLogged}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isLogged:state.isLogged
    }
  }

export default connect(mapStateToProps)(App);
