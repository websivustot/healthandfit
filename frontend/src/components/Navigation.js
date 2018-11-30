import React, { Component } from 'react';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink  
} from 'reactstrap';
import UserIcon from './UserIcon';
import {login,logout} from '../actions/loginActions';
import {connect} from 'react-redux';

class Navigation extends Component {

    logout = (event) => {
        event.preventDefault();
        this.props.dispatch(logout());
    }

    login = () => {
        this.props.dispatch(login());
    }

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
    //console.log(this.props,sessionStorage.getItem("isLogged"));
    return (      
          <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">HEALTH & FIT</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                          <NavLink href="/">Home</NavLink>
                      </NavItem>
                      {sessionStorage.getItem("isLogged") ? <NavItem><NavLink href="/" onClick={this.user}><UserIcon/></NavLink></NavItem> : ""}
                    <NavItem>
                          {sessionStorage.getItem("isLogged") ? <NavLink href="/" onClick={this.logout}>Logout</NavLink> : <NavLink href="/login" onClick={this.login}>Login</NavLink>}
                    </NavItem>
                    
                  </Nav>
              </Collapse>
          </Navbar>     
      
    );
  }
}

const mapStateToProps = (state) => {
    //console.log(state);
    let loading = false;
    let error = "";
    if(state.login.loading || state.shopping.loading) {
        loading = true;
    }
    if (state.shopping.error.length > 0){
        error = state.shopping.error
    }
    if (state.login.error !== 0){
        error = state.login.error
    }
    return {
        isLogged:state.isLogged,
        loading:loading,
        loginError:error
    }
}

export default connect(mapStateToProps)(Navigation);