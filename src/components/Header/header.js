import React, {Component} from 'react';
import './header.css';

class Header extends Component{
    render(){
        return(
            <div className="navbar-container">
                <div className="logo">
                    <img src={require("../HomePage/Img/logo.png")} className="logo"/>
                </div>

                <div className="nav-items ">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Product</a>
                    <a href="#">Gallery</a>
                    <a href="#">R&D</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        )}}


export default Header;