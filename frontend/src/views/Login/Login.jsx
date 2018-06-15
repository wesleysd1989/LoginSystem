//import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../auth/AuthActions/'
//import Row from '../../components/Row/'
//import Grid from '../../components/Grid/'
import Input from '../../components/Form/'
import { Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = { loginMode: true }
  }
  changeMode() {
    this.setState({ loginMode: !this.state.loginMode })
  }
  onSubmit(values) {
    const { login } = this.props
    login(values)
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#/home"><i className='fa fa-home'></i><b> Home</b> Page</a></div>
        </nav>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field component={Input} type="email" name="email" placeholder="E-mail" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field component={Input} type="password" name="password" placeholder="Senha" />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button color="primary" className="px-4">Login</Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">Forgot password?</Button>
                          </Col>
                        </Row>
                      </form>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <Button color="primary" className="mt-3" active>Register Now!</Button>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login },
  dispatch)
export default connect(null, mapDispatchToProps)(Auth)