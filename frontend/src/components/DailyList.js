import React from 'react';
import Logo from '../logo.png';
import {
    Container, Row, Col, NavLink, Button, Table, Collapse
  } from 'reactstrap';
import GoLeft from './GoLeft';
import GoRight from './GoRight';
import GoDown from './GoDown';
import GoUp from './GoUp';
import Plus from './Plus';

class DailyList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {         
            isOpen: [true, false, false, false, false]
        };
    }
    
    toggle(i) {
        console.log("i=",i)
        this.setState(
            state => {
                const arr = this.state.isOpen.map((item,index) => {
                    if (i === index){ item = !item }
                    //console.log(item,index)
                })
                return arr
            }            
        );
    }

    render(){
        return(
            <Container>
            <Row className="mb-4">
                <Col sm="3"><NavLink href="#"><GoLeft/></NavLink></Col>
                <Col sm="6"><h1>Today</h1></Col>
                <Col sm="3"><NavLink disabled href="#"><GoRight/></NavLink></Col>
            </Row>
            
            <Row>
                <Col xs="3"><NavLink onClick={this.toggle(0)}><GoDown/></NavLink></Col>
                <Col xs="6">Breakfast</Col>
                <Col xs="3"><NavLink href="#"><Plus/></NavLink></Col>
            </Row>
            <Collapse isOpen={this.state.isOpen[0]}>
            <Table size="sm">
                <tbody>
                    <tr>
                        <td className="text-left">Brown bread, 1 slice, 35 g</td><td className="text-right">103 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Cheese, Brei, 1 slice, 15 g</td><td className="text-right">51 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Coffee, 1 portion, 236 g</td><td className="text-right">5 kcal</td>
                    </tr>
                </tbody>
            </Table>
            </Collapse>

            <Row>
                <Col xs="3"><NavLink onClick={this.toggle(1)}><GoDown/></NavLink></Col>
                <Col xs="6">Snack 1</Col>
                <Col xs="3"><NavLink href="#"><Plus/></NavLink></Col>
            </Row>
            <Collapse isOpen={this.state.isOpen[1]}>
            <Table size="sm">
                <tbody>
                    <tr>
                        <td className="text-left">Brown bread, 1 slice, 35 g</td><td className="text-right">103 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Cheese, Brei, 1 slice, 15 g</td><td className="text-right">51 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Coffee, 1 portion, 236 g</td><td className="text-right">5 kcal</td>
                    </tr>
                </tbody>
            </Table>
            </Collapse>

            <Row>
                <Col xs="3"><NavLink onClick={this.toggle(2)}><GoDown/></NavLink></Col>
                <Col xs="6">Lunch</Col>
                <Col xs="3"><NavLink href="#"><Plus/></NavLink></Col>
            </Row>
            <Collapse isOpen={this.state.isOpen[2]}>
            <Table size="sm">
                <tbody>
                    <tr>
                        <td className="text-left">Brown bread, 1 slice, 35 g</td><td className="text-right">103 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Cheese, Brei, 1 slice, 15 g</td><td className="text-right">51 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Coffee, 1 portion, 236 g</td><td className="text-right">5 kcal</td>
                    </tr>
                </tbody>
            </Table>
            </Collapse>

            <Row>
                <Col xs="3"><NavLink onClick={this.toggle(3)}><GoDown/></NavLink></Col>
                <Col xs="6">Snack 2</Col>
                <Col xs="3"><NavLink href="#"><Plus/></NavLink></Col>
            </Row>
            <Collapse isOpen={this.state.isOpen[3]}>
            <Table size="sm">
                <tbody>
                    <tr>
                        <td className="text-left">Brown bread, 1 slice, 35 g</td><td className="text-right">103 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Cheese, Brei, 1 slice, 15 g</td><td className="text-right">51 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Coffee, 1 portion, 236 g</td><td className="text-right">5 kcal</td>
                    </tr>
                </tbody>
            </Table>
            </Collapse>

            <Row>
                <Col xs="3"><NavLink onClick={this.toggle(4)}><GoDown/></NavLink></Col>
                <Col xs="6">Dinner</Col>
                <Col xs="3"><NavLink href="#"><Plus/></NavLink></Col>
            </Row>
            <Collapse isOpen={this.state.isOpen[4]}>
            <Table size="sm">
                <tbody>
                    <tr>
                        <td className="text-left">Brown bread, 1 slice, 35 g</td><td className="text-right">103 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Cheese, Brei, 1 slice, 15 g</td><td className="text-right">51 kcal</td>
                    </tr>
                    <tr>
                        <td className="text-left">Coffee, 1 portion, 236 g</td><td className="text-right">5 kcal</td>
                    </tr>
                </tbody>
            </Table>
            </Collapse> 
            </Container>             
                    
        )
    }
}

export default DailyList;