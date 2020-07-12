import React,{Component} from 'react';
import './homepage.css'


class HomePage extends Component {
    render(){
        return(
            <main className="homepage">
                <section className="one">
                    <div className="one__left" style={{margin: 0}}> 
                    <p>higher living</p> </div>
                    <img style={{margin: 0}} src={require('../AboutUs/img/santosh-verma-us6C9t4wz_U-unsplash(1).jpg')} alt="hand" className="image" />
                </section>

                <section className="two">
                    <img style={{margin: 0}} src={require('./Img/meditation.jpg')}  alt=""></img>
                    <aside className="two__right">
                        <div className="two__right-text">
                        <h2>Holistic human metaphysics</h2>
                        <h2>A scientific way of living</h2> <br/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p> <br/>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p> <br/>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehender</p>
                        </div>
                    </aside>
                </section>

                <section className="three">
                    <div className="empty"></div>
                    <aside className="three__text">
                        <h2>aushmat pure <br/>
                        re energising your life</h2><br/>
                        <h1>Dr.T.P.Krishnan</h1> <br/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p><br />
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p><br />
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>

                    </aside>
                </section>

                

                <section className="four">
                    <img src={require('./Img/amir-khan-4x0imdL55bQ-unsplash.jpg')} alt="" />
                    <aside className="four__text">
                    <h2>aushmat pure <br/>
                        re energising your life</h2><br/>
                        <h1>Dr.T.P.Krishnan</h1> <br/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p><br />
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p><br />
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>

                    </aside>
                </section>

                <section className="five">
                    <div className="five__left">
                        <img src={require('./Img/first.jpg')} alt=""></img>
                        <img style={{width: 250}} className="little__right" src={require('./Img/middle.jpg')} alt=""></img>
                        <img src={require('./Img/third.jpg')} alt=""></img>
                    </div>

                    <aside className="five__text">
                        <h1>Dr.T.P.Krishnan</h1>
                        <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</blockquote>
                    </aside>
                </section>

                <section className="six">
                    <aside className="six__right--img">
                        
                        <img src={require("./Img/david-hofmann-klWtuMJE8Ho-unsplash.jpg")} alt=""></img>
                        <img src={require("./Img/david-hofmann-klWtuMJE8Ho-unsplash.jpg")} alt=""></img>
                        <img src={require("./Img/david-hofmann-klWtuMJE8Ho-unsplash.jpg")} alt=""></img>
                    </aside>
                </section>
            </main>
        )
    }
}

export default HomePage;