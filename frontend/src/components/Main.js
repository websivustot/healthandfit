import React from 'react';
import {    
    Container,
    Row,
    Col,
    Jumbotron,
    Button
  } from 'reactstrap';
import Welcome from './Welcome';
import Calculator from './Calculator';
import LoginForm from './LoginForm';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class Main extends React.Component {

    render(){
        return(
            <Jumbotron className="bg-white">
              <Container>
                  <Row>
                      <Col className="text-center mb-4">
                      <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={() => 
                                this.props.isLogged ?
                                (<Redirect to="/list"/>) :
                                (<Welcome/>)
                            }/>

                            <Route exact path="/user" render={() => 
                                this.props.isLogged ?
                                (<Redirect to="/user/id"/>) :
                                (<LoginForm login={this.props.login}
                                    register={this.props.register}/>)
                            }/>

                            <Route path="/list" render={() => 
                                <h1>List of dishes</h1>
                            }/>

                            <Route path="/calculator" render={() => 
                                <Calculator/>
                            }/>
                            
                        </Switch>
                      </BrowserRouter>
                                
                    </Col>
                  </Row>
              </Container>
          </Jumbotron>
        )
    }
}

export default Main;