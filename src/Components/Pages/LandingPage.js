import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    componentDidMount() {
        window.loadCarousel('splash-carousel');
     }
    render() {
        return (
            <div className="secIntro">
                <div className="splash-carousel owl-carousel owl-theme">
                    <div className="item">
                        <Link to="/login" className="skipText">Skip</Link>
                        <img src="./app-assets/img/slider1.jpg" alt="" />
                        <div className="caption">
                                <div className="container">
                                <h5>Lorem Ipsum is simply<br />text of the printing</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    <div className="right-align my-5">
                                        <Link to="#" className="btnNext">Next <i className="material-icons">trending_flat</i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Link to="/login" className="skipText">Skip</Link>
                            <img src="./app-assets/img/slider1.jpg" alt="" />
                            <div className="caption">
                                <div className="container">
                                    <h5>Lorem Ipsum is simply<br />text of the printing</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <div className="right-align my-5">
                                            <Link to="#" className="btnNext">Next <i className="material-icons">trending_flat</i></Link>
                                        </div>
                                          </div>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./app-assets/img/slider1.jpg" alt="" />
                                <div className="caption">
                                    <div className="container">
                                        <h5>Lorem Ipsum is simply<br />text of the printing</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <div className="right-align my-5 btnGetStarted">
                                                <Link to="/login" className="btn">Get Started</Link>
                                            </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
        );
    }
}