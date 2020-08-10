import React from "react";
import BaseComponent from '../BaseComponent';
import './custom.css';
import { Button, Container, Card, Row, Col, Collapse, FormControl, Spinner } from "react-bootstrap";
import has from "lodash/has";

export default class Index extends BaseComponent {
  constructor(props) {
    super();
    this.state.profile  = {
      "id": 36,
      "name": "Akeel",
      "photo": null,
      "zip": null,
      "city": null,
      "country": null,
      "address": null,
      "phone": null,
      "fax": null,
      "email": "Akeel@gmail.com",
      "created_at": "2020-08-03 07:56:59",
      "updated_at": "2020-08-03 07:56:59",
      "is_provider": "0",
      "status": "0",
      "verification_link": "85703cc672749036372b9d04a6342086",
      "email_verified": "Yes",
      "affilate_code": "3578fde5d3edff1fde5cd46cc3b785f3",
      "affilate_income": "0",
      "shop_name": null,
      "owner_name": null,
      "shop_number": null,
      "shop_address": null,
      "reg_number": null,
      "shop_message": null,
      "shop_details": null,
      "shop_image": null,
      "f_url": null,
      "g_url": null,
      "t_url": null,
      "l_url": null,
      "is_vendor": "0",
      "f_check": "0",
      "g_check": "0",
      "t_check": "0",
      "l_check": "0",
      "mail_sent": "0",
      "shipping_cost": "0",
      "current_balance": "0",
      "date": null,
      "ban": "0"
    };
    this.state.tab = 0;

    this.toggle = this.toggle.bind(this);

    console.log(this.state.profile);
  }

  /**
   * Handle toggle event
   * 
   * @param {object} e 
   */
  toggle(e){
    if(has(e.target.dataset, 'key')){
      this.setState({
        tab: parseInt(e.target.dataset.key)
      })
    }
  }

  componentDidMount(){
    // window._axios.get('/profile?token='+this.state.user.token)
    // .then((result) => {
    //     if(result.data !== ''){
    //       this.setState({
    //         profile: result.data
    //       })
    //     }else{
    //       this.logOut();
    //     }
    // }).catch(function(error){
    //   console.log(error.response);
    // });
  }

  content() {
    return (
      <>

        <Card className={"my-3 pro mw "+(this.state.tab === 0)}>
          <h5 className="header" data-key={0} onClick={this.toggle}>Profile</h5>
          <Collapse in={this.state.tab === 0}>
            <div id="_profile" className="c-body">
              <form data-action="profile" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                <FormControl placeholder="Name" id="name" name="profile.name" value={this.state.profile.name} onChange={this.onChange} />

                <FormControl placeholder="Email" type="email" id="email" name="profile.email" value={this.state.profile.email} onChange={this.onChange} />

                <Button type="submit" variant="light">Update</Button>

              </form>
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 1)}>
          <h5 className="header" data-key={1} onClick={this.toggle}>Address</h5>
          <Collapse in={this.state.tab === 1}>
            <div id="_address" className="c-body">
              <form data-action="address" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                <FormControl placeholder="Name" id="aname" name="profile.name" value={this.state.profile.name} onChange={this.onChange} />

                <FormControl placeholder="Contact #" id="phone" name="profile.phone" value={this.state.profile.phone} onChange={this.onChange} />

                <FormControl placeholder="Address" id="address" name="profile.address" value={this.state.profile.address} onChange={this.onChange} />

                <FormControl placeholder="City" id="city" name="profile.city" value={this.state.profile.city} onChange={this.onChange} />

                <FormControl placeholder="Country" id="country" name="profile.country" value={this.state.profile.country} onChange={this.onChange} />

                <FormControl placeholder="Pincode" id="zip" name="profile.zip" value={this.state.profile.zip} onChange={this.onChange} />

                <Button type="submit" variant="light">Update</Button>

                <Button type="button" variant="light">Add</Button>

              </form>
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 2)}>
          <h5 className="header" data-key={2} onClick={this.toggle}>My orders</h5>
          <Collapse in={this.state.tab === 2}>
            <div id="_order" className="c-body">
              No orders placed  
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 3)}>
          <h5 className="header" data-key={3} onClick={this.toggle}>Track my order</h5>
          <Collapse in={this.state.tab === 3}>
            <div id="_track" className="c-body">
              No orders to track  
            </div>
          </Collapse>
        </Card>
      
      </>
    );
  }

  render() {
    return (
      <div className="main-container">
        <Container fluid>
          <Row>
            <Col md={12} className="border-primary m-auto">
              <Card className="my-3">
                <Card.Header>
                  <Button size="sm" variant="outline-danger" className="float-right" onClick={this.logOut}>Logout</Button>
                  <h5 className="w-75">Welcome {this.state.user.email}</h5>
                </Card.Header>
              </Card>
              
              {this.state.profile === null?<div className="center"><Spinner animation="border" variant="info"/></div>:this.content()}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}