import React from 'react';
import {
    Row, Col, NavLink, Table, Collapse
  } from 'reactstrap';
  import GoDown from './GoDown';  
  import Plus from './Plus';  
  import {connect} from 'react-redux';
  import {showFoodList} from '../actions/dailyActions';

class MealList extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state =          
           { isOpen: false }            
        
    }   

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    addMeal = () => {
        console.log("addmeal")
        this.props.dispatch(showFoodList());
    }    

    render(){          
        let list = this.props.list 
        console.log("meallist",list) 
        let items = list.map( function(item) {            
            return <tr key={item._id}>
                      <td className="text-left">{item.foodname}, {item.weight} g</td>
                      <td className="text-right">{item.energy}  kcal</td>                         
                
            </tr>
            }) 
            
            return(
                <>
                <Row>
                <Col xs="3"><NavLink onClick={this.toggle}><GoDown/></NavLink></Col>
                <Col xs="6" onClick={this.toggle}>Dishes</Col>
                <Col xs="3"><NavLink onClick={this.addMeal}><Plus/></NavLink></Col>
            </Row>
            <Collapse isOpen={this.state.isOpen}>
            <Table size="sm">
                <tbody>
                    {items}                                  
                </tbody>
            </Table>
            </Collapse>
            </>
            )
    }
}

const mapStateToProps = (state) => {
    console.log("meallist",state)
    return {
        isLogged:state.login.isLogged,
        foodlist:state.food.foodlist,
        summa:state.summa
    }
}

export default connect(mapStateToProps)(MealList);