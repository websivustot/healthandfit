import React from 'react';
import {
    Container, Row, Col, NavLink
  } from 'reactstrap';
import GoLeft from './GoLeft';
import GoRight from './GoRight';
import MealList from './MealList';
import {getList} from '../actions/dailyActions';
import {connect} from 'react-redux';

class DailyList extends React.Component {    
    
    componentDidMount(){
        
        if(this.props.isLogged){                                
            this.props.dispatch(getList(this.props.login.userName));            
        }
        
    }    

    getSumma = (list) => {
        let summa = 0                
        list.map( function(item) {
            summa = summa + item.energy;                       
            }) 
        
        return summa        
    }
    
    render(){        
        let summa = this.getSumma(this.props.dailylist)
        
        return(
            <Container>
            <Row className="mb-4">
                <Col xs="3"><NavLink href="#"><GoLeft/></NavLink></Col>
                <Col xs="6"><h1>Today</h1></Col>
                <Col xs="3"><NavLink disabled href="#"><GoRight/></NavLink></Col>
            </Row>
            <MealList list={this.props.dailylist} />
            <div className="big">{summa} of {this.props.login.needs}</div>        
            
            </Container>             
                    
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        isLogged:state.login.isLogged,
        dailylist:state.daily.dailylist,
        login:state.login
        
    }
}

export default connect(mapStateToProps)(DailyList);