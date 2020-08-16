import React from "react";
import has from "lodash/has";

export default class Gallery extends React.Component{

    constructor(props){
        super();
        this.ckey = 0;
        this.state = {
            default: props.img,
            current: props.img,
            is3d   : props._3d !== undefined
        }
        this.changeImg = this.changeImg.bind(this);
    }

    /**
     * Change image
     * 
     * @param {object} e 
     */
    changeImg(e){
        if(has(e.target.dataset, 'key')){
            let key = e.target.dataset.key;
            this.setState({
                current: (key >= 0)?this.props.gallery[key]:this.state.default
            })
        }
    }

    render(){
        return(
            <>
                <div className="full-img m-auto">
                    <img id="displayed-img" alt='gallery' className="img-fluid" src={this.state.current} />
                </div>
                
                <div id="slideshow">
                    {
                        (this.state.is3d)
                        ?''
                        :<img alt='gallery' className={"img-fluid "+ (this.props.img === this.state.current)} src={this.props.img} data-key={-1} onClick={this.changeImg} />
                    }
                    
                    {
                        this.props.gallery.map((img, i) => {
                            this.ckey = i;
                            if(this.state.is3d){
                                return(<span key={i} data-key={i} className={"dots "+ (img === this.state.current)} onClick={this.changeImg}/>)
                            }
                            return(<img key={i} data-key={i} alt='gallery' className={"img-fluid "+ (img === this.state.current)} src={img} onClick={this.changeImg}/>)
                        })
                    }
                </div>
            </>
        )
    }

}