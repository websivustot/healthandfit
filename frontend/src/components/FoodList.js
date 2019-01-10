import React from 'react';
import {connect} from 'react-redux';
import {getList,removeFromList} from '../actions/foodActions';
import {
    Table, NavLink
  } from 'reactstrap';
import FoodModal from './FoodModal';
import Plus from './Plus';


class FoodList extends React.Component {

    constructor(props){
        super(props)        
        this.state = {
            modal: false
        };        
    }

    componentDidMount(){
        if(this.props.isLogged){            
            this.props.dispatch(getList());
        }
    }

    remove = (event) => {        
        this.props.dispatch(removeFromList(event.target.name));
    }    

    check = (event) => {        
        this.setState({
            modal: true,
            indexModal: event.target.parentNode.getAttribute('index'),
            foodId: event.target.parentNode.getAttribute('name')
        })          
    }    

    render(){        
      let items = this.props.foodlist.map((item,index) => {
            return <tr key={item._id} name={item._id} index={index} onClick={this.check} foodname={item.foodname}>
                <td>{item.foodname}</td>
                <td>{item.energy}</td>
                <td>{item.carbohydrate}</td>
                <td>{item.fat}</td>
                <td>{item.proteine}</td>                
            </tr>
      })       
      
      return (
          <>
          <NavLink href="/foodform"><Plus/></NavLink>
          <FoodModal foodModalShow={this.state.modal} 
                        foodlist={this.props.foodlist} 
                        index={this.state.indexModal} 
                        foodId={this.state.foodId}
                        foodName={this.props.foodname}
                        />          
          <Table size="sm">
              <tbody>
              
                  <tr>
                      <th>Name</th>
                      <th>Energy</th>
                      <th>Carboh.</th>
                      <th>Fat</th>
                      <th>Proteine</th>
                  </tr>
                  
                  
                      {items}
                </tbody>              
          </Table>
          </>
      )
    }

}

const mapStateToProps = (state) => {
    return {
        isLogged:state.login.isLogged,
        foodlist:state.food.foodlist,
        needs:state.login.needs
        
    }
}

export default connect(mapStateToProps)(FoodList);