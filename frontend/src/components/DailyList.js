import React from 'react';
import {
    Container, Row, Col, NavLink
  } from 'reactstrap';
import GoLeft from './GoLeft';
import GoRight from './GoRight';
import MealList from './MealList';
import list from '../list';
import {getList} from '../actions/dailyActions';
import {connect} from 'react-redux';

class DailyList extends React.Component {

    componentDidMount(){
        if(this.props.isLogged){            
            this.props.dispatch(getList());
        }
    }
    
    render(){
        console.log("dailylist",this.props)
        return(
            <Container>
            <Row className="mb-4">
                <Col xs="3"><NavLink href="#"><GoLeft/></NavLink></Col>
                <Col xs="6"><h1>Today</h1></Col>
                <Col xs="3"><NavLink disabled href="#"><GoRight/></NavLink></Col>
            </Row>
            <MealList list={this.props.dailylist} />          
            
            </Container>             
                    
        )
    }
}

const mapStateToProps = (state) => {
    //console.log("daililist",state)
    return {
        isLogged:state.login.isLogged,
        dailylist:state.daily.dailylist
    }
}

export default connect(mapStateToProps)(DailyList);