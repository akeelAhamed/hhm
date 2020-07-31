import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterPage from "../FooterPage/footer";

export default class Header extends React.Component {
  constructor(props){
    super();
    this.state = {
      headerFooter: {
        footer_menu: [{id: "2", title: "Privacy & Policy", slug: "privacy"}],
        heade_footer: {logo: "http://www.hhmlife.org/assets/images/1590831847logo-r.png"},
        heade_menu: [{id: "1", title: "About Us", slug: "about"}, {id: "2", title: "Privacy & Policy", slug: "privacy"}],
        pagesettings: {street: "3584 Hickory Heights Drive ,Hanover MD 21076, USA", phone: "00 000 000 000"},
        sociallinks: [{facebook: "https://www.facebook.com/sathyaventhan.vasu", gplus: "https://plus.google.com/"}],
      }
    };
  }

  
  componentDidMount(){
    // window._axios.get('headerfooter')
    //   .then((result) => {
    //     if(result.status === 200){
    //       this.setState({
    //         headerFooter : result.data
    //       })
    //     }
    //   }).catch(function(error){
    //     console.log(error);
    //   });
  }

  render() {
    if(this.state.headerFooter === null){
      return (<div/>);
    }

    return (
      <>
        <Navbar className="" bg="light" expand="lg">
          <Navbar.Brand>
            <Nav.Link as={Link} to=''>
            <img
              src={this.state.headerFooter.heade_footer.logo}
              width="70"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
            </Nav.Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ml-auto text-uppercase">
              {
                this.state.headerFooter.heade_menu.map(el => 
                <Nav.Link key={el.id} as={Link} to={'/' + el.slug} >{el.title}</Nav.Link>)
              }
              <Nav.Link as={Link} to='/products'>Products</Nav.Link>

              {
                (this.props.isLoggedIn)
                ?<Nav.Link as={Link} to='/dashboard'>Product</Nav.Link>
                :<Nav.Link as={Link} to='/login'>Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        
        </Navbar>

        {this.props.children}
        
        <FooterPage page={this.state.headerFooter}/>
      </>
    )
  }
}