import React from 'react';
import {
    Button, Form, FormGroup, Label, Input, CustomInput
  } from 'reactstrap';

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            height:"",
            weight:"",
            gender:"",
            age:""
        }
    }

    onChange = (event) => {
        let state = {}
        state[event.target.name] = event.target.value;
        this.setState(state);
        //console.log(state, this.state);
        
    }

    submit = (event) => {
        event.preventDefault();
        
        if (this.state.height.length === 0 || this.state.weight.length === 0 
            || this.state.age.length === 0 || this.state.gender.length === 0) {
            return
        }
        
        let user = {
            "username":this.state.username,
            "password":this.state.password,
            "height":this.state.height,
            "weight":this.state.weight,
            "gender":this.state.gender,
            "age":this.state.age

        }
        /*
        if(event.target.name === "register") {
            this.props.register(user)
        } else {
            this.props.login(user);
        }
        */
       console.log(user);
    }

    render(){
        return(
            <>
            <h1>Calculate your daily calorie needs</h1>            
            <p className="lead">Input your gender, height, weight and age to estimate your daily calorie needs.</p>
            <Form>            
          <FormGroup>
          <CustomInput type="radio" 
                        id="exampleCustomRadio" 
                        name="gender" 
                        label="Male"
                        onChange={this.onChange}
                        value={true}
                         inline />
            <CustomInput type="radio" 
                        id="exampleCustomRadio2" 
                        name="gender" 
                        label="Female"
                        onChange={this.onChange}
                        value={false} 
                        inline />
          </FormGroup>
          
                <FormGroup>
                <Label htmlFor="height">Your height</Label>
                    <Input type="text"
                            name="height"
                            onChange={this.onChange}
                            value={this.state.height}
                            />
                </FormGroup>                              
                
                <FormGroup>
                <Label htmlFor="weight">Your weight</Label>
                    <Input type="text"
                            name="weight"
                            onChange={this.onChange}
                            value={this.state.weight}
                            />
                </FormGroup>

                <FormGroup>
                <Label htmlFor="age">Your age</Label>
                    <Input type="text"
                            name="age"
                            onChange={this.onChange}
                            value={this.state.age}
                            />
                </FormGroup>              
                
                            
                <Button onClick={this.submit}
                        name="calculate"
                        className="mt-4">Calculate</Button>                      
                    
                
                
            </Form>
            
            </>              
                    
        )
    }
}

export default Calculator;