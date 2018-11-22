import React from 'react';
import Logo from '../logo.png';
import {
    Button
  } from 'reactstrap';

class Welcome extends React.Component {

    render(){
        return(
            <>
            <h1>Be healthy and fit!</h1>
            <img src={Logo} alt="Health & Fit" className="img-fluid mb-4 logo"/>
            <p className="lead">Become healthier by controlling the energy value of the food you eat.</p>
            <p>We will calculate your daily energy needs based on your personal data of your gender, weight, height and age.</p>
            <p>Click the button below to get started.</p>
            <Button
                tag="a"
                color="success"
                size="large"
                href="#"
                className="mt-4"                                                                   
            >
            Become Healthier & Fit
            </Button>
            </>              
                    
        )
    }
}

export default Welcome;