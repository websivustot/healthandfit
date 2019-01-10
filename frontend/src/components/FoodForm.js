import React from 'react';
import {     
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addToList} from '../actions/foodActions';

class FoodForm extends React.Component {

    constructor(props){
        super(props);        
        this.state = {
            foodname:"",
            energy:0,
            carbohydrate:0,
            fat:0,
            proteine:0,
            user:props.login.userName            
        }
    }

    handlePageChange() {
        window.location = "/list";
      }

    submit = (event) => {
        event.preventDefault();
        
        let item = {
            "foodname":this.state.foodname,
            "energy":this.state.energy,
            "carbohydrate":this.state.carbohydrate,
            "fat":this.state.fat,
            "proteine":this.state.proteine,
            "user":this.state.user
        }        
        this.props.dispatch(addToList(item));
        this.handlePageChange();
    }

    onChange = (event) => {
        
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    render(){        
        return(
            <Form onSubmit={this.submit}>
            <FormGroup>
            <Label htmlFor="foodname">Name</Label>
                <Input type="text"
                        name="foodname"
                        onChange={this.onChange}
                        value={this.state.foodname}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="energy">Energy, kcal</Label>
                <Input type="text"
                        name="energy"
                        onChange={this.onChange}
                        value={this.state.energy}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="carbohydrate">Carbohydrate</Label>
                <Input type="text"
                        name="carbohydrate"
                        onChange={this.onChange}
                        value={this.state.carbohydrate}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="fat">Fat</Label>
                <Input type="text"
                        name="fat"
                        onChange={this.onChange}
                        value={this.state.fat}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="proteine">Proteine</Label>
                <Input type="text"
                        name="proteine"
                        onChange={this.onChange}
                        value={this.state.proteine}/>
            </FormGroup>
                
                
            <Button type="submit" className="mr-2 mb-2">Add</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {    
    return {        
        login:state.login
    }
}

export default connect(mapStateToProps)(FoodForm);