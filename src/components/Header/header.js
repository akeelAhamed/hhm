import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';


class Header extends Component{
    render(){
        return(
            <Navbar className="" bg="light"  expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={require("../HomePage/Img/logo.png")}
                    width="70"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="mr-auto  text-uppercase  border">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#home">Product</Nav.Link>
                <Nav.Link href="#link">allery</Nav.Link>
                <Nav.Link href="#home">R & D</Nav.Link>
                <Nav.Link href="#link">Contact us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           
        )}}


export default Header;