import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
                    alt="logo"
                />
            </Navbar.Brand>
      
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ml-auto text-uppercase">
                <Nav.Link as={Link} to='/' >Home</Nav.Link>
                <Nav.Link as={Link} to='/about' >About us</Nav.Link>
                <Nav.Link as={Link} to='/product'>Product</Nav.Link>
                <Nav.Link as={Link} to='#'>Gallery</Nav.Link>
                <Nav.Link as={Link} to='/vision'>R & D</Nav.Link>
                <Nav.Link as={Link} to='/contactus' >Contact us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           
        )}}


export default Header;