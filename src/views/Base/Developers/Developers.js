import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Developers extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Developer Information
                  <div className="card-header-actions">
                    <Button color="link" className="card-header-action btn-setting"><i className="icon-settings"></i></Button>
                    <Button color="link" className="card-header-action btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                    <CardBody>
                        <Form className="form-horizontal">
                            <FormGroup>
                              <Label htmlFor="name">Name</Label>
                              <Input type="text" id="name" placeholder="Enter your name" required />
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor="name">Lastname</Label>
                              <Input type="text" id="lastname" placeholder="Enter your Lastname" required />
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="email-input">Email Input</Label>
                              </Col>
                              <Col xs="12" md="9">
                                <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                                <FormText className="help-block">Please enter your email</FormText>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="password-input">Password</Label>
                              </Col>
                              <Col xs="12" md="9">
                                <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                                <FormText className="help-block">Please enter a complex password</FormText>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3"><Label>Checkboxes</Label></Col>
                              <Col md="9">
                                <FormGroup check className="checkbox">
                                  <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                  <Label check className="form-check-label" htmlFor="checkbox1">Option 1</Label>
                                </FormGroup>
                                <FormGroup check className="checkbox">
                                  <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                                  <Label check className="form-check-label" htmlFor="checkbox2">Option 2</Label>
                                </FormGroup>
                                <FormGroup check className="checkbox">
                                  <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                                  <Label check className="form-check-label" htmlFor="checkbox3">Option 3</Label>
                                </FormGroup>
                              </Col>
                            </FormGroup>



                            <div className="form-actions">
                              <Button type="submit" color="primary">Save changes</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Developers;
