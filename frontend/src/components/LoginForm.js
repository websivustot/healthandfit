import React from 'react';
import {     
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input} from 'reactstrap';
import {register, login} from '../actions/loginActions';
import {connect} from 'react-redux';

class LoginForm extends React.Component {

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
        
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            return
        }
        let user = {
            "username":this.state.username,
            "password":this.state.password
        }
        if(event.target.name === "register") {
            this.props.dispatch(register(user));
        } else {
            this.props.dispatch(login(user));
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

export default connect()(LoginForm);
