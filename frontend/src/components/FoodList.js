import React from 'react';
import {connect} from 'react-redux';
import {getList,removeFromList} from '../actions/foodActions';
import {
    Table, //Button, 
  } from 'reactstrap';


class FoodList extends React.Component {

    constructor(props){
        super(props)
        console.log("constructor",props)        
    }

    componentDidMount(){
        if(this.props.isLogged){
            console.log("logged")
            this.props.dispatch(getList());
        }
    }

    remove = (event) => {
        //console.log(event.target.name)
        this.props.dispatch(removeFromList(event.target.name));
    }

    check = (event) => {
        console.log(event.target.parentNode.getAttribute('name'))
    }
    

    render(){
        console.log("foodlist",this.props)
      let items = this.props.foodlist.map((item) => {
            return <tr key={item._id} name={item._id} onClick={this.check}>
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
          <Table>
              <tbody>
              
                  <tr>
                      <th>Name</th>
                      <th>Energy</th>
                      <th>Carbohydrate</th>
                      <th>Fat</th>
                      <th>Proteine</th>
                  </tr>
                  
                  
                      {items}
                </tbody>
              
          </Table>
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