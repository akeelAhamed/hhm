import React from 'react';
import { Navbar, Nav, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterPage from "../FooterPage/footer";

export default class Header extends React.Component {
  constructor(props){
    super();
    this.state = {
      headerFooter: null
    }

    this.active = this.active.bind(this);
  }

  active(e){
    this.setState({headerFooter: this.state.headerFooter});
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
        <Navbar className="header-nav" bg="light" expand="md">
          <Navbar.Brand>
            <Nav.Link as={Link} to='/'>
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
              <Nav.Link active={window.location.pathname === '/'} as={Link} to='/' onClick={this.active}>Home</Nav.Link>
              <Nav.Link active={window.location.pathname === '/products'} as={Link} to='/products' onClick={this.active}>Products</Nav.Link>
              {
                this.state.headerFooter.heade_menu.map(el => {
                  return(<Nav.Link key={el.id} active={window.location.pathname === '/' + el.slug} as={Link} to={'/' + el.slug} onClick={this.active}>{el.title}</Nav.Link>);

                  //return(<Nav.Link key={el.id} active={window.location.pathname === '/' + el.slug} href={'/' + el.slug} >{el.title}</Nav.Link>)
                })
              }

              {
                (this.props.isLoggedIn)
                ?<Nav.Link active={window.location.pathname === '/dashboard'} as={Link} to='/dashboard' onClick={this.active}>Dashboard</Nav.Link>
                :<Nav.Link active={window.location.pathname === '/login'} as={Link} to='/login' onClick={this.active}>Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        
        </Navbar>

        <div id="appbody">
          {this.props.children}
        </div>
        
        <FooterPage page={this.state.headerFooter}/>
      </>
    )
  }
}