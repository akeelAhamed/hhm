import React from "react";
import { Link } from 'react-router-dom';
import has from "lodash/has";
import includes from "lodash/includes";
import BaseComponent from '../BaseComponent';
import "./custom.css";

export default class Products extends BaseComponent {
  constructor(props) {
    super();
    this.imageType = ['back_ground', 'product', 'another', 'top'];
  }

  /**
   * Get background imagee
   * 
   * @param object images 
   */
  getImage(images, type){
    let image = images[0].photo;
    for (let i = 0; i < images.length; i++) {
      if(has(images[i], 'image_type') && (includes(this.imageType, images[i].image_type.toLowerCase()))){
        if(images[i].image_type.toLowerCase() === type){
          image = images[i].photo;
          break;
        }
      }
    }

    return image;
  }

  productDetail(product){
    return (
      <div className="main-container">

        <div className="text-uppercase ptop">
          <h3>Higher Living</h3>
          <img src={this.getImage(product.allimages, 'top')} className="img-fluid" alt="..." />
        </div>

        <div className="home-bg-2" style={{backgroundImage: 'url('+this.getImage(product.allimages, 'back_ground')+')'}}>
          <div className="home-bg-2_text">
            <h5 className="text-uppercase border-teal"> {product.name} </h5>
            <br />
            <div dangerouslySetInnerHTML={{ __html: product.details }} /><br />
            <Link className="mt-3 btn btn-primary" to={"/item/"+product.slug}>Buy now</Link>
          </div>
        </div>

        <div className="pproduct">
          <img src={this.getImage(product.allimages, 'product')} className="img-fluid w-100" alt="..." />
        </div>

        <div className="home-bg-1" style={{backgroundImage: 'url('+this.getImage(product.allimages, 'another')+')'}}>
          <div className="home-bg-2_text">
            <div dangerouslySetInnerHTML={{ __html: product.details }} /><br />
            <Link className="mt-3 btn btn-primary" to={"/item/"+product.slug}>Buy now</Link>
          </div>
        </div>

        
      </div>
    );
  }

  content() {
    return(
      <>
        {
          this.pageContent.prods.data.map((product, key) =>
            (<div key={key}>
              {this.productDetail(product)}
            </div>)
          )
        }
      </>
    )
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}