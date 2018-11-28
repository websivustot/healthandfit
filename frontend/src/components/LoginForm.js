import React from 'react';
import { ButtonGroup, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    onChange = (event) => {
        let state = {}
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    submit = (event) => {
        event.preventDefault();
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            return
        }
        let user = {
            "username":this.state.username,
            "password":this.state.password
        }
        if(event.target.name === "register") {
            this.props.register(user)
        } else {
            this.props.login(user);
        }
    }

    render(){
        return(
            <Form>
                <FormGroup>
                <Label htmlFor="username">Username</Label>
                    <Input type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}/>
                </FormGroup>                              
                
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}/>                            
                </FormGroup>
                
                <Button onClick={this.submit}
                        name="register"
                        className="mr-2 mb-2">Register</Button>
                            
                <Button onClick={this.submit}
                        name="login"
                        className="mr-2 mb-2">Login</Button>                         
                    
                
                
            </Form>
        )
    }
}
