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
            type:"",
            count:0,
            price:0
            
        }
    }

    submit = (event) => {
        event.preventDefault();
        
        let item = {
            "type":this.state.type,
            "count":this.state.count,
            "price":this.state.price
        }
        //console.log(this.props);
        this.props.dispatch(addToList(item));
    }

    onChange = (event) => {
        
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    render(){
        //console.log(this.props);
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
            <Label htmlFor="protein">Protein</Label>
                <Input type="text"
                        name="protein"
                        onChange={this.onChange}
                        value={this.state.protein}/>
            </FormGroup>
                
                
            <Button type="submit" className="mr-2 mb-2">Add</Button>
            </Form>
        )
    }
}

export default connect()(FoodForm);