import React from 'react';
import {
    Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter 
  } from 'reactstrap';
import { hideFoodList } from '../actions/dailyActions';
import {addToList} from '../actions/dailyActions';
import {connect} from 'react-redux';

  class FoodModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          id: props.id,
          modal: props.foodModalShow,
          energy: 0,
          carbo: 0,
          fat: 0,
          proteine: 0,          
          weight: 0,
          name: props.foodName,
          user: this.props.current.login.userName
        };
    
        this.toggle = this.toggle.bind(this);
      }

      componentWillReceiveProps(props) {
        this.setState({ 
            modal: props.foodModalShow,
            id: props.foodId
         })
      }

      submit = (event) => {        
        
        let item = {
            "foodid":this.state.id,    
            "weight":this.state.weight,            
            "user":this.state.user,        
            "foodname":this.state.name,
            "energy":this.state.energy,
            "carbo":this.state.carbo,
            "fat":this.state.fat,
            "proteine":this.state.proteine
        }        
        this.props.dispatch(addToList(item,this.state.user));        
    }

    add = () => {        
        this.setState({          
          energy: 0,
          carbo: 0,
          fat: 0,
          proteine: 0,          
          weight: 0,
          user: this.props.current.login.userName
        });
        this.props.dispatch(hideFoodList());        
        this.submit();
        this.toggle();
    }
    
      toggle() {          
        this.setState({
          energy: 0,
          carbo: 0,
          fat: 0,
          proteine: 0,          
          weight: 0,
          modal: !this.state.modal          
        });        
      }    

      onChange = (event) => {        
        let {...food} = this.props.foodlist[this.props.index]        
        let coef =  event.target.value * 0.1        
        this.setState({            
            energy: Math.ceil(food.energy * coef)/10,
            carbo: Math.ceil(food.carbohydrate * coef)/10,
            fat: Math.ceil(food.fat * coef)/10,
            proteine: Math.ceil(food.proteine * coef)/10,
            name: food.foodname,
            weight:event.target.value
        }) 
              
    }
    
      render() {        
        let {...food} = this.props.foodlist[this.props.index]       
        return (
          <div>            
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{food.foodname}</ModalHeader>
              <ModalBody>
              
                <Label htmlFor="foodname">Weight, g</Label>
                <Input type="text"
                        name="weight"
                        onChange={this.onChange}
                        value={this.state.weight}/>
            
            
              Energy {this.state.energy} Carboh. {this.state.carbo}	Fat {this.state.fat} Proteine {this.state.proteine}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.add}>Add</Button>{' '}                
              </ModalFooter>
            </Modal>
          </div>
        );
      }
  }

  const mapStateToProps = (state) => {
    return {
        current: state
    }
}
  
  export default connect(mapStateToProps)(FoodModal);
