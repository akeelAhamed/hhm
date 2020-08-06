import React from "react";
import BaseComponent from '../BaseComponent';
import "./custom.css";
import { Link } from 'react-router-dom';

export default class Products extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div className="main-container">
        <div className="home_bg-1 text-uppercase" style={{backgroundImage: 'url('+require('../HomePage/Img/fwdhhmhomepagedummypics/Home-10.jpg')+')'}}>
          <h3>Our Product</h3>
        </div>

        {
          this.pageContent.prods.data.map((product, key) =>
            <div className="product" style={{flexDirection: (key % 2)?'row-reverse':'row'}} key={key}>
              <div className="img-container">
                <img src={product.photo} alt={product.name} />
              </div>
              <div className="product-info">
                <div className="product-content">
                  <h1>{product.name}</h1>
                  <p className="product-desc" dangerouslySetInnerHTML={{ __html: product.details }}/>
                  <div className="buttons">
                    <Link className="button view" to={"/item/"+product.slug}>View</Link>
                    <a className="button add" href="#!">Add to Cart</a>
                    <span className="button price">${product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </div>
    );
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}