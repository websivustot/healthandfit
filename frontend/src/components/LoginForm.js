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
        let user = JSON.parse(sessionStorage.getItem("user"));        
        this.state = {
            username:"",
            password:"",
            height:"",
            weight:"",
            gender:"",
            age:"",
            activity:"",
            needs:""
        }
        if (user) {
            this.state.height = user.height;
            this.state.weight = user.weight;
            this.state.gender = user.gender;
            this.state.age = user.age;
            this.state.activity = user.activity;
            this.state.needs = user.needs;
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
            "password":this.state.password,
            "height":this.state.height,
            "weight":this.state.weight,
            "gender":this.state.gender,
            "age":this.state.age,
            "activity":this.state.activity,
            "needs":this.state.needs
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
