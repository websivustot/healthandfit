import React from 'react';
import {
    Container, Row, Col, NavLink
  } from 'reactstrap';
import GoLeft from './GoLeft';
import GoRight from './GoRight';
import MealList from './MealList';
import list from '../list';
import {getList} from '../actions/dailyActions';

class DailyList extends React.Component {

    componentDidMount(){
        if(this.props.isLogged){
            console.log("dailylist")
            this.props.dispatch(getList());
        }
    }
    
    render(){
        return(
            <Container>
            <Row className="mb-4">
                <Col xs="3"><NavLink href="#"><GoLeft/></NavLink></Col>
                <Col xs="6"><h1>Today</h1></Col>
                <Col xs="3"><NavLink disabled href="#"><GoRight/></NavLink></Col>
            </Row>
            
            <MealList list={list[0]} />
            <MealList list={list[1]} />
            <MealList list={list[2]} />
            <MealList list={list[3]} />
            <MealList list={list[4]} />
            
            </Container>             
                    
        )
    }
}

export default DailyList;