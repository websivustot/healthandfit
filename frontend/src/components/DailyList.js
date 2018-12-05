import React from 'react';
import Logo from '../logo.png';
import {
    Container, Row, Col, NavLink, Button
  } from 'reactstrap';
import GoLeft from './GoLeft';
import GoRight from './GoRight';

class DailyList extends React.Component {

    render(){
        return(
            <Container>
            <Row>
            <Col xs="3"><NavLink disabled href="#"><GoLeft/></NavLink></Col>
                <Col xs="6"><h1>Today</h1></Col>
                <Col xs="3"><NavLink disabled href="#"><GoRight/></NavLink></Col>
            </Row>                        
            </Container>             
                    
        )
    }
}

export default DailyList;