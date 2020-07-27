import React from 'react';
import BaseComponent from '../BaseComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends BaseComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Navbar className="" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={this.props.page.heade_footer.logo}
            width="70"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto text-uppercase">
            {this.props.page.heade_menu.map(el => <Nav.Link key={el.id} as={Link} to={'/' + el.slug} >{el.title}</Nav.Link>)}
            <Nav.Link as={Link} to='/product'>Product</Nav.Link>
            {/* <Nav.Link as={Link} to='/' >Home</Nav.Link>
                <Nav.Link as={Link} to='/about' >About us</Nav.Link>
                
                <Nav.Link as={Link} to='#'>Gallery</Nav.Link>
                <Nav.Link as={Link} to='/vision'>R & D</Nav.Link>
                <Nav.Link as={Link} to='/contactus' >Contact us</Nav.Link> */} 
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
    )
  }
}