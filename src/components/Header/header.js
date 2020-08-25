import React from 'react';
import { Navbar, Nav, Spinner } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import includes from 'lodash/includes';
import FooterPage from "../FooterPage/footer";

class Header extends React.Component {
  
  constructor(props){
    super();
    this.state = {
      headerFooter: null
    }

    this.exceptBorder = ['', 'products', 'item'];
  }

  /**
   * Has border
   */
  hasBorder(){
    let path = this.props.location.pathname.split('/');
    return !includes(this.exceptBorder, path[1]);
  }
  
  componentDidMount(){
    window._axios.get('headerfooter')
      .then((result) => {
        if(result.status === 200){
          this.setState({
            headerFooter : result.data
          })
        }
      }).catch(function(error){
        console.log(error);
      });
  }

  render() {
    if(this.state.headerFooter === null){
      return (
        <div className='center'>
          <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant="primary" />
        </div>
      )
    }

    return (
      <>
        <Navbar className="header-nav bg-white border-bottom" expand="md">
          <Navbar.Brand>
            <Nav.Link as={Link} to='/'>
            <img
              src={this.state.headerFooter.heade_footer.logo}
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
            </Nav.Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ml-auto text-uppercase">
              <Nav.Link active={window.location.pathname === '/'} as={Link} to='/'>Home</Nav.Link>
              <Nav.Link active={window.location.pathname === '/products'} as={Link} to='/products'>Product</Nav.Link>
              {
                this.state.headerFooter.heade_menu.map(el => {
                  return(<Nav.Link key={el.id} active={window.location.pathname === '/' + el.slug} as={Link} to={'/' + el.slug}>{el.title}</Nav.Link>);
                })
              }

              {
                (this.props.isLoggedIn)
                ?<Nav.Link active={window.location.pathname === '/dashboard'} as={Link} to='/dashboard'>Dashboard</Nav.Link>
                :<Nav.Link active={window.location.pathname === '/login'} as={Link} to='/login?item/hhm-pure-panacea-ultimate-for-rousing-energy-hhm00100'>Login</Nav.Link>
              }
              
              <Nav.Link active={window.location.pathname === '/cart'} className="cart" as={Link} to='/cart'><GiShoppingCart size="2rem" /></Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Navbar>

        {this.hasBorder()?<div style={{height: 30, background: '#00a09b'}}></div>:''}

        <div id="appbody">
          {this.props.children}
        </div>
        
        <FooterPage page={this.state.headerFooter}/>
      </>
    )
  }
}

export default withRouter(props => <Header {...props}/>)