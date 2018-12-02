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
            age:"",
            activity:"",
            formIsOpened:"true",
            calculationResult:""
        } 
    }

    onChange = (event) => {
        let state = {}
        state[event.target.name] = event.target.value;
        this.setState(state);
        console.log(state, this.state);
        
    }

    calculate = (user) => {

        console.log(user);
        this.setState({formIsOpened: false});
        //man  - BMR = [9.99 x weight (kg)] + [6.25 x height (sm)] - [4.92 x age (years)] + 5
        //woman - BMR = [9.99 x weight (kg)] + [6.25 x height (sm)] - [4.92 x age (years)] - 161
        let bmr = 9.99 * user.weight + 6.25 * user.height - 4.92 * user.age;

        let result = user.gender ? bmr + 5 : bmr - 161;
        result = Math.round(result * user.activity);
        this.setState({calculationResult:result});
        console.log(user,bmr,result);
        
    }

    submit = (event) => {
        //event.preventDefault();
        
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
            "age":this.state.age,
            "activity":this.state.activity

        }

        this.calculate(user);
        /*
        if(event.target.name === "register") {
            this.props.register(user)
        } else {
            this.props.login(user);
        }
        */
       //console.log(user);
    }

    render(){
        const form = this.state.formIsOpened && <><h1>Calculate your daily calorie needs</h1>            
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
            <FormGroup><Label>Your activity level</Label></FormGroup>
            <FormGroup>
            
                <CustomInput type="radio" 
                            id="activity1" 
                            name="activity" 
                            label="Min"
                            onChange={this.onChange}
                            value="1.2"
                            inline /> 
                <CustomInput type="radio" 
                            id="activity2" 
                            name="activity" 
                            label="Light"
                            onChange={this.onChange}
                            value="1.375"
                            inline />
                <CustomInput type="radio" 
                            id="activity3" 
                            name="activity" 
                            label="Sport"
                            onChange={this.onChange}
                            value="1.55"
                            inline /> 
                <CustomInput type="radio" 
                            id="activity4" 
                            name="activity" 
                            label="Hard"
                            onChange={this.onChange}
                            value="1.75"
                            inline />
                <CustomInput type="radio" 
                            id="activity5" 
                            name="activity" 
                            label="Max"
                            onChange={this.onChange}
                            value="1.9"
                            inline />            
      </FormGroup>               
                        
            <Button onClick={this.submit}                        
                    name="calculate"                        
                    className="mt-4">Calculate</Button>     
            
        </Form></>;

        const result = this.state.calculationResult ? <h1>Your daily calorie needs <span className="big">{this.state.calculationResult}</span> cal</h1> : "";
       
        return(
            <>
            {form}
            {result}
            
            </>              
                    
        )
    }
}

export default Calculator;