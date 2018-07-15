import React, { Component } from 'react';
import { Card, Badge, Button, ButtonDropdown, CardBody, CardFooter, CardHeader, Col, Collapse, DropdownItem, DropdownMenu,
  DropdownToggle, Fade, Form, FormGroup, FormText, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText, Label,
  Table, Row, } from 'reactstrap';

import usersData from '../../JsonData/UsersData' 

class User extends Component {
  render() {
    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userId   = user.id
    const userCompleteName = user.name
    const userRegistered = user.registered
    const userRole = user.role
    const userStatus = user.status
    const userName = user.usuario
    const userEmail = user.email
    const userPassword = user.password

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="8">
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Informacion de Usuario</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">Campos Obligatorios (*)</Col>
                </Row><hr></hr>
                <Row>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="id">Id:</Label>
                      <Input type="text" id="id" placeholder="0" value={userId} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Nombre:</Label>
                      <Input type="text" id="name" placeholder="Enter your name" required value = {userCompleteName}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="username">Usuario:</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="username1" name="username1" autoComplete="name" value={userName}/>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="username">Password:</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" id="password1" name="password1" autoComplete="current-password" value={userPassword}/>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="email">Email:</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" id="email1" name="email1" autoComplete="email" value={userEmail}/>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="2"><Label htmlFor="registro">Registrado el:</Label></Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="registro" value = {userRegistered} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="2"><Label htmlFor="role">Role:</Label></Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="select" name="select" id="select">
                        <option value="1" selected>Administrador</option>
                        <option value="2">Usuario</option>
                        <option value="3">Editor</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="2"><Label htmlFor="status">Estado:</Label></Col>
                  <Col xs="2">
                      <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="status" name="status" value="1" checked/>
                      <Label className="form-check-label" check htmlFor="status">Activo</Label>
                    </FormGroup>
                  </Col>
                </Row>

                <CardFooter>
                  <Button type="submit" size="sm" color="success"><i className="fa fa-user"></i>Save</Button>&nbsp;&nbsp;
                  <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
