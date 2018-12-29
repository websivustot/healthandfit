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
    //console.log("navigation",this.props);
    return (      
          <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">HEALTH & FIT</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                          <NavLink href="/">Home</NavLink>
                      </NavItem>
                      {this.props.isLogged ? 
                      <NavItem><NavLink href="/" onClick={this.user}>
                      <UserIcon/> {this.props.userName}</NavLink></NavItem> : ""}
                    <NavItem>
                          {this.props.isLogged ? 
                          <NavLink href="/" onClick={this.logout}>Logout</NavLink> : 
                          <NavLink href="/login" onClick={this.login}>Login</NavLink>}
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
    if(state.login.loading || state.food.loading) {
        loading = true;
    }
    if (state.food.error.length > 0){
        error = state.food.error
    }
    if (state.login.error !== 0){
        error = state.login.error
    }
    return {
        isLogged:state.login.isLogged,
        loading:loading,
        loginError:error,
        userName:state.login.userName
    }
}

export default connect(mapStateToProps)(Navigation);