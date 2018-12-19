import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import {connect} from 'react-redux';

class App extends Component {
  
  render() {   
    console.log("app-props",this.props)          
    return (
      <div>
          <Navigation
            isLogged={this.props.isLogged} 
            userName={this.props.userName}/>
          <Main 
            isLogged={this.props.isLogged} 
            userName={this.props.userName} 
            isFoodList={this.props.isFoodList}          
            />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log("app",state)
    return {
        isLogged:state.login.isLogged,
        userName:state.login.userName,
        isFoodList:state.daily.isFoodList
    }
  }

export default connect(mapStateToProps)(App);
