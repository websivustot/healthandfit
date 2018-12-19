import React from 'react';
import {    
    Container,
    Row,
    Col,
    Jumbotron
  } from 'reactstrap';
import Welcome from './Welcome';
import Calculator from './Calculator';
import LoginForm from './LoginForm';
import DailyList from './DailyList';
import FoodList from './FoodList';
import FoodForm from './FoodForm';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class Main extends React.Component {

    render(){
        console.log("main",this.props.isFoodList)
        return(
            <Jumbotron className="bg-white">
              <Container>
                  <Row>
                      <Col className="text-center mb-4">
                      <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={() => 
                                this.props.isLogged ?
                                (<DailyList userName={this.props.userName}/>) :
                                (<Welcome/>)
                            }/>

                            <Route exact path="/login" render={() => 
                                this.props.isLogged ?
                                (<Redirect to="/list"/>) :
                                (<LoginForm login={this.props.login}
                                    register={this.props.register}/>)
                            }/>                            

                            <Route path="/list" render={() => 
                                this.props.isLogged ?
                                (this.props.isFoodList ? <FoodList /> : <DailyList/>) :
                                (<LoginForm login={this.props.login}
                                    register={this.props.register}/>)                               
                                
                            }/>

                            <Route path="/foodlist" render={() => 
                                this.props.isLogged ?
                                (<FoodList foodlist={this.props.foodlist}
                                    login={this.props.login}
                                    removeFromList={this.props.removeFromList}/>) :
                                    (<Redirect to="/"/>)
                            }/>

                            <Route path="/foodform" render={() => 
                                this.props.isLogged ?
                                (<FoodForm addToList={this.props.addToList}/>) :
                                    (<Redirect to="/"/>)
                             }/> 

                            <Route path="/logout" render={() => 
                                (<LoginForm login={this.props.login}
                                register={this.props.register}/>)                               
                                
                            }/>

                            <Route path="/calculator" render={() =>                                 
                                <Calculator /> 
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