
import React, { Component } from 'react'
import LoginForm from './LoginForm/'
import SignupForm from './SignupForm/'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container} from 'reactstrap';


class Auth extends Component {
  
  render() {    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#/home"><i className='fa fa-home'></i><b> Home</b> Page</a></div>
        </nav>
        <div className="app flex-row align-items-center">
        <Container fluid>
              <Switch>
                <Route path="/login" name="Login" component={LoginForm} />
                <Route path="/signup" name="signup" component={SignupForm} />
                <Redirect from="/" to="/login" />
              </Switch>
            </Container>
        </div>
      </div>
    )
  }
}

export default Auth