import React from 'react';
import {connect} from 'react-redux';
import {getList,removeFromList} from '../actions/foodActions';
import {
    Table, 
  } from 'reactstrap';
import FoodModal from './FoodModal';


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
        //console.log(event.target.name)
        this.props.dispatch(removeFromList(event.target.name));
    }    

    check = (event) => {
        //console.log(event.target.parentNode.getAttribute('name'),event.target.parentNode.getAttribute('index'))
        
        
        this.setState({
            modal: true,
            indexModal: event.target.parentNode.getAttribute('index'),
            foodId: event.target.parentNode.getAttribute('name')
        })  
        
    }
    

    render(){
        //console.log("foodlist",this.props,"foodlistmodal",this.state.modal)
      let items = this.props.foodlist.map((item,index) => {
            return <tr key={item._id} name={item._id} index={index} onClick={this.check} foodname={item.foodname}>
                <td>{item.foodname}</td>
                <td>{item.energy}</td>
                <td>{item.carbohydrate}</td>
                <td>{item.fat}</td>
                <td>{item.proteine}</td>                                
                {/*<td><Button onClick={this.remove}
                            name={item._id}
      >Remove</Button></td>*/}
            </tr>
      }) 
      //let items = "123" 
      
      return (
          <>
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
        foodlist:state.food.foodlist
    }
}

export default connect(mapStateToProps)(FoodList);