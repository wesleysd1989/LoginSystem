
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signup } from '../../../auth/AuthActions'
import Input from '../../../components/Form/'
import { Container, Row, Col, Card, CardBody, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super(props)
  }
  onSubmit(values) {
    const { signup } = this.props
    signup(values)
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field style={{height: '1000px'}} component={Input} type="input" name="name" placeholder="Username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="email" name="email" placeholder="E-mail" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="password" name="password" placeholder="Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field xs="12" md="12" sm="12" lg="6" component={Input} type="password" name="confirm_password" placeholder="Repeat password" />
                    </InputGroup>
                    <Row>
                      <Col xs="12" md="12" sm="12" lg="6">
                        <Button color="success" className="px-4 my-2" block>Create Account</Button>
                      </Col>
                      <Col xs="12" md="12" sm="12" lg="6" >
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                          <Button color="success" className="px-4 my-2" block >Cancel</Button>
                        </Link>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
Register = reduxForm({ form: 'registerForm' })(Register)
const mapDispatchToProps = dispatch => bindActionCreators({ signup },
  dispatch)
export default connect(null, mapDispatchToProps)(Register)