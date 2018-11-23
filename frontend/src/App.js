import React, { Component } from 'react';
//import Logo from './logo.png';
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

componentDidMount(){
    if (this.state.isLogged){
      this.getList();
    }
    
}

toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}

//login API

login = (user) => {
    let loginObject = {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }
    fetch("/login",loginObject).then((response) => {
        //console.log(response);
        if(response.ok){
        response.json().then((data) => {
            this.setState({
            token:data.token,
            isLogged:true
            })
            this.getList(data.token);
        }).catch((error) => {
            console.log(error)
        })
        } else {
        alert("wrong credentialls");
        }
    }).catch((error) => {
        console.log(error)
    })
}
//REGISTER
register = (user) => {
    let registerObject = {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }
    fetch("/register",registerObject).then((response) => {
        if(response.ok){
        alert("Register successful!");
        } else {
        alert("Username already in use");
        }
    }).catch((error) => {
        console.log(error)
    })
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

export default App;
