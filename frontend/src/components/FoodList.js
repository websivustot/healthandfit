import React from 'react';
import {connect} from 'react-redux';
import {getList,removeFromList} from '../actions/foodActions';
import {
    Container, Row, Col, NavLink, Button, Table, Collapse
  } from 'reactstrap';


class FoodList extends React.Component {

    componentDidMount(){
        if(this.props.isLogged){
            this.props.dispatch(getList());
        }
    }

    remove = (event) => {
        //console.log(event.target.name)
        this.props.dispatch(removeFromList(event.target.name));
    }
    

    render(){
      let items = this.props.list.map((item) => {
            return <tr key={item._id}>
                <td>{item.type}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>                
                <td><Button onClick={this.remove}
                            name={item._id}
                >Remove</Button></td>
            </tr>
      })  
      
      return (
          <Table>
              
                  <tr>
                      <th>Type</th>
                      <th>Count</th>
                      <th>Price</th>
                      <th>Remove</th>
                  </tr>
                  
                  <tbody>
                      {items}
                  </tbody>
              
          </Table>
      )
    }

}

const mapStateToProps = (state) => {
    return {
        isLogged:state.isLogged
    }
}

export default connect(mapStateToProps)(FoodList);