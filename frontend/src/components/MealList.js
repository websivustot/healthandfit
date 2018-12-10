import React from 'react';
import {
    Container, Row, Col, NavLink, Button, Table, Collapse
  } from 'reactstrap';
  import GoDown from './GoDown';
  import GoUp from './GoUp';
  import Plus from './Plus';
  import MealItem from './MealItem';

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

    render(){
        const list = this.props.list;
        console.log(list)
            return(
                <>
                <Row>
                <Col xs="3"><NavLink onClick={this.toggle}><GoDown/></NavLink></Col>
                <Col xs="6" onClick={this.toggle}>{list.title}</Col>
                <Col xs="3"><NavLink href="#"><Plus/></NavLink></Col>
            </Row>
            <Collapse isOpen={this.state.isOpen}>
            <Table size="sm">
                <tbody>
                    <MealItem item={list.meals[0]}/>
                    <MealItem item={list.meals[1]}/>
                    <MealItem item={list.meals[2]}/>                    
                </tbody>
            </Table>
            </Collapse>
            </>
            )
    }
}

export default MealList;