import React, {Component} from 'react';
import './main.css';


class Main extends Component{
    render(){
        return(
            <div className="main">
                <div className="bg-image">
                    <p className="mid-word">Higher Living</p>
                </div>

                <div className="middle">
                    <div className="left">
                        <h1>About us</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"</p>
                    </div>

                    <div className="little-img">
                        <img src="https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="women"></img>
                    </div>
                </div>
           </div>
        )
    }
}

export default Main;