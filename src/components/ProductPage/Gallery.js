import React from "react";
import has from "lodash/has";
import Modal3D from "../Products/Modal3D";

export default class Gallery extends React.Component{

    constructor(props){
        super();
        this.state = {
            ckey    : 0,
            default: props.img,
            current: props.img,
            is3d   : props._3d !== undefined,
            modal  : false,
            slide  : true
        }
        this.gallery = !this.state.is3d?[props.img, ...props.gallery]:[...props.gallery];
        this.interval = '';
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
                ckey   : key,
                current: (key >= 0)?this.gallery[key]:this.state.default
            })
        }
    }

    autoSlide(){
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if(this.state.slide){
                let key = parseInt(this.state.ckey) + 1;
                key = key >= this.gallery.length?0:key;
                this.setState({
                    ckey   : ""+key+"",
                    current: (key >= 0)?this.gallery[key]:this.state.default
                })
            }
        }, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        this.autoSlide();
        const hasModal = this.state.is3d || this.props._3dFor !== undefined;
        const props = (typeof this.props._3dFor === 'string' && this.props._3dFor === this.state.ckey)?
        {
            onClick: () => this.setState({modal: true}),
            className: "img-fluid _3d"
        }:
        {
            className: "img-fluid"
        };
        
        return(
            <div onMouseEnter={() => this.setState({slide: false})} onMouseLeave={() => this.setState({slide: true})}>
                {
                    (!this.state.is3d)
                    ?''
                    :<img src={require('../Products/img/3D-button.png')} alt="3d" title="3D VIEW" className="img-fluid _3d-button" onClick={() => this.setState({modal: true})}/>
                }
                <div className="full-img m-auto">
                    <img id="displayed-img" alt='gallery' {...props} src={this.state.current} />
                </div>
                
                <div id="slideshow">
                    {
                        this.gallery.map((img, i) => {
                            if(this.state.is3d){
                                return(<span key={i} data-key={i} className={"dots "+ (img === this.state.current)} onClick={this.changeImg}/>)
                            }
                            return(<img key={i} data-key={i} alt='gallery' className={"img-fluid "+ (img === this.state.current)} src={img} onClick={this.changeImg}/>)
                        })
                    }
                </div>

                {
                    !hasModal
                    ||
                    <Modal3D
                        show={this.state.modal}
                        onHide={() => this.setState({modal: false})}
                        current={this.state.current}
                    />
                }
            </div>
        )
    }

}