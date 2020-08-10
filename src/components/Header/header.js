import React from 'react';
import { Navbar, Nav, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterPage from "../FooterPage/footer";

export default class Header extends React.Component {
  constructor(props){
    super();
    this.state = {
      headerFooter: {
        "heade_footer": {
            "logo": "http://www.hhmlife.org/assets/images/1596725014logo.png",
            "footer": "Aushmath introduces to you the process PURE, viz., Panacea Ultimate for Rousing Energy to realize the complete WELLNESS of one’s mind and body. We adopted certain intelligent dimensions mentioned in Vedic scriptures to materialize the process equipment ‘PURE Pyramid’ (i.e., Inverted Copper Pyramid) employed for the process PURE. Aushmath’s PANACEA ULTIMATE is a perfect blend of natural elements developed for harnessing the best benefits from the widely recognized ‘Smoke Therapy’.",
            "footer_logo": "1596980432HHM-Logo-White.png"
        },
        "heade_menu": [
            {
                "id": "1",
                "title": "About Us",
                "slug": "about"
            },
            {
                "id": "2",
                "title": "Privacy & Policy",
                "slug": "privacy"
            },
            {
                "id": "3",
                "title": "Terms & Condition",
                "slug": "terms"
            }
        ],
        "footer_menu": [
            {
                "id": "2",
                "title": "Privacy & Policy",
                "slug": "privacy"
            },
            {
                "id": "3",
                "title": "Terms & Condition",
                "slug": "terms"
            }
        ],
        "sociallinks": [
            {
                "facebook": "https://www.facebook.com/sathyaventhan.vasu",
                "gplus": "https://plus.google.com/",
                "twitter": "https://twitter.com/",
                "linkedin": "https://www.linkedin.com/"
            }
        ],
        "pagesettings": {
            "street": "3584 Hickory Heights Drive ,Hanover MD 21076, USA",
            "phone": "00 000 000 000",
            "fax": "00 000 000 000",
            "email": "admin@geniusocean.com"
        }
    }
    }

    this.active = this.active.bind(this);
  }

  active(e){
    this.setState({headerFooter: this.state.headerFooter});
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

        <div style={{height: 30, background: '#00a09b'}}></div>

        <div id="appbody">
          {this.props.children}
        </div>
        
        <FooterPage page={this.state.headerFooter}/>
      </>
    )
  }
}