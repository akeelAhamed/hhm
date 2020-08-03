import React from "react";
import BaseComponent from '../BaseComponent';
import "./custom.css";
import { Button } from 'react-bootstrap';

class ProductPage extends BaseComponent {
  constructor(props) {
    super();
    this.pageContent2 = {
      "id": 187,
      "sku": "hhm00100",
      "product_type": "normal",
      "affiliate_link": null,
      "user_id": "0",
      "category_id": "10",
      "subcategory_id": null,
      "childcategory_id": null,
      "attributes": null,
      "name": "HHMPURE",
      "slug": "hhmpure-hhm00100",
      "photo": "http://www.hhmlife.org/assets/images/products/15951373391H7vEF1C.png",
      "thumbnail": "http://www.hhmlife.org/assets/images/thumbnails/15951373396gBAiaVq.jpg",
      "file": null,
      "size": "",
      "size_qty": "",
      "size_price": "",
      "color": "",
      "price": "50000",
      "previous_price": "45000",
      "details": "<span style=\"color: rgb(154, 160, 166); font-family: Roboto, HelveticaNeue, Arial, sans-serif; background-color: rgb(20, 21, 24);\">Buy Aushmath Agnihotra Kit Online from Devotional Store - Agnihotra Kit is a Vedic way to repair your mind and body. It had explored the various ...</span><br>",
      "stock": "555",
      "policy": "<span style=\"color: rgb(154, 160, 166); font-family: Roboto, HelveticaNeue, Arial, sans-serif; background-color: rgb(20, 21, 24);\">Buy Aushmath Agnihotra Kit Online from Devotional Store - Agnihotra Kit is a Vedic way to repair your mind and body. It had explored the various ...</span><br>",
      "status": "1",
      "views": 3,
      "tags": "",
      "features": [
          "123456"
      ],
      "colors": [
          "#000000"
      ],
      "product_condition": "2",
      "ship": null,
      "is_meta": "0",
      "meta_tag": "",
      "meta_description": null,
      "youtube": "hhh.world",
      "type": "Physical",
      "license": "",
      "license_qty": "",
      "link": null,
      "platform": null,
      "region": null,
      "licence_type": null,
      "measure": null,
      "featured": "0",
      "best": "0",
      "top": "0",
      "hot": "0",
      "latest": "0",
      "big": "0",
      "trending": "0",
      "sale": "0",
      "created_at": "2020-07-19 05:42:19",
      "updated_at": "2020-08-03 07:02:31",
      "is_discount": "0",
      "discount_date": null,
      "whole_sell_qty": "",
      "whole_sell_discount": "",
      "is_catalog": "0",
      "catalog_id": "0"
    }
  }

  content() {
    console.log(this.pageContent2);
    return (
      <div className="main-container">
        <div className="home_bg-1 text-uppercase" style={{background: 'url('+this.pageContent2.photo+')'}}>
          <h3>{this.pageContent2.name}</h3>
        </div>

        <div className="home_bg-2">
          <div className="home_bg-2-text">
            <h5 className="text-uppercase border-teal">
              Aushmat pure <br /> Re energising your life
            </h5>
            <br />
            <small>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </small>
            <br />
            <br />
            <small>
              uis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,
            </small>
            <br />
            <br />
            <small>
              uis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidata
            </small>
          </div>
        </div>

        <div className="home_bg-2"> </div>

        <div className="home_bg-3 bg-secondary my-auto">
          <div className="home_bg-3-text my-auto">
            <h3 className="text-capitalize">pana ultimte for rousing energy</h3> <br />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incmaididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.</p>
            <a href="/cartpage"> <Button className="" variant="info">Buy Now </Button></a>
          </div>
        </div>

        <div className="home_bg-4">
          <h3 className="text-center"><span className="border-teal"> Videos </span></h3>
          <div className="d-flex flex-column align-items-end ">
            {/* {this.pageContent.videos.map(el => <ReactPlayer className="m-3" controls width="30vw" height="25vh" key={el.id} url={el.details} />)} */}
          </div>
        </div>

      </div>
    );
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}

export default ProductPage;