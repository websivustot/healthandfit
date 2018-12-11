import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import {connect} from 'react-redux';

class App extends Component {

  render() {             
    return (
      <div>
          <Navigation></Navigation>
          <Main 
            isLogged={this.props.isLogged}            
            />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state, state.login.isLogged)
    return {
        isLogged:state.login.isLogged
    }
  }

export default connect(mapStateToProps)(App);
